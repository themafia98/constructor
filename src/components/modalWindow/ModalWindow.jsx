import React,{Fragment} from 'react';

import isFetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';
import eventEmitter,{controllerStream} from '../../EventEmitter.js';

import ImageItem from '../imageViewer/imageItem';

import CreateProject from './createProject/createProject';
import SearchModal from './Search/searchModal';
import './modal.scss';
require('es6-promise').polyfill();

class ModalWindow extends React.PureComponent {

    static propTypes = {
        workMode: PropTypes.string.isRequired, /** @Mode for modal */
        cabinetStream: PropTypes.object, /** @Events stream cabinet */
        eventStreamBuild: PropTypes.object, /** @Events stream build */
        idComponent: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]) /** @Id current user project */
    }

    state = {
        workMode: this.props.workMode,
        loading: false,
        images: {
            loading: false,
            buttonSearchDisabled: false,
            selectedItem: null, 
            showUrl: null, 
            images: null,
            urlFull: null,
            imageBoxView: false, 
            iframe: null,
            error: ''
        },
        newProject: {
            validateName: false,
            validateType: false,
            disabled: true,
            name: '',
            type: 'empty'
        },
        imageMenuActive: false,
        warning: {
            lengthMax: 'Max length: 20 laters',
            warningNumber: `Don't use numbers`,
            lengthMin: 'Min length: 4 letters',
            type: 'Select type of webpage',
        }
    }

    inputSearch = null;
    inputSelect = null;

    searchData = (event,value, mode) => {

        this.setState({...this.state, 
            images: {
                ...this.state.inages,
                loading: true,
                buttonSearchDisabled: true
            }
        });

        let search = null;
        if (value) search = value;
        else search = this.inputSearch.value;

        if (mode !== 'media'){
        const modeAPI = 'search/photos/?page=1&per_page=40&query=';
        const api = `https://api.unsplash.com/${modeAPI}`;
 
        isFetch(`${api + search}&client_id=${process.env.REACT_APP_UNSPLASH_TOKEN}`)
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error('request invalid');
        })
        .then(response => {
            let {results} = response;
            if (results.length)
            this.setState({
                ...this.state,
                images: {
                    ...this.state.images,
                    loading: false,
                    imageBoxView: true,
                    error: '',
                    images: [...results],
                    buttonSearchDisabled: false
                },
            });
            else throw new Error('Photos not found');
        })
        .catch(error => {
            console.error(error.message);
            this.setState({
                ...this.state,
                images: {
                    ...this.state.images,
                    buttonSearchDisabled: false,
                    loading: false,
                    error: error.message},
                imageBoxView: false,
            });
        });
        } else this.searchYouTubeAPI(search);
    }

    
    searchYouTubeAPI = (search) => {

        const API = `https://www.googleapis.com/youtube/v3/search?part=snippet`;
        const RAITE = `&maxResults=25&order=date&q=${search}`;
        const KEY = `&key=${process.env.REACT_APP_YOUTUBE_SEARCH_TOKEN}`;
        isFetch(API + RAITE + KEY)
        .then(res => {
            if (res.ok)
            return res.json();
            else throw new Error (`Error ${res.status}`);
        })
        .then(res => {
            const arrayItems = [];
            res.items.forEach(item => {
                arrayItems.push({
                    urls: { regular: item.snippet.thumbnails.high.url },
                    videoId: item.id.videoId
                })
            });
            return arrayItems;
        })
        .then(results => {
            this.setState({
                ...this.state,
                images: {
                    ...this.state.images,
                    loading: false,
                    imageBoxView: true,
                    error: '',
                    images: [...results],
                    buttonSearchDisabled: false
                },
            });
        })
        .catch(error => console.error(error));
    }

    showMenuImage = event => {
        this.setState({
            ...this.state, 
            imageMenuActive: true,
            images: {
                ...this.state.images,
                selectedItem: event.id, 
                showUrl: event.url,
                urlFull: event.urlFull,
                iframe: event.iframe

            }
        });
    }

    showImage = event => {

        const {showUrl, iframe} = this.state.images;

        this.props.eventStreamBuild.emit("EventView", {
            action: true, 
            target: showUrl ? showUrl : null,
            iframe: iframe,
            mode: this.props.modalSearchMode
        });
        event.stopPropagation();
    }

    setSelectedImage = event => {

        let data = {...this.state.images};
        if (this.props.modalSearchMode === 'background'){
            controllerStream.emit(`EventSetBackgroundImage${this.props.idComponent}`,data);
            eventEmitter.emit(`EventSetBImageInstumentPanel`,{images: data, mode: this.props.modalSearchMode});
        } else if (this.props.modalSearchMode === 'image'){
            controllerStream.emit(`EventSetCurrentImage${this.props.idComponent}`, data);
            eventEmitter.emit(`EventSetBImageInstumentPanel`, {images: data,  mode: this.props.modalSearchMode });
        } else if (this.props.modalSearchMode === 'media'){
            controllerStream.emit(`EventSetContentMedia${this.props.idComponent}`,{
                    iframe: data.iframe,
                    mode: this.props.modalSearchMode
                }
            );
            eventEmitter.emit(`EventSetIframe`, {iframe: data.iframe});
        }

        event.stopPropagation();
    };

    makeImageResultBox = (items) => {
        if (!items) return null;

        return items.map((item,i) =>{
           return <ImageItem 
                key = {`item${i}`} 
                id = {i}
                urlContent = {item.videoId ? item.videoId : null}
                selected = {this.state.images.selectedItem === i ? true : false} 
                isFull = {false}
                urls = {{...item.urls}} 
            />
        });

    }

    addNewProject = event => {
        let mode = this.state[this.state.workMode];
        if (mode.validateType &&  mode.validateName) {

            this.setState({
                ...this.state,
                loading: true,
            });
            this.props.cabinetStream.emit('EventAddProject',
            {
                title: this.state[this.state.workMode].name,
                type: this.state[this.state.workMode].type
            });

            this.props.cabinetStream.emit('EventChangeWorkMode',{action: 'default'});
        }
    }

    selectOption = event => {

        let inputs = {...this.state[this.state.workMode]};
        inputs.type = event.target.value;
        inputs.validateType = inputs.type !== 'empty';
        inputs.disabled = inputs.validateType && inputs.validateName ? false : true;
        this.setState({
            ...this.state,
            [this.state.workMode]: inputs
        });
    }

    validateName = event => {

        let inputs = {...this.state[this.state.workMode]};
        inputs.name = event.target.value;
        inputs.validateName = /^\D{4,20}$/i.test(inputs.name);
        inputs.disabled = inputs.validateType && inputs.validateName ? false : true;

        this.setState({
            ...this.state,
            [this.state.workMode]: inputs
        })
    };

    cancel = event => {

        if (this.state.workMode === 'Search')
        this.props.eventStreamBuild.emit("EventModalSearchOn", {action: 'offline', mode: null});
        else  this.props.cabinetStream.emit('EventChangeWorkMode',{action: 'default'});
    }

    refSelect = (node) => this.inputSelect = node;
    refSearch = node => this.inputSearch = node;

    render(){
        switch (this.state.workMode){
            case 'newProject':
                return <CreateProject
                            dissabled = {this.state[this.state.workMode].disabled}
                            warningNumber = {this.state.warning.warningNumber}
                            validName = {this.state[this.state.workMode].validateName}
                            nameLength = {this.state[this.state.workMode].name.length}
                            name = {this.state[this.state.workMode].name}
                            validType = {this.state[this.state.workMode].validateType}
                            warningType = {this.state.warning.type}
                            typeClassName = {this.state[this.state.workMode].validateName}
                            warningLengthMin = {this.state.warning.lengthMin}
                            warningLengthMax = {this.state.warning.lengthMax}
                            cbValidateName = {this.validateName}
                            cbSelectOption = {this.selectOption}
                            cbAddNewProject = {this.addNewProject}
                            cbCancel = {this.cancel}
                            loading = {this.state.loading}
                        />
            case 'Search':
                    return (
                        <SearchModal
                            images = {this.state.images['images']}
                            loading = {this.state.images.loading}
                            view = {this.state.images.imageBoxView}
                            dissabled = {this.state.images.buttonSearchDisabled}
                            error = {this.state.images.error}
                            cbCancel = {this.cancel}
                            menuActive = {this.state.imageMenuActive}
                            cbMakeImageResultBox = {this.makeImageResultBox}
                            cbShowImage = {this.showImage}
                            cbSetSelectedImage = {this.setSelectedImage}
                            modalSearchMode = {this.props.modalSearchMode}
                            cbSearch = {this.searchData}
                        />
                    )

            default: return <Fragment></Fragment>
        }
    }

    componentDidMount = event => {
        if (this.state.workMode === 'Search')
            eventEmitter.on('EventShowMenuImage', this.showMenuImage);
    }

    componentWillUnmount = event => {
        if (this.state.workMode === 'Search')
            eventEmitter.off('EventShowMenuImage', this.showMenuImage);
    }
}

export default ModalWindow;

