import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import BackHeader from '../../../Components/Header/BackHeader/BackHeader'
import styles from './Settings.scss'
import ComboBoxWithText from '../../../Components/ComboBox/ComboBoxWithText/ComboBoxWithText'
import BigButton from '../../../Components/Button/BigButton/BigButton'

const Settings = props => {

  const { navigation } = props

  const [settings, setSettings] = useState({
    language: { label: 'Русский', value: '0' },
    languageData: [{ label: 'Русский', value: '0' }, { label: 'Английский', value: '1' }],
    theme: { label: 'Светлая', value: '0' },
    themeData: [{ label: 'Светлая', value: '0' }, { label: 'Темная', value: '0' }]
  })

  const changeLanguage = (language) => setSettings({ ...settings, language })

  const changeTheme = (theme) => setSettings({ ...settings, theme })

  return <View style={styles.settings}>
    <BackHeader header={'Настройки'} onClick={() => navigation.navigate('Profile')}/>
    <ScrollView contentContainerStyle={styles.settings_scroll}>
      <Text style={styles.settings_PartText}>Общие</Text>
      <ComboBoxWithText
        data={settings.languageData}
        onChange={changeLanguage}
        Item={settings.language}
        Placeholder={'Язык приложения'}
      />
      <ComboBoxWithText
        data={settings.themeData}
        onChange={changeTheme}
        Item={settings.theme}
        Placeholder={'Тема приложения'}
      />
      <View style={styles.settingsSave}>
        <BigButton title="Сохранить"/>
      </View>
    </ScrollView>
  </View>
}

Settings.propTypes = {
  navigation: PropTypes.object
}

export default Settings
