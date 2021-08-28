import React from 'react'
import { TextInput } from 'react-native'
import styles from './MyTextInput.scss'
import * as PropTypes from 'prop-types'

const MyTextInput = props =>{
  return(
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      secureTextEntry={props.isPassword}
      placeholderTextColor={'#ACACAC'}
    />
  )
}

MyTextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool
}

export default  MyTextInput
