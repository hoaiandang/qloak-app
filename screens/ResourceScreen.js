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
          <TouchableOpacity onPress={this.onBackPress} style={{zIndex: 10, position: 'absolute', top: 16, left: 16}}>
            <Text style={{left: 20, color: 'black', fontWeight: 'bold',}}>Back</Text>
          </TouchableOpacity>
          <View style={styles.container}>
          <View style={[styles.descriptionContainer, styles.shadow]}>
          <View style={styles.imageContainer}>
            <Image style={styles.heroImage} source={require('../assets/images/pacific-center-for-human-growth.jpg')} />
          </View>
            <View style={styles.categoryDot}/>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>
                Pacific Center for Human Growth
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
              <Text style={styles.descriptionText}>
                Pacific Center for Human Growth fosters and enhances the well-being and self respect of diverse Lesbian, Gay, Bisexual, Transgender, and Queer youth, seniors, and adults through the delivery of LGBTQ competent mental health and wellness services, and through the cultivation of LGBTQ-proficient mental health care professionals.
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
    width: '96%',
  }, 
  textContainer: {
    position: 'relative',
    padding: 20,
    marginRight: 28,
    paddingLeft: 28,
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 8,
  },
  descriptionText: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 14,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 18,
  },
  heroImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%',
    opacity: 0.85,
  },
  imageContainer: {
    flexDirection: 'row',
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryDot: {
    marginTop: 20,
    marginBottom: -8,
    marginLeft: 28,
    height: 7,
    width: 40,
    borderRadius: 5,
    backgroundColor: 'orange',
    opacity: 0.5,
  },
});
