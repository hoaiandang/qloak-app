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


 
 class Resource extends React.Component {
	constructor(props) {
		super(props);
		this.color = this.color.bind(this);
	}

	color() {
		const c = this.props.category;
		if (c == 'Work') {
			return 'red';
		} else if (c == 'Play') {
			return 'blue';
		} else if (c == 'Medical') {
			return 'green';
		} else if (c == 'Shelter') {
			return 'orange';
		} else if (c == 'Services') {
			return 'purple';
		}
	}



	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.style]}>
				<View style={styles.imageContainer}>
					<Image style={styles.welcomeImage} source={require('../assets/images/pacific-center-for-human-growth.jpg')} />
				</View>
				<View style={styles.descriptionContainer}>
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
		 	</TouchableOpacity>
	 	)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    shadowOffset:{  width: 0,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.15, 
    shadowRadius: 1.5,
  }, 
  textContainer: {
  	position: 'relative',
  	padding: 20,
  	paddingLeft: 12,
  },
  descriptionContainer: {
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start',
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
    height: 120,
    resizeMode: 'cover',
    marginTop: 16,
    borderRadius: 6,
    width: '90%',
    borderWidth: 1, 
    borderColor: 'rgba(0,0,0,0.1)',
    opacity: 0.85,
  },
  imageContainer: {
  	flexDirection: 'row',
  	overflow: 'hidden',
  	borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
