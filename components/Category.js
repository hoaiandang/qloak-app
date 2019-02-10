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
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={[styles.category, {backgroundColor: this.color()}]}/>
        <Text style={{paddingTop: 12,}}>{this.props.category}</Text>
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
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
});

export default Category