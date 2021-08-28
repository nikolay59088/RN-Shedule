import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './Header.scss'
import * as PropTypes from 'prop-types'


const Header = props => {

  const { HeaderText='', onClick=() => {}, nav } = props

  return <View style={styles.topShedule}>
    <View style={styles.topSheduleFirstContainer}>
      <TouchableOpacity onPress={() => nav.navigate('Profile')}>
        <Image
          resizeMode={'cover'}
          style={styles.topSheduleLeftImage}
          source={require('./../../Images/avatar.jpg')}
        />
      </TouchableOpacity>
      <Text style={styles.topSheduleHeaderText}>
        {HeaderText}
      </Text>
    </View>
    <TouchableOpacity onPress={onClick}>
      <Image
        resizeMode={'cover'}
        style={styles.topSheduleRightImage}
        source={require('./../../Images/plus.png')}
      />
    </TouchableOpacity>
  </View>
}

Header.propTypes = {
  HeaderText: PropTypes.string,
  onClick: PropTypes.func,
  nav: PropTypes.object
}

export default Header
