
'use strict';

var GiftedMessenger = require('react-native-gifted-messenger');
import React, {
    Dimensions,
    Component,
    StyleSheet
} from 'react-native';

var api = require('../../api');

export default class ImageBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        alert("RENDER RENDER");
        var self = this;
        return(
            <Image style={styles.bubble}
                   source={{uri: self.props.imageURL}} />
        )
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
        height: 200
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

module.exports = ImageBubble;