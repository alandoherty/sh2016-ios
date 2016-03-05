/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Dashboard = require('./views/dashboard.ios');
var Chat = require('./views/chat.ios');

class sh2016 extends Component {
  constructor(props) {
    super(props);
    // set the initial state of our application
    this.state = {
      selectedTab: 'dashboard'
    }
  }
  render() {
    return (
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'dashboard'}
            icon={{uri:'featured'}}
            onPress={() => {
              this.setState({
                selectedTab: 'dashboard'
              });
            }}>
              <Dashboard/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
            selected={this.state.selectedTab === 'chat'}
            icon={{uri:'contacts'}}
            onPress={() => {
              this.setState({
                selectedTab: 'chat'
              });
            }}>
              <Chat/>
            </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('sh2016', () => sh2016);
