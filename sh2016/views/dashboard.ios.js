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
class Dashboard extends Component {
    render() {
        const viewTitle = {
            title: 'Dashboard',
            tintColor: '#fff'
        };
        return(
            <View style={styles.appContainer}>
                <NavigationBar title={viewTitle}
                    tintColor={"#e74c3c"}
                    statusBar={{
                        hidden: false,
                        style: "light-content"
                    }}
                />
                <View style={styles.container}>
                    <Text>
                        Dashboard view
                    </Text>
                </View>
            </View>
        );
    }
}

//styles
var styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    }
});

module.exports = Dashboard;