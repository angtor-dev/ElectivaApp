import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';
import Button from '../../components/form/Button';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatar.iran.liara.run/public/boy?username=randomUser' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Nombre del Usuario</Text>
      <Text style={styles.email}>usuario@example.com</Text>
      <Text style={styles.bio}>Esta es una breve biografía del usuario.</Text>
      <Button onPress={() => navigation.navigate('login')}>
        Cerrar Sesión
      </Button>
    </View>
  );
};

export default ProfileScreen;