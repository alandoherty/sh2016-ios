'use strict';
import React, {
    AppRegistry,
    StyleSheet,
    StatusBar,
    ListView,
    View,
    Text,
    Component,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

var api = require('../api');

class QueryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        console.log("QUERY BELOW");
        console.log(this.props.query);
    }

    submitForm() {
        this.setState({
            text: ""
        });
    }

    render() {
        var self = this;
        var viewTitle = {
            title: "Test",
            tintColor: "#fff",
        };

        var avatarURL = "http://4d499925.ngrok.com/image?name=" + this.props.query.user.avatar;
        return(
            <View style={styles.appContainer}>
                <View style={styles.profileView}>
                    <Image style={styles.avatar} source={{uri: avatarURL}} /><Text style={styles.name}>{this.props.query.user.firstName.toUpperCase()} {this.props.query.user.lastName.toUpperCase()}</Text>
                </View>
                <Text style={styles.question}>{this.props.query.content}</Text>
                <TextInput
                    multiline={true}
                    style={{height: 60, borderColor: 'gray', borderWidth: 1, borderRadius: 15, padding: 10, marginTop: 25}}
                    onChangeText={(text) => self.setState({text})}
                    value={self.state.text}
                />
                <TouchableOpacity style={styles.touchableOpacity}
                                  onPress={() => this.submitForm()}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    appContainer: {
        paddingTop: 90,
        paddingLeft: 24,
        paddingRight: 24
    },
    question: {
        fontSize: 24,
        marginTop: 14
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    name: {
        height: 48,
        alignItems: "center",
        marginLeft: 24,
        fontSize: 18,
        marginTop: 8,
        fontWeight: "700"
    },
    profileView: {
        flex: 1,
        flexDirection: "row"
    },
    touchableOpacity: {

    },
    submitText: {
        color: "rgba(231,76,60,1)",
        marginTop: 15,
        fontSize: 18
    }
});

module.exports = QueryDetail;