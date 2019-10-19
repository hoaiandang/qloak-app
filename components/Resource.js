import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import { Rating } from 'react-native-ratings';


 
 class Resource extends React.Component {
	constructor(props) {
		super(props);
    this.color = this.color.bind(this);
	}

  color() {
    const c = this.props.category;
    if (c == "Play") {
      return "#E55F00";
    } else if (c == "Eat") {
      return "#008FBF";
    } else if (c == "Shop") {
      return "#F2BC76";
    } else if (c == "Health") {
      return "#E8D2AE";
    } else if (c == "Work") {
      return "#66351D";
    }
  }





	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.style, ]}>
				<View style={styles.imageContainer}>
          <View
            style={{ 
              backgroundColor: this.color(), 
              height: 10, 
              width: "100%", 
              opacity: 0.8 }}
          />
					<Image style={styles.welcomeImage} source={this.props.image} />
				</View>
				<View style={styles.descriptionContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.titleText}>
							{this.props.title}
						</Text>
            <Rating imageSize={12} style={{paddingTop: 4}} ratingCount={5}/>
					</View>
          <Text style={[styles.distanceText, {paddingTop: 4, paddingRight: 16}]}>
            {this.props.distance} mi
          </Text>
				</View>
		 	</TouchableOpacity>
	 	)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '84%',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOpacity: 1,
    shadowRadius: 8
  }, 
  textContainer: {
  	position: 'relative',
  	paddingLeft: 20,
    padding: 12,
    paddingTop: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  descriptionContainer: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'flex-start',
  },
  descriptionText: {
  	color: 'rgba(0,0,0,0.8)',
  	fontSize: 12,
  },
  titleText: {
  	color: 'rgba(0,0,0,0.8)',
  	fontSize: 14,
    fontWeight: '500',
  },
  distanceText: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    fontWeight: '500',
  },
  welcomeImage: {
    height: 180,
    resizeMode: 'cover',
    borderRadius: 0,
    width: '100%',
  },
  imageContainer: {
  	flexDirection: 'column',
  	overflow: 'hidden',
  	borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,

  },
  categoryDot: {
  	marginTop: 24,
  	marginLeft: 20,
  	height: 10,
  	width: 10,
  	borderRadius: 5,
  	backgroundColor: 'orange',
    opacity: 0.5,
  },
});

export default Resource
