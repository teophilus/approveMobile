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
        
        <View style={styles.topbarWrapper}>
          <View style={styles.topbar}>
            <TouchableOpacity
              onPress={this.onHamburgerPressed.bind(this)}
              style={styles.hamburger}>
              <Image
                resizeMode={'contain'}
                style={styles.hamburgerImg}
                source={require('image!hamburger')} /> 
            </TouchableOpacity>
            <Image
              resizeMode={'contain'}
              style={styles.topbarLogo}
              source={require('image!topbar_logo')} />
              <View style={styles.topbarSpacer} /> 
          </View>
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
              resizeMode={'contain'}
              style={styles.actionButtonImg}
              source={require('image!Reject_btn')} /> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onApprovePressed.bind(this)}
            style={styles.actionButton}>
            <Image
              resizeMode={'contain'}
              style={styles.actionButtonImg}
              source={require('image!Approve_btn')} /> 
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

  onHamburgerPressed(){
    console.log('Hamburger!')
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topbarWrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#03a9f4',
    height: 70,
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    // borderWidth: 1,
  },
  topbarLogo: {
    // borderWidth: 1,
    flex: .80,
  },
  topbarSpacer: {
    // borderWidth: 1,
    flex: .10,
  },
  hamburger: {
    // borderWidth: 1,
    alignSelf: 'center',
    flex: .10,
    marginLeft: 10,
  },
  hamburgerImg: {
    // borderWidth: 1,
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
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  toolbar: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderColor: 'green',
    // borderWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    width: width,
    flex: .12,
  },
  actionButton: {
    // borderColor: 'blue',
    // borderWidth: 1,
    alignItems: 'center',
  },
  actionButtonImg: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  test: {
    borderColor: 'red',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('approveMobile', () => approveMobile);
