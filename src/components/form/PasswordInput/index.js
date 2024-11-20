import React, { useState } from 'react';
import { TextInput, Text } from 'react-native-paper';
import { View } from 'react-native'; 
import { Controller } from 'react-hook-form';

export default Password = ({ rules, control, name, placeholder, style, ...props }) => {
	const [password, setPassword] = useState(true);

	return (
		<Controller 
			control={control}
			name={name}
			rules={rules}
			render={({field : { value, onBlur, onChange}, fieldState : { error } }) => (
					<>
						<TextInput
							style={style}
							label={placeholder}
							secureTextEntry={password}
							mode="flat"
							autoCapitalize="none"
							value={value}
							error={error}
							onBlur={onBlur}
							onChangeText={onChange}
							right={
								<TextInput.Icon
									icon={password ? 'eye' : 'eye-off'}
									onPress={() => setPassword(!password)} 
								/>}
							{...props}
						/>
						{error && ( <Text className="text-theme-error font-bold">{error.message}</Text> )}
					</>
				)}
		/>
	);
};