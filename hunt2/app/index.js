import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Navigator,
  TabBarIOS,
} from 'react-native';

import DirectiveList from './app/components/DirectiveList';
import Button from './app/components/common/Button';
import LoginForm from './app/components/LoginForm';
import Card from './app/components/common/Card';
import CardSection from './app/components/common/CardSection';
import Spinner from './app/components/common/Spinner';

export default class snapengerHunt extends Component {
  state = { loggedIn: null }; //are you logged in?

  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyDZrPj54Bk9o1h47dwAijBTKZjBWYt3At0',
    authDomain: 'hunt-cec80.firebaseapp.com',
    databaseURL: 'https://hunt-cec80.firebaseio.com',
    storageBucket: 'hunt-cec80.appspot.com',
    messagingSenderId: '348722860624'
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  renderContent(){
    switch (this.state.loggedIn) {
      //if the user is logged in
      case true:
        return (
        <View>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>

            <Button> Make a New Hunt </Button>

            <Button> Join a Hunt </Button>
        </View>
      );
      //if the user is not logged in
      case false:
        return <LoginForm/>;
      //if we don't know yet whether the user is logged in or not
      default:
        return <Spinner/>;
    }
  }

  render() {
    console.log('rendering something...')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Snapenger Hunt!
        </Text>

        {this.renderContent()}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    paddingTop: 10
  },
});