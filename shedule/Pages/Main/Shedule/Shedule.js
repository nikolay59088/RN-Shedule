import React, { useState } from 'react'
import { View, Text } from 'react-native'
import * as PropTypes from 'prop-types'
import styles from './Shedule.scss'
import Header from '../../../Components/Header/Header'
import LineCalendar from '../../../Components/LineCalendar/LineCalendar'
import { WeekFull as Week, MonthFull as Month } from '../../../Components/LineCalendar/Dictonary'
import Pare from '../../../Components/Pare/Pare'

const Shedule = props =>{

  const { navigation } = props

  const [date, setDate] = useState({
    selectedDate: new Date()
  })

  const [pare, setPare] = useState({
    pares: [{
      chetnost: 1,
      type: 'Лекция',
      underGroup: 1,
      dayOfWeek: 1,
      timeStart: '8:15',
      timeEnd: '9:30',
      name: 'Управление проектами',
      prepod: 'Иванов И.И.',
      cabinet: 'И301'
    },
    {
      chetnost: 1,
      type: 'Практическа работа',
      underGroup: 1,
      dayOfWeek: 1,
      timeStart: '9:45',
      timeEnd: '10:30',
      name: 'Элективные курсы по физической культуре и спорту',
      prepod: 'Иванов И.И.',
      cabinet: 'И301'
    }]
  })
  const [selectedPares, setSelectedPares] = useState([])

  const changeDate = (newDate) => {
    setDate({ ...date, selectedDate: newDate })

    let d0 = newDate.getTime(),
      startYear  = new Date(newDate.getFullYear(), 0, 1),
      d1 = startYear.getTime(),
      dd = startYear.getDay(),
      re = Math.floor ((d0 - d1) / 8.64e7) + (dd ? dd - 1 : 6),
      week = Math.floor (re / 7) % 2
    let day = newDate.getDay()

    let newPares = []
    pare.pares.forEach( pare => {
      if (pare.chetnost === week && pare.dayOfWeek === day)
        newPares.push(pare)
    })

    setSelectedPares(newPares)
  }

  return <View style={styles.backShedule}>
    <Header nav={navigation} HeaderText={'Расписание'} onClick={() => navigation.navigate('AddShedule')} />
    <LineCalendar selectedDate={date.selectedDate} onChange={changeDate}/>
    <View style={styles.sheduleDayOfWeek}>
      <Text style={styles.sheduleMonth}>{Week[date.selectedDate.getDay()]}</Text>
      <Text style={styles.sheduleFullYear}>{`${date.selectedDate.getDate()} ${Month[date.selectedDate.getMonth()]} ${date.selectedDate.getFullYear()}`}</Text>
    </View>
    <View style={styles.shedule}>
      {
        selectedPares.length !== 0 ?
          selectedPares.map((pare, index, arr) => {
            return <Pare key={index} pare={pare} selectedDate={date.selectedDate} indexString={ index === 0 ? 'First' :  index === arr.length-1 ? 'Last'  : '' }/>
          }) :
          <Text>Пары отсутствуют</Text>
      }
    </View>
  </View>
}

Shedule.propTypes = {
  navigation: PropTypes.object
}

export default Shedule
