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
            <View style={styles.appContainer}>
                <NavigationBar title={viewTitle}
                               tintColor={"#e74c3c"}
                               statusBar={{
                             hidden: false,
                             style: "light-content"
                         }}
                               rightButton={
                          <Icon.Button name="face" size={24} backgroundColor="rgba(0,0,0,0)" style={styles.profileButton} onPress={this.showProfile} />
                         }
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    appContainer: {
        flex: 1
    }
});

module.exports = QueryDetail;