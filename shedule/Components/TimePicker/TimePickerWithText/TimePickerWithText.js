import React from 'react'
import { View, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './TimePickerWithText.scss'
import TimePicker from '../TimePicker'

const TimePickerWithText = ({ value= new Date(), onClick = () => {}, Placeholder='' }) => {
  return <View style={styles.timePickerWithText}>
    <Text style={styles.timePickerWithText_Text}>{Placeholder}</Text>
    <TimePicker value={value} onClick={onClick}/>
  </View>
}

TimePickerWithText.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
  Placeholder: PropTypes.string
}

export default TimePickerWithText
