import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './ProfileHeader.scss'

const ProfileHeader = props => {

  const { header, nav } = props

  const onClickBack = () => nav.navigate('Shedule')

  const onClickSettings = () => nav.navigate('Settings')

  return <View style={styles.profileHeader}>
    <View style={styles.profileHeaderFirstContainer}>
      <TouchableOpacity onPress={onClickBack}>
        <Image
          resizeMode={'cover'}
          style={styles.profileHeader_Image}
          source={require('../../../Images/left.png')}
        />
      </TouchableOpacity>
      <Text style={styles.profileHeader_Text}>
        {header}
      </Text>
    </View>

    <TouchableOpacity onPress={onClickSettings}>
      <Image
        resizeMode={'cover'}
        style={styles.profileHeader_RightImage}
        source={require('../../../Images/settings.png')}
      />
    </TouchableOpacity>

  </View>
}

ProfileHeader.propTypes = {
  header: PropTypes.string,
  nav: PropTypes.object
}

export default ProfileHeader
