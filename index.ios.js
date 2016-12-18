'use strict';

var React = require('react');
var ReactNative = require('react-native');

var CountryPage = require('./CountryPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});


class testClass extends React.Component {
  render() {
    // return React.createElement(ReactNative.Text, {style: styles.text}, "Hello World!");
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}

class test2 extends React.Component {
  render() {
    return (
        <ReactNative.NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Property Finder',
              component: CountryPage
            }}/>
    );
  }
}


ReactNative.AppRegistry.registerComponent('MoviesOwlNative', function() { return test2 });
