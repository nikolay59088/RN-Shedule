import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './WelcomeButton.scss'
import * as PropTypes from 'prop-types'

/**
 *  Кнопка со скругленными краями и сменой цвета текста при нажатии
 * @component
 * @returns {*}
 */
const WelcomeButton = props => {

  const { onClick, Enabled = false, Title } = props

  return(
    <TouchableOpacity style={styles.WelcomeButton} onPress={onClick} activeOpacity={1}>
      <Text style={[styles.WelcomeButton_Text, Enabled ? styles.WelcomeButton_TextEnabled : null ]}>{Title}</Text>
    </TouchableOpacity>)
}

WelcomeButton.propTypes = {
  Title: PropTypes.string,
  onClick: PropTypes.func,
  Enabled: PropTypes.bool
}


export default WelcomeButton
