import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './Register.scss'
import MyTextInput from '../../../Components/TextInput/MyTextInput'
import BigButton from '../../../Components/Button/BigButton/BigButton'
import ComboBox from '../../../Components/ComboBox/ComboBox'
import { getResponse } from '../../../Database/DB'

const Register = props =>{

  useEffect( ()=> {

    let result = getResponse('POST', 'getUniversity', [])

    console.log(result)

  }, [])


  //[{ label: 'data1', value: '1' }, { label: 'data2', value: '2' }]
  const { navigation } = props
  //Поля ввода
  const [fields, setFields] = useState({
    fio: '',
    email: '',
    password: '',
    university: {},
    universityData: [],
    direct: {},
    directData: [],
    group: {},
    groupData: []
  })

  //Обработка полей ввода
  const changeEmail = email => {
    setFields({ ...fields, email })
  }

  const changePassword = password =>{
    setFields({ ...fields, password })
  }

  const changeFIO = fio =>{
    setFields({ ...fields, fio })
  }

  const changeUniversity = university =>{
    setFields({ ...fields, university })
  }

  const changeDirect = direct =>{
    setFields({ ...fields, direct })
  }

  const changeGroup = group =>{
    setFields({ ...fields, group })
  }

  const regClick = () =>{
    navigation.navigate('Shedule')
  }

  return <View style={styles.bottomRegister}>
    <MyTextInput  placeholder="ФИО" value={fields.fio} onChange={changeFIO}/>
    <MyTextInput  placeholder="E-Mail" value={fields.email} onChange={changeEmail}/>
    <MyTextInput  placeholder="Пароль" value={fields.password} isPassword={true} onChange={changePassword}/>
    <ComboBox
      data={fields.universityData}
      onChange={changeUniversity}
      Item={fields.university}
      Placeholder={'Выберите университет'}
    />
    <ComboBox
      data={fields.directData}
      onChange={changeDirect}
      Item={fields.direct}
      Placeholder={'Выберите направление'}
    />
    <ComboBox
      data={fields.groupData}
      onChange={changeGroup}
      Item={fields.group}
      Placeholder={'Выберите группу'}
    />
    <BigButton title="Регистрация" onClick={regClick}/>
  </View>
}

Register.propTypes = {
  navigation: PropTypes.object
}

export default Register
