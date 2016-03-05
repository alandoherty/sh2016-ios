/**
 * SH2016
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';


// bits from NPM
import NavigationBar from 'react-native-navbar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
var RNGeocoder = require('react-native-geocoder');

// load views
var Answer = require('./views/answer.ios'),
    Main = require('./views/main.ios'),
    Ask = require('./views/ask.ios');


class sh2016 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigationBarHidden: false,
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      currentLocationName: '',
      watchID: 0
    };
  }

  render() {
    return(
        <Navigator ref="nav"
                      itemWrapperStyle={styles.navWrap}
                      style={styles.nav}
                      navigationBarHidden={this.state.navigationBarHidden}
                      initialRoute={{
                        title: this.state.currentLocationName,
                        index: 0
                      }}
                      renderScene={(route, navigator) =>
                        <Main
                          name={route.name}
                          onForward={() => {

                            var nextIndex = route.index + 1;
                            navigator.push({
                              name: "Scene " + nextIndex,
                              index: nextIndex
                            })
                          }}
                          onBack={() =>  {
                            if(route.index > 0) {
                              navigator.pop();
                            }
                          }}
                        />
                      }
                      />
    )
  }
}

var styles = StyleSheet.create({
  navWrap: {
    flex: 1,
    marginTop: 70
  },
  nav: {
    flex: 1
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

AppRegistry.registerComponent('sh2016', () => sh2016);
