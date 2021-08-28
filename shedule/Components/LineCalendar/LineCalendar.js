import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './LineCalendar.scss'
import Day from './Day/Day'
import * as PropTypes from 'prop-types'
import { Month, Week, Even } from './Dictonary'


const LineCalendar  = props => {

  const { selectedDate, onChange } = props

  const [days, setDays] = useState([])
  const [count, setCount] = useState(0)
  const [even, setEven] = useState(0)


  useEffect(() => {

    //Расчет сдвига начала месяца
    let currMonth = new Date()
    currMonth.setDate(currMonth.getDate() + count + (6 - ((currMonth.getDay() + 6) % 7)))

    //Расчет четности недели
    let date = currMonth
    let d0 = date.getTime(),
      startYear  = new Date(date.getFullYear(), 0, 1),
      d1 = startYear.getTime(),
      dd = startYear.getDay(),
      re = Math.floor ((d0 - d1) / 8.64e7) + (dd ? dd - 1 : 6),
      week = Math.floor (re / 7) % 2

    //Формирование дней недели
    let newDays = []
    for (let i = 6; i >= 0; i--){
      let temp = new Date(currMonth.getFullYear(), currMonth.getMonth(), currMonth.getDate())
      temp.setDate(currMonth.getDate() - i)
      newDays.push(temp)
    }

    //Занос результатов
    setDays(newDays)
    setEven(week)

  }, [count])


  //Установить день на текущий
  const setNowDay = () => {
    onChange(new Date())
    setCount(0)
  }

  //Предыдущая неделя
  const backWeek = () => {
    setCount(count - 7)
  }

  //Следующая неделя
  const nextWeek = () => {
    setCount(count + 7)
  }

  return <View style={styles.calendarContainer}>
    <View style={[styles.calendarBack, { zIndex: 1 }]}/>
    <View style={[styles.calendarMonthContainer, { zIndex: 3 }]}>
      <TouchableOpacity style={styles.calendarMonth} onPress={setNowDay}>
        <Text style={[styles.calendarMonthText, Month[days.length >= 6 ? days[6].getMonth() : 0].length === 3 ? styles.calendarMonthBigText : null]}>{Month[days.length >= 6 ? days[6].getMonth() : 0]}</Text>
        <Text style={styles.calendarTextInactive}>{Even[even ? 0 : 1].toLowerCase()}</Text>
      </TouchableOpacity>
      <View style={styles.calendarDaysContainer}>
        <TouchableOpacity style={styles.calendarMonthArrowContainer} onPress={backWeek}>
          <Image
            resizeMode={'cover'}
            style={styles.calendarMonthArrow}
            source={require('../../Images/left.png')}
          />
        </TouchableOpacity>
        {
          days.map((day, index) => (

            <Day key={index} Date={day} Week={Week} onChange={onChange} Enabled={selectedDate.toDateString() === day.toDateString()}/>
          ))
        }
        <TouchableOpacity style={styles.calendarMonthArrowContainer} onPress={nextWeek}>
          <Image
            resizeMode={'cover'}
            style={styles.calendarMonthArrow}
            source={require('../../Images/right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
}

LineCalendar.propTypes = {
  selectedDate: PropTypes.object,
  onChange: PropTypes.func
}

export default LineCalendar
