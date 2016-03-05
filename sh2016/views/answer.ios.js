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

// the actual render view
class Dashboard extends Component {
    // initialisation
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    }

    // custom functions
    fetchData() {
        // do fetch() eventually but for now just set the datasource to our sample data
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(SAMPLE_DATA),
            loaded: true
        });
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    renderQuery(query) {
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: query.user.avatar}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>{query.user.firstName.toUpperCase()} {query.user.lastName.toUpperCase()}, {query.time}</Text>
                    <Text style={styles.title}>{query.title}</Text>
                    <Text style={styles.locationText}><Icon name="location-on" /><Text style={styles.locationDistance}>0.3mi</Text>, {query.location.text}</Text>
                </View>
            </View>
        )
    }

    // now for component and render functions
    componentDidMount() {
        this.fetchData();
    }

    render() {
        if(!this.state.loaded) {
            return this.renderLoadingView();
        }

        return(
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderQuery}
                style = {styles.listView}
            />
        );
    }
}

//styles
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F7F7F7',
        paddingTop: 10
    },
    rightContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        paddingBottom: 10
    },
    thumbnail: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    listView: {
        padding: 10,
        backgroundColor:'#F7F7F7'
    },
    name: {
        fontWeight: "700",
        paddingBottom: 5
    },
    title: {
        fontSize: 18,
        color: '#000'
    },
    locationText: {
        color: '#3c9cdc',
        paddingTop: 5
    },
    locationDistance: {
        fontWeight: "700"
    }
});

module.exports = Dashboard;