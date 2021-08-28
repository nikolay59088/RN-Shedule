import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import BackHeader from '../../../Components/Header/BackHeader/BackHeader'
import styles from './AddShedule.scss'
import ComboBoxWithText from '../../../Components/ComboBox/ComboBoxWithText/ComboBoxWithText'
import TextInputWithText from '../../../Components/TextInput/TextInputWithText/TextInputWithText'
import BigButton from '../../../Components/Button/BigButton/BigButton'
import TimePickerWithText from '../../../Components/TimePicker/TimePickerWithText/TimePickerWithText'


const AddShedule = props => {

  let { type = 'add', data=[], navigation } = props

  let [pare, setPare] = useState({
    Even: { label: 'Четная', value: '0' },
    dayOfWeek: { label: 'Понедельник', value: '0' },
    type: { label: 'Лабораторная работа', value: '0' },
    underGroup: { label: 'Подгруппа 1', value: '0' },

    startTime: new Date(),
    endTime: new Date(),

    name: '',
    fio: '',
    cabinet: ''
  })

  //Слушатели комбобоксов
  const changeEven = Even => setPare({ ...pare, Even })
  const changeDayOfWeek = dayOfWeek => setPare({ ...pare, dayOfWeek })
  const changeType = type => setPare({ ...pare, type })
  const changeUnderGroup = underGroup => setPare({ ...pare, underGroup })

  //Слушатели времени
  const changeStartTime = (time) => setPare({ ...pare, startTime: time })
  const changeEndTime = (time) => setPare({ ...pare, endTime: time })

  //Слушатели полей ввода
  const changeName = name => setPare({ ...pare, name })
  const changeFIO = fio => setPare({ ...pare, fio })
  const changeCabinet = cabinet => setPare({ ...pare, cabinet })

  const backToShedule = () => navigation.navigate('Shedule')


  return(
    <View style={styles.addShedule}>
      <BackHeader header={'Новое занятие'} onClick={backToShedule}/>
      <ScrollView contentContainerStyle={styles.addShedule_Scroll}>

        <ComboBoxWithText
          data={[{ label: 'Четная', value: '0' }, { label: 'Нечетная', value: '1' }]}
          onChange={changeEven}
          Item={pare.Even}
          Placeholder={'Четность недели'}
        />

        <ComboBoxWithText
          data={[{ label: 'Понедельник', value: '0' }, { label: 'Вторник', value: '1' }]}
          onChange={changeDayOfWeek}
          Item={pare.dayOfWeek}
          Placeholder={'День недели'}
        />

        <ComboBoxWithText
          data={[{ label: 'Лабораторная работа', value: '0' }, { label: 'Практика', value: '1' }]}
          onChange={changeType}
          Item={pare.type}
          Placeholder={'Тип занятий'}
        />

        <ComboBoxWithText
          data={[{ label: 'Подгруппа 1', value: '0' }, { label: 'Подгруппа 2', value: '1' }]}
          onChange={changeUnderGroup}
          Item={pare.underGroup}
          Placeholder={'Подгруппа'}
        />

        <View style={styles.addShedule_TimePickerContainer}>
          {/* Time Pickers */}
          <View>
            <TimePickerWithText value={pare.startTime} onClick={changeStartTime} Placeholder='Начало пары'/>
          </View>
          <View>
            <TimePickerWithText value={pare.endTime} onClick={changeEndTime} Placeholder='Конец пары'/>
          </View>
        </View>

        <TextInputWithText placeholder="Название предмета" value={pare.name} onChange={changeName}/>
        <TextInputWithText placeholder="ФИО преподавателя" value={pare.fio} onChange={changeFIO}/>
        <TextInputWithText placeholder="Номер кабинета" value={pare.cabinet} onChange={changeCabinet}/>
        <View style={styles.addSheduleSave}>
          <BigButton title="Добавить" onClick={changeEven}/>
        </View>
      </ScrollView>
    </View>
  )
}

AddShedule.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  navigation: PropTypes.object
}

export default AddShedule
