import React from 'react';
import { TextInput, Text } from 'react-native-paper';
import { View } from 'react-native'; 
import { Controller } from 'react-hook-form';

export default CustomTextInput = ({ rules, control, name, placeholder, style, ...props }) => {
	return (
		<Controller 
			control={control}
			name={name}
			rules={rules}
			render={({field : { value, onBlur, onChange}, fieldState : { error } }) => (
				<View>
					<TextInput
						{...props}
						style={style}
						label={placeholder}
						value={value}
						error={error}
						onBlur={onBlur}
						onChangeText={onChange}
						mode="flat"
					/>
					{error && ( <Text className="text-theme-error font-bold">{error.message}</Text> )}
				</View>
			)}
		/>
	);
};