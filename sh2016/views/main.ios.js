/**
 * SH2016
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    StatusBar,
    ListView,
    View,
    Text,
    Image,
    Component,
    TabBarIOS
} from 'react-native';


// bits from NPM
import NavigationBar from 'react-native-navbar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
var RNGeocoder = require('react-native-geocoder');

// load views
var Answer = require('../views/answer.ios'),
    QueryDetail = require('../views/queryDetail.ios'),
    Ask = require('../views/ask.ios');


// sample data
var SAMPLE_DATA = [
    {
        id: 1,
        title: "I love football. What should I see whilst I'm in Manchester?",
        content: "I'm a Bury fan. Don't judge.",
        time: "8:03AM",
        user: {
            "firstName": "Jamie",
            "lastName": "Hoyle",
            "avatar": "https://pbs.twimg.com/profile_images/628229227033284609/x6xBdc_W.jpg",
            "email": "jamie@hoyle.io"
        },
        location: {
            "lat": "2.3333",
            "long": "2.333",
            "text": "Manchester Metropolitan University"
        },
    },
    {
        id: 2,
        title: "Anyone got any tips for navigating the Metrolink?",
        content: "The maps suck and GetMeThere doesn't really exist yet.",
        time: "10:20AM",
        user: {
            "firstName": "Alan",
            "lastName": "Doherty",
            "avatar": "https://pbs.twimg.com/profile_images/674020861301649408/UHv0LjvM.jpg",
            "email": "alan.fred.doherty@googlemail.com"
        },
        location: {
            "lat": "2.3333",
            "long": "2.333",
            "text": "Manchester Metropolitan University"
        },
    },
    {
        id: 3,
        title: "Where's the best place to buy a spinning totem?",
        content: "No reason in this reality.",
        time: "13:19PM",
        user: {
            "firstName": "Dom",
            "lastName": "Cobb",
            "avatar": "http://vignette3.wikia.nocookie.net/chrisnolan/images/6/65/Dom_Cobb.jpg/revision/latest?cb=20120410172932",
            "email": "leo@cobblesworth.com"
        },
        location: {
            "lat": "2.3333",
            "long": "2.333",
            "text": "Limbo"
        },
    }
];



class Main extends Component {

    constructor(props) {
        super(props);
        // set the initial state of our application, and set up geolocation watch support
        this.watchID = null;
        this.state = {
            showAsk: false,
            showAnswer: true,
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            currentLocationName: '',
            watchID: 0,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };

        this.renderQuery = this.renderQuery.bind(this);
        this.rowPressed = this.rowPressed.bind(this);
    }

    // when we load, get the location
    componentDidMount() {
        var self = this;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                self.setState({initialPosition: initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        console.log("starting to watch position");

        this.watchID = navigator.geolocation.watchPosition((position) => {
            // now, geocode
            RNGeocoder.reverseGeocodeLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var lastPosition = JSON.stringify(position);

                    self.setState({
                        lastPosition: lastPosition || "",
                        currentLocationName: data[0]["name"] || ""
                    });

                    // now fetch data for this location
                    self.fetchData();
                }
            });
        });
    }

    // when we unload, stop tracking
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    showProfile() {
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

    rowPressed(self, query) {
        console.log("CLICKED");
        console.log(query);
        alert("CLICKED");
    }

    renderQuery(query) {
        return(
            <TouchableHighlight onPress={() => this.rowPressed(this, query)}>
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
            </TouchableHighlight>
        )
    }
    render() {
        var viewTitle = {
            title: this.state.currentLocationName,
            tintColor: '#fff'
        };

        return (
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

                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderQuery}
                    style = {styles.listView}
                />

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Question" onPress={() => console.log("notes tapped!")}>
                        <Icon name="message" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Photo" onPress={() => {}}>
                        <Icon name="insert-photo" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

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
    },
    appContainer: {
        flex: 1
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    },
    profileButton: {
        bottom: 10
    }
});

module.exports = Main;