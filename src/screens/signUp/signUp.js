import { Text, View, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomTextInput from '../../components/form/CustomTextInput/index.js';
import PasswordInput from '../../components/form/PasswordInput/index.js';
import Button from '../../components/form/Button';
import { useForm } from "react-hook-form";

export default function SignUpScreen({ navigation }) {
  
  const { control, handleSubmit, setError, clearErrors, watch } = useForm(); 
  const [modalVisible, setModalVisible] = useState(false);


  const Submit = (data) => { 
    if (data.password !== data.passwordRepete) { 
      setError("passwordRepete", { 
        type: "manual", 
        message: "Las contraseñas deben ser iguales" }
      ); 
    } else { 
      console.log("Form submitted successfully");
      Alert.alert("Registrado correctamente. Inicia sesión!")
      navigation.navigate("login")
    } 
  }

  const showModal = () => {
    setModalVisible(true); 
  }

  const hideModal = () => { 
    setModalVisible(false); 
  }


  return (
    <View style={styles.container}>
      <View style={{height: 50}}></View>
      
      <Text style={styles.subtitulosPrimero}>¡Qué estás esperando!</Text>
      <Text style={styles.titulo}>Regístrate!</Text>
      <Text style={styles.subtitulosSegundo}>Y comienza a disfrutar de nuestros servicios ¡YA!</Text>
      <View style={styles.form}>

        <View style={{marginTop:20}}>
          <CustomTextInput
            placeholder="Nombre:"
            autoComplete="name"
            autoCapitalize="none"
            control={control}
            name="name"
            rules={{
              required: "Debe ingresar su nombre.",            
              minLength: {
                value: 2,
                message: "El nombre debe tener mínimo 2 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe tener máximo 20 carácteres."
              }
            }}
          />
        </View>

        <View style={{marginTop:60}}>
          <CustomTextInput
            placeholder="Apellido:"
            autoCapitalize="none"
            control={control}
            name="lastname"
            rules={{
              required: "Debe ingresar su apellido.",           
              minLength: {
                value: 2,
                message: "El apellido debe tener mínimo 2 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "El apellido debe tener máximo 20 carácteres."
              }
            }}
          />
        </View>

        <View style={{marginTop:60}}>
          <CustomTextInput
            placeholder="username@email.com"
            autoComplete="email"
            autoCapitalize="none"
            control={control}
            name="email"
            rules={{
              required: "Debe ingresar un correo.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Debe ser un correo válido.",
              },
            }}
          />
        </View>

        <View style={{marginTop: 60}}>
          <PasswordInput
            control={control}
            name="password"
            placeholder="Contraseña"
            autoComplete="password"
            rules={{
              required: "Complete la contraseña.",
              minLength: {
                value: 5,
                message: "La contraseña debe tener mínimo 5 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "La contraseña no puede pasar de los 20 carácteres.",
              },
            }}
          />
        </View>

        <View style={{marginTop: 60}}>
          <PasswordInput
            control={control}
            name="passwordRepete"
            placeholder="Repita la contraseña"
            autoComplete="password"
            rules={{
              required: "Complete la contraseña.",
              minLength: {
                value: 5,
                message: "La contraseña debe tener mínimo 5 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "La contraseña no puede pasar de los 20 carácteres."
              }
            }}
          />
        </View>


        <Button 
          onPress={handleSubmit(Submit)}
          mode="filled"
        >Registrarse</Button>
        <Button 
          onPress={() => navigation.navigate("login")}
          mode="flat">
          Login
        </Button>

      </View>
    </View>
  );
}

