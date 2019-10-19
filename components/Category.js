import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
 class Category extends React.Component {
	constructor(props) {
		super(props);
    this.color = this.color.bind(this);
    this.icon = this.icon.bind(this);
	}

  color() {
    const c = this.props.category;
    if (c == 'Play') {
      return '#E55F00';
    } else if (c == 'Eat') {
      return '#008FBF';
    } else if (c == 'Shop') {
      return '#F2BC76';
    } else if (c == 'Health') {
      return '#E8D2AE';
    } else if (c == 'Work') {
      return '#66351D';
    }
  }

  icon() {
    const c = this.props.category;
    if (c == 'Play') {
      return require('../assets/images/play.png');
    } else if (c == 'Eat') {
      return require('../assets/images/eat.png');
    } else if (c == 'Shop') {
      return require('../assets/images/shop.png');
    } else if (c == 'Health') {
      return require('../assets/images/health.png');
    } else if (c == 'Work') {
      return require('../assets/images/work.png');
    }
  }

  opacity() {
    const c = this.props.category;
    if (c == "Play") {
      return 0.9;
    } else {
      return 0.6;
    }
  }

	render() {
		return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={[styles.category, {backgroundColor: this.color(), opacity: this.opacity()}]}>
          <Image style={styles.icon} source={this.icon()}/>
        </TouchableOpacity>
        <Text style={{paddingTop: 4, fontSize: 12, color: 'rgba(0,0,0,0.7)'}}>{this.props.category}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  category: {
    padding: 10,
    borderRadius: 25,
    shadowOffset:{  width: 0,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.2, 
    shadowRadius: 1,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default Category