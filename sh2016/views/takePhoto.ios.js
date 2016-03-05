'use strict';
import React, {
    StyleSheet,
    StatusBar,
    View,
    Text,
    Component
} from 'react-native';

class AskQuestion extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#654321'
    }
});

module.exports = AskQuestion;