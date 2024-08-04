import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// Recibir la propiedades de navegación
//interface - props navegación
interface Props extends StackScreenProps<any, any> {};

export const Login = ({navigation}: Props) => {
  // console.log(props)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../img/LoginIcon.png')} style={styles.headerImg} alt='Logo'/>

      <Text style={styles.title}>Login</Text>

      <Text style={styles.subtitle}>Ingresa los campos que se muestran a continuación</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email</Text>

          <TextInput style={styles.inputControl} 
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            value={form.email} 
            onChangeText={email => setForm({...form, email})}
            placeholder='gabriel@gmail.com'
            placeholderTextColor="#6b7280"/>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password</Text>

          <TextInput style={styles.inputControl} 
            value={form.password} 
            onChangeText={password => setForm({...form, password})}
            placeholder='*********'
            placeholderTextColor="#6b7280"/>
        </View>
        
        <View style={styles.formAction}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Inicio')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subtitle}>Este programa ha sido creado por Crasher Inc.</Text>
    </View>
  )
}

// gestión de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 20,
  },
  headerImg: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#929292',
    textAlign: 'center'
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17, 
    fontWeight: '600',
    color: '#222',
    marginBottom: 8
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#222'
  },
  form:{
    marginBottom: 24,
    flex:1,
  },
  formAction: {
    marginVertical: 4,
  },
  btn: {
    backgroundColor: '#a49ddd',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#a49ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText:{
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  }
});