'use strict';
import React, {
    AppRegistry,
    StyleSheet,
    StatusBar,
    ListView,
    View,
    Text,
    Component,
    Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

class QueryDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("QUERY BELOW");
        console.log(this.props.query);
    }

    render() {
        var self = this;
        var viewTitle = {
            title: "Test",
            tintColor: "#fff"
        };

        var avatarURL = "http://sh2016.ngrok.io/image?name=" + this.props.query.user.avatar;

        return(
            <View style={styles.appContainer}>
                <View style={styles.profileView}>
                    <Image style={styles.avatar} source={{uri: avatarURL}} /><Text style={styles.name}>{this.props.query.user.firstName} {this.props.query.user.lastName}</Text>
                </View>
                <Text style={styles.question}>{this.props.query.content}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 70
    },
    question: {
        fontSize: 24,
        margin: 10
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
        fontSize: 24,
        marginTop: 6
    },
    profileView: {
        flex: 1,
        flexDirection: "row",
        padding: 24
    }
});

module.exports = QueryDetail;