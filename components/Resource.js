import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
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
		} else if (c == 'Safety') {
			return 'orange';
		} else if (c == 'Services') {
			return 'purple';
		}
	}

	render() {
		return (
			<TouchableOpacity style={[styles.container, this.props.style]}>
				<View style={styles.imageContainer}>
					<Image style={styles.welcomeImage} source={require('../assets/images/new-alternatives.jpg')} />
				</View>
				<View style={styles.descriptionContainer}>
					<View style={styles.categoryDot}/>
					<View style={styles.textContainer}>
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
  categoryDot: {
  	marginTop: 24,
  	marginLeft: 20,
  	height: 10,
  	width: 10,
  	borderRadius: 5,
  	backgroundColor: 'orange',
  },
});

export default Resource
