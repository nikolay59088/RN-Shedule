import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './TimePicker.scss'
import DateTimePicker from '@react-native-community/datetimepicker'

const TimePicker = ({ value= new Date(), onClick = () => {} }) =>{

  let [showTime, setShowTime] = useState(false)


  const onPress = () => {
    setShowTime(true)
  }

  const onChange = (event, selectedDate) => {
    onClick(selectedDate)
    setShowTime(false)
  }

  return <TouchableOpacity onPress={onPress}>
    <View style={styles.timePicker}>
      <Text style={styles.timePicker_Text}>{(value.getHours().toString().length > 1 ? value.getHours() : '0'+value.getHours()) + ':'+ (value.getMinutes().toString().length > 1 ? value.getMinutes() : '0' + value.getMinutes())}</Text>
      <Image
        resizeMode={'cover'}
        style={styles.timePicker_Image}
        source={require('../../Images/clock.png')}
      />
      { showTime && <DateTimePicker
        value={value}
        mode="time"
        is24Hour={true}
        display="clock"
        onChange={onChange}
      />
      }
    </View>
  </TouchableOpacity>
}

TimePicker.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func
}

export default TimePicker
