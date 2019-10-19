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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPress = (user) => {
    this.props.navigation.navigate('Details', { ...user });
    console.log("this happens");
  };


  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.categoryNavContainer}>
            <View style={[styles.categoryNav]}>
              <Category category={'Play'}/>
              <Category category={'Eat'}/>
              <Category category={'Shop'}/>
              <Category category={'Health'}/>
              <Category category={'Work'}/>
            </View>
          </View>
          <Resource
            style={styles.resourceElement}
            onPress={this.props.onResourcePress}
            category={"Health"}
            title={"SF LGBTQ Center"}
            distance={"0.5"}
            image={require("../assets/images/sf-lgbtq-center.jpg")}
            parentState={this.props.parentState}
            onPlayPress={this.props.onPlayPress}
            onEatPress={this.props.onEatPress}
            onShopPress={this.props.onShopPress}
            onHealthPress={this.props.onHealthPress}
            onWorkPress={this.props.onWorkPress}
            onUnPress={this.props.onUnPress}
          />
          <Resource
            style={styles.resourceElement}
            onPress={this.props.onResourcePress}
            category={"Eat"}
            title={"Celia's Mexican Restaurant"}
            distance={"0.5"}
            image={require("../assets/images/celias-mexican-restaurant.jpg")}
            parentState={this.props.parentState}
            onPlayPress={this.props.onPlayPress}
            onEatPress={this.props.onEatPress}
            onShopPress={this.props.onShopPress}
            onHealthPress={this.props.onHealthPress}
            onWorkPress={this.props.onWorkPress}
            onUnPress={this.props.onUnPress}
            onPress={this.onPress}
          />
          <Resource
            style={styles.resourceElement}
            onPress={this.props.onResourcePress}
            category={"Shop"}
            title={"Outfit Castro"}
            distance={"0.5"}
            image={require("../assets/images/outfit-castro.jpg")}
            parentState={this.props.parentState}
            onPlayPress={this.props.onPlayPress}
            onEatPress={this.props.onEatPress}
            onShopPress={this.props.onShopPress}
            onHealthPress={this.props.onHealthPress}
            onWorkPress={this.props.onWorkPress}
            onUnPress={this.props.onUnPress}
          />
          <Resource
            style={styles.resourceElement}
            onPress={this.props.onResourcePress}
            category={"Play"}
            title={"Cinch Saloon"}
            distance={"0.5"}
            image={require("../assets/images/cinch-saloon.jpg")}
            parentState={this.props.parentState}
            onPlayPress={this.props.onPlayPress}
            onEatPress={this.props.onEatPress}
            onShopPress={this.props.onShopPress}
            onHealthPress={this.props.onHealthPress}
            onWorkPress={this.props.onWorkPress}
            onUnPress={this.props.onUnPress}
          />
          <Resource
            style={styles.resourceElement}
            onPress={this.props.onResourcePress}
            category={"Work"}
            title={"American Airlines"}
            distance={"0.5"}
            image={require("../assets/images/american-airlines.jpg")}
            parentState={this.props.parentState}
            onPlayPress={this.props.onPlayPress}
            onEatPress={this.props.onEatPress}
            onShopPress={this.props.onShopPress}
            onHealthPress={this.props.onHealthPress}
            onWorkPress={this.props.onWorkPress}
            onUnPress={this.props.onUnPress}
          />
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
    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.15, 
    shadowRadius: 2,
  },
  header: {
    alignItems: 'center', 
    borderRadius: 0, 
    width: '100%', 
    marginTop: -56,
    paddingTop: 56, 
    paddingBottom: 16, 
  },
    headerContainer: {
    alignItems: 'center',
    zIndex: 10,  
  },
  categoryNav: {
    width: '82%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 32,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  categoryNavContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 9,
  },
  resourceElement: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingTop: 8,
  },
});
