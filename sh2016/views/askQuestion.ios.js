'use strict';
import React, {
    StyleSheet,
    StatusBar,
    TouchableHighlight,
    TextInput,
    View,
    Text,
    Component
} from 'react-native';

var api = require('../api');

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };

        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage() {
        alert("sending this shit");
        var message = this.state.text;
        this.setState({
            text: ""
        });

        var params = {
            type: "text",
            lat: this.props.latitude,
            lon: this.props.longitude,
            q: message
        }

        api.post("/query/create", params, function(err, responseData) {
            alert("Response complete");
            console.log("another response");
            console.log(responseData);
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.messageArea}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableHighlight onPress={() => this.sendMessage(this)} style={styles.sendMessage}>
                        <Text style={styles.sendMessageText}>Send</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        paddingTop: 70
    },
    messageArea: {
        flex: 1,
        height: 64,
        alignItems: 'flex-start',
        justifyContent: "center",
        alignSelf: 'flex-start',
        backgroundColor: '#ecf0f1',
        borderTopWidth: 1,
        borderTopColor: '#95a5a6'
    },
    sendMessage: {
    },
    sendMessageText: {
        color: "#123456",
        fontSize: 16,
        padding: 10,
        width: 80
    }
});

module.exports = AskQuestion;