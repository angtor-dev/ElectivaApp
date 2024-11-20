import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import CustomTextInput from '../../components/form/CustomTextInput/index.js';
import PasswordInput from '../../components/form/PasswordInput/index.js';
import Button from '../../components/form/Button';
import { useForm } from "react-hook-form";



export default function RecoverPasswordScreen({ navigation }) {
  
  const { control, handleSubmit, errors  } = useForm();
  const validatePasswordMatch = (value) => {
    if (value !== watch("password1")) {
      return "Las contraseñas no coinciden.";
    } else {
      return true; // La validación es exitosa
    }
  };


  
  function Submit() {
    console.log("evento submit");
    Alert.alert("Cambio exitoso", "Ya puedes iniciar sesión con tu nueva clave")
    navigation.navigate("login")
  }

  return (

    
    <View style={styles.container}>
      <View style={{height: 150}}></View>
      <Text style={styles.titulo}>Recuperación de Contraseña</Text>
      
      <View style={styles.form}>



      <View style={{marginTop:20}}>
        <CustomTextInput
          placeholder="Introduce tu correo aquí."
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


    


   <View style={{marginTop: 70}}>
        <PasswordInput
          control={control}
          name="password1"
          placeholder="Nueva contraseña."
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



      <View style={{marginTop: 80}}>
        <PasswordInput
          control={control}
          name="password2"
          placeholder="Repita la nueva contraseña."
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
            validate: validatePasswordMatch
          }}
        />
      </View>   


        <Button 
          onPress={handleSubmit(Submit)}
                   
          mode="filled"
        >Enviar</Button>
        <Button 
          onPress={() => navigation.navigate("signUp")}
          mode="flat">
          Registrate
        </Button>
      </View>
    </View>
  );
}

