import React, { useState } from 'react'
import { View, TouchableOpacity, Image, ScrollView, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './Profile.scss'
import ProfileHeader from '../../../Components/Header/ProfileHeader/ProfileHeader'
import ComboBoxWithText from '../../../Components/ComboBox/ComboBoxWithText/ComboBoxWithText'
import BigButton from '../../../Components/Button/BigButton/BigButton'

const Profile = props => {

  const { navigation } = props

  const [user, setUser] = useState({
    fio: 'Иванов Иван Иванович',
    university: {},
    direct: {},
    group: {}
  })

  const changeUniversity = (university) => {
    setUser({ ...user, university })
  }

  return <View style={styles.profile}>
    <ProfileHeader header='Профиль' nav={navigation} />
    <ScrollView contentContainerStyle={styles.profile_scroll}>
      <TouchableOpacity style={styles.profileImage_Container}>
        <Image
          resizeMode={'cover'}
          style={styles.profileImage}
          source={require('../../../Images/avatar.jpg')}
        />
      </TouchableOpacity>
      <Text style={styles.profileFIO}>
        {user.fio}
      </Text>
      <ComboBoxWithText
        data={[{ label: 'Понедельник', value: '0' }, { label: 'Вторник', value: '1' }]}
        onChange={changeUniversity}
        Item={user.university}
        Placeholder={'Институт'}
      />
      <ComboBoxWithText
        data={[{ label: 'Понедельник', value: '0' }, { label: 'Вторник', value: '1' }]}
        onChange={changeUniversity}
        Item={user.direct}
        Placeholder={'Направление'}
      />
      <ComboBoxWithText
        data={[{ label: 'Понедельник', value: '0' }, { label: 'Вторник', value: '1' }]}
        onChange={changeUniversity}
        Item={user.group}
        Placeholder={'Группа'}
      />
      <View style={styles.profileSave}>
        <BigButton title="Сохранить"/>
      </View>
    </ScrollView>
  </View>

}

Profile.propTypes = {
  navigation: PropTypes.object
}


export default Profile
