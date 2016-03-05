/**
 * SH2016
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

// bits from NPM
import NavigationBar from 'react-native-navbar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

// load views
var Main = require('./views/main.ios');

class sh2016 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigationBarHidden: false
    };
  }

  render() {
    return(
        <NavigatorIOS
          style={styles.navWrap}
          barTintColor="rgba(231,76,60,1)"
          titleTextColor="#ffffff"
          tintColor="#ffffff"
          initialRoute={{
            title: "Loki",
            component: Main
          }} />
    )
  }
}

var styles = StyleSheet.create({
  navWrap: {
    flex: 1
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
