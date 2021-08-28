import React from 'react'
import * as PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './BigButton.scss'

const BigButton = props =>{


  return(
    <TouchableOpacity
      style={styles.bigButton}
      onPress={props.onClick}>
      <Text style={styles.bigButton_Text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

BigButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default  BigButton
