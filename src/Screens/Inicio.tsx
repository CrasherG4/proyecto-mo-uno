import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

// Recibir la propiedades de navegación
//interface - props navegación
interface Props extends StackScreenProps<any, any> {};

export const Inicio = ({navigation}: Props) => {
  // console.log(props)

  return (
    <View style={styles.contenedor}>
      <View style={styles.bienvenida}>
        <Text style={styles.textoH1}>¡Bienvenido!</Text>
      </View>
      <View style={styles.contenido}>
        <Text style={styles.textH2}>¿QUÉ ES LA PROGRAMACIÓN?</Text>
        <Text style={styles.textN}>La programación informática se refiere a la creación de software y el cómo se le indica al ordenador lo que tiene que hacer mediante instrucciones.</Text>
        <Image source={require('../img/lenguaje-min.png')} style={styles.imgP} alt='Logo'/>
        <Text style={styles.textH2}>¿PARA QUÉ SIRVE?</Text>
        <Text style={styles.textN}>La programación permite a los desarrolladores crear aplicaciones, sitios web, juegos y soluciones que facilitan la vida cotidiana. Desde las redes sociales hasta los algoritmos que alimentan los motores de búsqueda, todo se basa en código.</Text>
        <Text style={styles.textH3}>Lenguajes más usados:</Text>
        <Text style={styles.textT}>- JavaScript.</Text>
        <Text style={styles.textT}>- Python.</Text>
        <Text style={styles.textT}>- Java.</Text>
        <Text style={styles.textT}>- C++</Text>
      </View>
    </View>
  )
}

// gestión de estilos
const styles = StyleSheet.create({
  contenedor: {
    flex:1,
    flexDirection: 'column',
  },
  bienvenida: {
    width: '100%',
    height: '10%',
    backgroundColor: '#8f95cd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textoH1: {
    color: 'white',
    fontSize: 40,
    fontWeight: "600",
    alignSelf: 'center'
  },
  contenido: {
    width: '100%',
    height: '90%',
    padding: 20,
  },
  imgP: {
    width: 320,
    height: 240,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20
  },
  textH2:{
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'justify',
    marginBottom: 10,
    alignSelf: 'center'
  },
  textN: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: 'justify',
    marginBottom: 10,
    alignSelf: 'center'
  },
  textH3: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10
  },
  textT: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: 'justify',
    marginBottom: 10,
  },
})