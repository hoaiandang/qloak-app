import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
 class Resource extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity style={[styles.container, this.props.style]}>
				<View style={styles.imageContainer}>
					<Image style={styles.welcomeImage} source={require('../assets/images/new-alternatives.jpg')} />
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.titleText}>
						New Alternatives
					</Text>
					<Text style={{fontSize: 6}}> </Text>
					<Text style={styles.descriptionText}>
						(718) 300-0133
					</Text>
					<Text style={styles.descriptionText}>
						410 West 40th Street, New York, NY 10018
					</Text>
				</View>
		 	</TouchableOpacity>
	 	)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 6,
    shadowOffset:{  width: 0,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.1, 
    shadowRadius: 3,
  }, 
  descriptionContainer: {
  	position: 'relative',
  	padding: 12,
  },
  descriptionText: {
  	color: 'rgba(0,0,0,0.7)',
  	fontSize: 12,
  },
  titleText: {
  	fontWeight: 'bold',
  	color: 'rgba(0,0,0,0.6)',
  	fontSize: 16,
  },
  welcomeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    opacity: 1,
  },
  imageContainer: {
  	flexDirection: 'row',
  	overflow: 'hidden',
  	borderRadius: 6,
  },
});

export default Resource