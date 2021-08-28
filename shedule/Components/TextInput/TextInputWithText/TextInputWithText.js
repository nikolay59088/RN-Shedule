import React from 'react'
import { View, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './TextInputWithText.scss'
import MyTextInput from '../MyTextInput'

const TextInputWithText = props => {

  let { onChange = () => {}, value = '', placeholder = '', isPassword = false } = props

  return <View>
    <Text style={styles.textInputWithText_Text}>{placeholder}</Text>
    <MyTextInput  placeholder={placeholder} value={value} onChange={onChange} isPassword={isPassword}/>
  </View>
}

TextInputWithText.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  isPassword: PropTypes.bool
}

export default TextInputWithText
