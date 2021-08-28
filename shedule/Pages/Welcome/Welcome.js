import React, { useEffect, useState } from 'react'
import { Animated, ImageBackground, Keyboard, Text, View, Dimensions } from 'react-native'
import styles from './Welcome.scss'
import WelcomeButton from '../../Components/Button/WelcomeButton'
import welcome_fon from '../../Images/welcome_fon.jpg'
import * as PropTypes from 'prop-types'
import Auth from './Auth/Auth'
import Register from './Register/Register'


const Welcome = props =>{

  const { navigation } = props
  const { height } = Dimensions.get('window')


  const [Pages, setPage] = useState(0)
  const [keyBoard, setKeyBoard] = useState(0)

  useEffect(()=>{
    Keyboard.addListener('keyboardDidShow', keyboardWillShow )
    Keyboard.addListener('keyboardDidHide', keyboardWillHide )
  },[])

  const keyboardWillShow = (e) => setKeyBoard(e.endCoordinates.height)
  const keyboardWillHide = () => setKeyBoard(0)

  //Обработка нажатия кнопок
  const openAuth = () =>{
    setPage(0)
  }

  const openRegister = () =>{
    setPage(1)
  }

  const regClick = () =>{
    console.log('register')
    navigation.navigate('Register')
  }

  return (
    <ImageBackground
      style={[styles.backImg, height]}
      source={welcome_fon}>
      <View style={styles.backContainer}>
        <Text style={styles.textHeader}>Study</Text>
        <Animated.View style={[styles.bottomContainer, { minHeight: keyBoard }, Pages ? styles.bottomContainerRegistration : null ]}>
          <View style={styles.bottomTopButtons}>
            <WelcomeButton Title='Войти' Enabled={Boolean(!Pages)} onClick={openAuth}/>
            <WelcomeButton Title='Регистрация' Enabled={Boolean(Pages)} onClick={openRegister}/>
          </View>
          {
            !Pages ? <Auth navigation={navigation}/> : <Register navigation={navigation}/>
          }

        </Animated.View>
      </View>
    </ImageBackground>
  )
}

Welcome.propTypes = {
  navigation: PropTypes.object
}

export default Welcome
