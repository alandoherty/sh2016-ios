'use strict';
import React, {
    StyleSheet,
    StatusBar,
    View,
    Text,
    Component
} from 'react-native';

import NavigationBar from 'react-native-navbar';


// the actual render view
class Chat extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.currentLocationName = props.currentLocationName;
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    {this.currentLocationName}
                </Text>
            </View>
        );
    }
}

//styles
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    }
});

module.exports = Chat;