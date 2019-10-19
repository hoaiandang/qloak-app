import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
import { MonoText } from '../components/StyledText';
import Resource from '../components/Resource';
import Category from '../components/Category';

export default class ResourceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onBackPress = (user) => {
    this.props.navigation.navigate('Feed', { ...user });
    console.log("this happens");
  };

  render() {
    return (
      
        <ScrollView style={styles.topContainter} contentContainerStyle={styles.contentContainer}>
          <TouchableOpacity onPress={this.onBackPress} style={{
            zIndex: 10, 
            position: 'absolute', 
            top: 16, 
            left: 24,
            backgroundColor: "#008FBF",
            borderRadius: 20,
            padding: 4,
            paddingLeft: 8,
            paddingRight: 8}}>
            <Text style={{
              color: "white",
              fontWeight: "bold", 
           }}>Back</Text>
          </TouchableOpacity>
          <View style={styles.container}>
          <View style={[styles.descriptionContainer, styles.shadow]}>
          <View style={styles.imageContainer}>
            <Image style={styles.heroImage} source={require('../assets/images/celias-mexican-restaurant.jpg')} />
            <View style={{
              backgroundColor: "#008FBF", 
              width: '100%',
              height: 12,
              opacity: 0,
            }}></View>
          </View>
            <View style={[styles.textContainer, {paddingTop: 36,}]}>
              <Text style={styles.titleText}>
                Celia's Mexican Restaurant
              </Text>
              <Text style={{fontSize: 6}}> </Text>
              <Text style={styles.descriptionText}>
                (510) 548-8283
              </Text>
              <Text style={styles.descriptionText}>
                2712 Telegraph Avenue, Berkeley, CA, 94705
                </Text>
            </View>
          </View>
          <View style={[styles.descriptionContainer, styles.shadow]}>
            <View style={styles.textContainer}>
              <Text style={[styles.descriptionText, {paddingBottom: 12,}]}>
                Welcome to Celia's, thank you for giving us the opportunity to serve you. 
                Our goal is to provide natural and fresh home-style Mexican food with the best quality. 
                We are proud to be a part of this beautiful community. Your patronage is appreciated. 
                Thank you very much for being our guest.
              </Text>
              <Text style={[styles.descriptionText, {paddingBottom: 12,}]}>
                Everyday in Celia's we make fresh salsa and guacamole, our tortillas are prepared without lard, 
                our chicken is presented skinless and trimmed, our steak and pork are lean, our tamales are handmade, 
                we serve both refried and whole beans, and last but not least our margaritas do not come out of a machine. 
                Instead our secret mix is made fresh daily. 
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  topContainter: {
    backgroundColor: '#F4F4F4',
    width: '100%',
    flex: 1,
  },
  shadow: {
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.15, 
    shadowRadius: 1.5,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
    container: {
    width: '100%',
  }, 
  textContainer: {
    position: 'relative',
    padding: 20,
    marginRight: 20,
    paddingLeft: 36,
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 0,
  },
  descriptionText: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
  },
  titleText: {
    fontWeight: '500',
    color: 'rgba(0,0,0,0.8)',
    fontSize: 18,
  },
  heroImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%',
    opacity: 0.85,
  },
  imageContainer: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
