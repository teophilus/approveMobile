/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var data = 
  [
    {"id":0,"image":"http://36.media.tumblr.com/5772c213215b93d28b3e7d623ea235f5/tumblr_o2kvw6xK5B1qk9hrqo1_500.jpg"
    },
    {"id":1,"image":"http://41.media.tumblr.com/8e98347075f892dd68089b484bdfb24b/tumblr_o18cw9IQ9o1qk9hrqo1_500.jpg"
    },
    {"id":2,"image":"http://41.media.tumblr.com/03697595f058ea4eb290ea740981408f/tumblr_o40g74a1vw1qk9hrqo1_500.jpg"
    },
    {"id":3,"image":"http://40.media.tumblr.com/6a99e8752622d46ce52a2ebab2d423ca/tumblr_o3z3kl6Fbq1qk9hrqo1_500.jpg"
    },
    {"id":4,"image":"http://40.media.tumblr.com/1292f03f7617d2b6fb2fd959468f59ac/tumblr_o3wxp2GSmH1qk9hrqo1_500.jpg"
    },
    {"id":5,"image":"http://41.media.tumblr.com/1aa38783ac6f4075b945c4f1f846b67d/tumblr_o3soxlFgbd1qk9hrqo1_500.jpg"
    }
  ]

var {height, width} = Dimensions.get('window');
console.log(height,width);

class approveMobile extends Component {

  constructor(props){
    super(props);

    this.state = data[0]  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.welcome}>
            Header
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            resizeMode={'contain'}
            source={{uri: this.state.image }}
            style={{width: width, height: 500}} />
        </View>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={this.onRejectPressed.bind(this)}>
            <Image
              style={styles.actionButton}
              source={require('image!icons_x')} /> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onApprovePressed.bind(this)}
            style={styles.actionButton}>
            <Image
              style={styles.actionButton}
              source={require('image!icons_check')} /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onApprovePressed(e){
    console.log('approved!')
    console.log(this.state)
    var new_id = this.state.id + 1;
    console.log(new_id)
    if (new_id < data.length) {
      this.setState(data[new_id])
    }
  
  }

  onRejectPressed(){
    console.log('Rejected!')
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  topbar: {
    alignSelf: 'stretch',
    justifyContent: 'center', 
    backgroundColor: '#03a9f4',
    height: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageBox: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbar: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  actionButton: {

  },
  test : {
    borderColor: 'red',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('approveMobile', () => approveMobile);
