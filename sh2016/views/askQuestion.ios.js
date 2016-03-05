
'use strict';

var GiftedMessenger = require('react-native-gifted-messenger');
import React, {
    Dimensions,
    Component,
    StyleSheet
} from 'react-native';


var api = require('../api');

// custom message bubbles
var ImageButton = require('./Components/ImageBubble.ios');

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };

        this.handleSend = this.handleSend.bind(this);
    }

    getMessages() {
        return [
            {text: 'Hey there, human! I\'m here to help you with all your local needs. Enter a question to get started!', name: 'Loki', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left'},
        ];
    }

    handleSend(message = {}, rowID = null) {
        console.log(message);

        var self = this;

        var params = {
            type: "text",
            lat: this.props.latitude,
            lon: this.props.longitude,
            q: message.text
        };

        api.post("/query/create", params, function(err, responseData) {
            console.log("another response");
            console.log(responseData);

            if(responseData.answered) {
                for(var i = 0; i < responseData.answer.length; i++) {
                    if(responseData.answer[i].type == "text") {
                        self._GiftedMessenger.appendMessage({
                            text: responseData.answer[i].text,
                            position: 'left'
                        });
                    } else if(responseData.answer[i].type == "image") {
                        // set the image
                        self._GiftedMessenger.appendMessage({
                            text: "isMainImage",
                            image: {uri: responseData.answer[i].src},
                            position: 'left'
                        });
                        // and add the caption
                        self._GiftedMessenger.appendMessage({
                            text: responseData.answer[i].caption,
                            position: 'left'
                        });
                    } else {
                        console.log("ignoring");
                    }
                };
            } else {
                self._GiftedMessenger.appendMessage({
                    text: "We couldn't quite find an accurate answer for this. We've farmed it out to our local experts to Make America Great Again. Hang tight!",
                    position: 'left',
                    image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}
                });
            }

        });
    }

    handleReceive() {
        this._GiftedMessenger.appendMessage({
            text: 'Received message',
            name: 'Friend',
            image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},            position: 'left',
            date: new Date()
        });
    }

    render() {
        return (
            <GiftedMessenger
                ref={(c) => this._GiftedMessenger = c}

                messages={this.getMessages()}
                handleSend={this.handleSend}
                maxHeight={Dimensions.get('window').height} // 64 for the navBar
                style={styles.messenger}
                styles={{
                  bubbleLeft: {
                    backgroundColor: '#e6e6eb',
                    marginRight: 70,
                  },
                  bubbleRight: {
                    backgroundColor: '#007aff',
                    marginLeft: 70,
                  },
                }}
            />
        );
    }
}

let styles = StyleSheet.create({
    messenger: {
        marginTop: 20
    },
    bubble: {
        borderRadius: 15,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 10,
        paddingTop: 8,
    },
    text: {
        color: '#000',
    },
    textLeft: {
    },
    textRight: {
        color: '#fff',
    },
    bubbleError: {
        backgroundColor: '#e01717'
    },
});
module.exports = AskQuestion;