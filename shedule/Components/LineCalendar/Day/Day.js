import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './Day.scss'
import { TouchableOpacity, Text } from 'react-native'


const Day = props => {

  const { Date = new Date(), Week = {}, onChange= () => {}, Enabled = false } = props

  const changeDay = () => onChange(Date)

  return <>
    {
      Enabled ?
        <TouchableOpacity style={styles.dayBackEnabled} onPress={changeDay}>
          <Text style={styles.dayTextEnabled}>
            {Week[Date.getDay()]}
          </Text>
          <Text style={styles.dayTextEnabled}>
            {Date.getDate()}
          </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.dayBack} onPress={changeDay}>
          <Text style={styles.dayText}>
            {Week[Date.getDay()]}
          </Text>
          <Text style={styles.dayText}>
            {Date.getDate()}
          </Text>
        </TouchableOpacity>
    }
  </>

}

Day.propTypes = {
  Date: PropTypes.object,
  Week: PropTypes.object,
  onChange: PropTypes.func,
  Enabled: PropTypes.bool
}

export default Day
