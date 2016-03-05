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

    }

    render() {
        var viewTitle = {
            title: "Test",
            tintColor: "#fff"
        };

        return(
            <Text>TEST</Text>
        )
    }
}

var styles = StyleSheet.create({
    appContainer: {
        flex: 1
    }
});

module.exports = QueryDetail;