import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './BackHeader.scss'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const BackHeader = props => {

  const { header, onClick = () => {} } = props


  return <View style={styles.backHeader}>

    <TouchableOpacity onPress={onClick}>
      <Image
        resizeMode={'cover'}
        style={styles.backHeader_Image}
        source={require('../../../Images/left.png')}
      />
    </TouchableOpacity>
    <Text style={styles.backHeader_Text}>
      {header}
    </Text>

  </View>
}

BackHeader.propTypes = {
  header: PropTypes.string,
  onClick: PropTypes.func
}

export default BackHeader
