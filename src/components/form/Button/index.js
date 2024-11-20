import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; 
import styles from './styles';

export default Button = ({ children, onPress, style, mode = "filled" }) => {
	return (
		<TouchableOpacity 
      style={style ? style : mode == "filled" ? styles.button : styles.flatBtn}
      onPress={onPress}
    >
      <Text style={mode == "filled" ? styles.text : styles.flatText}>
        {children}
      </Text>
    </TouchableOpacity>
	);
};