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
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onBackPress}>
          <Text>Back</Text>
        </TouchableOpacity>
          <View style={styles.categoryNavContainer}>
            <View style={[styles.categoryNav, styles.shadow]}>
              <Category category={'Work'}/>
              <Category category={'Shelter'}/>
              <Category category={'Medical'}/>
              <Category category={'Play'}/>
            </View>
          </View>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Resource style={styles.resourceElement}/>
        </ScrollView>
      </View>
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
  shadow: {
    shadowOffset:{  width: 0,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.1, 
    shadowRadius: 1,
  },
  header: {
    alignItems: 'center', 
    borderRadius: 0, 
    width: '100%', 
    paddingTop: 56, 
    paddingBottom: 16, 
  },
    headerContainer: {
    alignItems: 'center',
    zIndex: 10,  
  },
  categoryNav: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 24,
    paddingBottom: 12,
    marginBottom: -20,
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  categoryNavContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 9,
  },
  resourceElement: {
    marginBottom: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 36,
  },
});
