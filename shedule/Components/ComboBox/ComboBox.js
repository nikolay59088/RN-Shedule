import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import styles from './ComboBox.scss'
import * as PropTypes from 'prop-types'
import { Image } from 'react-native'

const ComboBox = props => {


  const { data = [], onChange = () => {}, Item = {}, Placeholder='' } = props

  return <Dropdown
    style={styles.dropdown}
    data={data}
    placeholder={Placeholder}
    placeholderStyle={styles.dropdownPlaceholder}
    labelField="label"
    selectedTextStyle = {styles.dropdownLabel}
    valueField="value"
    onChange={onChange}
    value={Item.value}
    renderRightIcon={() => (
      <Image style={styles.dropdownIcon} source={require('./../../Images/down.png')} />
    )}
  />
}

ComboBox.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  Item: PropTypes.object,
  Placeholder: PropTypes.string
}

export default ComboBox
