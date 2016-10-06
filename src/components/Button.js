import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>Buy this album</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    // use below properties or set alignSelf in Text component
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', // to make it bold
    // paddingBottom: 10,
    // paddingTop: 10,
  },
};

export default Button;
