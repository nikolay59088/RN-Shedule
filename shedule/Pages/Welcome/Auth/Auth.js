import React, { useState } from 'react'
import MyTextInput from '../../../Components/TextInput/MyTextInput'
import BigButton from '../../../Components/Button/BigButton/BigButton'
import { View } from 'react-native'
import styles from './Auth.scss'
import * as PropTypes from 'prop-types'

const Auth = props => {

  const { navigation } = props

  //Поля ввода
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  //Обработка полей ввода
  const changeEmail = email => {
    setFields({ ...fields, email: email })
  }

  const changePassword = password =>{
    setFields({ ...fields, password: password })
  }

  const authClick = () => navigation.navigate('Shedule')


  return <View style={styles.bottomInputs}>
    <MyTextInput  placeholder="E-Mail" value={fields.email} onChange={changeEmail}/>
    <MyTextInput  placeholder="Пароль" value={fields.password} isPassword={true} onChange={changePassword}/>
    <BigButton title="Войти" onClick={authClick}/>
  </View>
}

Auth.propTypes = {
  navigation: PropTypes.object
}
export default Auth
