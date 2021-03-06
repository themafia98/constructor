import {errorAction, loadUpdateCurrentProject} from '../actions';

const updateMiddleware = (item) => async (dispatch,getState, {firebase}) => {
    /** Save new updates for projects */
    let newProjects = item.projects.map(project => {
        if (project.id === item.idProject) {
            project.components = [...item.components]
            project.sectionsProject = [...item.sectionsProject]
        }
        return project;
    });
    await firebase.db.collection("users").doc(item.uid).update({
        'projects': JSON.parse(JSON.stringify(newProjects))
    })
    .then(response => {
        /** find and save updates */
        let project = item.projects.find(itemdb => itemdb.id === item.idProject);
        dispatch(loadUpdateCurrentProject({
            components: [...project.components],
            idProject: item.idProject,
            sectionsProject: item.sectionsProject,
        }))
    })
    .catch(error => dispatch(errorAction(error.message)));
};

export default updateMiddleware;