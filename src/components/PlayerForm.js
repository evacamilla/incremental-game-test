import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';
import ErrorBox from './ErrorBox.js';

class PlayerForm extends Component {
    state = {
        nameOfPlayer: null,
        parisImg: null,
        nameIsSet: false,
        index: 0,
        showErrorBox: false,
        errorMessage: "",
        parisImages: [
            //'https://png2.kisspng.com/20180525/xzp/kisspng-paris-hilton-baseball-cap-headgear-glasses-5b0879c9ef4a33.7379160915272821219801.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fjF5sVbyEqQKlf60J319Tm-BeZUfoNRGm7itcV2gNsdKGSmt',
            'https://orig00.deviantart.net/5499/f/2013/198/7/7/paris_hilton_png_by_brokenheartdesignz-d6du9ik.png',
            'https://cdn140.picsart.com/277260344010211.png?r240x240',
            'data:image/jpeg;base64,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',
            //'https://png2.kisspng.com/20180401/qlw/kisspng-paris-hilton-clothing-model-top-katrina-kaif-5ac06657767042.1865594615225585514851.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuiNmCtqHWVlEwsW_JUmyTuKZ2cWgtxtUWrfPi0kseTR9NJjd',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUIQVKSwgFZ2gUoDl29VizInMKR8k3GfxTBTJyIAWUQYZN4gd',
            //'2wCEAAkGBxMTEhUTExMWFRUTFx0XGBgYFxkXFxgYFRcXGBgYGBcaHSggGB0lGxYXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICItLS0tLS0tLS0tLS0tLS8uLy0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf',
            'https://www.motherjones.com/wp-content/uploads/images/paris.img_assist_custom-200x262.gif',

        ]
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    setImg = (event) => {
        this.setState({ parisImg: event.target.src });
    }

    handleSubmit = (event) => {
        //prevent form from submitting(reloading page and old values of state)
        event.preventDefault();
        if (this.state.parisImg != null) {
            //handleName is function in App.js, changing values in that state passing our argument
            this.props.handlePlayerForm(this.state.nameOfPlayer, this.state.parisImg);
        } else {
            this.setState({
                errorMessage: "Euh! I can't look like that! You have to choose a player...",
                showErrorBox: true
            });
        }
    }

    nextImg = () => {
        if (this.state.index === this.state.parisImages.length) {
            this.setState({ index: 0 });
        } else {
            this.setState({ index: this.state.index + 1 })
            console.log(this.state.index);
        }
    }

    checkName = (event) => {
        event.preventDefault();
        if(this.state.nameOfPlayer != null){
            this.setState({ nameIsSet: true });
        } else {
            this.setState({
                errorMessage: "Babe... What's your name?",
                showErrorBox: true
            });
        }
    }

    toggleErrorBox = () => {
        this.setState({ showErrorBox: !this.state.showErrorBox });
    }


    render() {
        return (
            <div className="name-form">
                <form onSubmit={this.handleSubmit}>
                    {this.state.nameIsSet ?

                        <div>
                            <h2>Choose outfit</h2>
                            <div class="flex">
                                <div onClick={this.setImg} className="paris-images">
                                    <img  src={this.state.parisImages[this.state.index]} />
                                </div>
                                    <i onClick={this.nextImg} class="fas fa-chevron-right fa-3x"></i>
                            </div>
                            <Button className="btn" value='Set player' type="submit" />
                        </div>
                    
                        :
                        <div>

                            <h2>Type in your name</h2>
                            <input name="nameOfPlayer" onChange={this.handleChange} type="text" />
                            <button className="btn" onClick={this.checkName}>
                                Set name
                            </button>
                        </div>
                    }
                </form>
                {this.state.showErrorBox && <ErrorBox errorMessage={this.state.errorMessage} toggleErrorBox={this.toggleErrorBox} />
                }
            </div>
        );
    }
}

PlayerForm.propTypes = {
    handlePlayerForm: PropTypes.func.isRequired
}

export default PlayerForm;