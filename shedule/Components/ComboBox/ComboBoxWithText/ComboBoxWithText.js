import React from 'react'
import { View, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './ComboBoxWithText.scss'
import ComboBox from '../ComboBox'

const ComboBoxWithText = props => {

  const { data = [], onChange = () => {}, Item = {}, Placeholder='' } = props

  return <View style={{ marginTop: 5 }}>
    <Text style={styles.comboBoxWithText_Text}>{Placeholder}</Text>
    <ComboBox
      data={data}
      onChange={onChange}
      Item={Item}
      Placeholder={Placeholder}
    />
  </View>
}

ComboBoxWithText.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  Item: PropTypes.object,
  Placeholder: PropTypes.string
}

export default ComboBoxWithText
