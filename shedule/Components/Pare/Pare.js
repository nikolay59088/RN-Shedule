import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Pare.scss'
import { colors } from './Colors'
import * as PropTypes from 'prop-types'

const Pare = props => {

  const { pare, selectedDate = new Date(),  indexString = '' } = props
  const MINUTE_MS = 1000

  let [type, setType] = useState(1)

  useEffect(() => {
    updateComponent()
    const interval = setInterval(() => {
      updateComponent()
    }, MINUTE_MS)

    return () => clearInterval(interval)
  }, [])

  const updateComponent = () => {
    const now = new Date()
    const startTime = pare.timeStart.split(':')
    const endTime = pare.timeEnd.split(':')

    const startDate = selectedDate
    startDate.setHours(startTime[0].toString())
    startDate.setMinutes(startTime[1].toString())

    const endDate = selectedDate
    endDate.setHours(endTime[0].toString())
    endDate.setMinutes(endTime[1].toString())

    if (startDate <= now){
      if (endTime >= now){
        setType(1)
      }else{
        setType(2)
      }
    }else{
      setType(0)
    }
  }


  let component
  switch(type){
  case 0:
    component = <View style={styles.pareCircleInactive}/>
    break
  case 1:
    component =  <View style={[styles.pareCircle, { backgroundColor: '#F5F5F5' }]}/>
    break
  case 2:
    component = <View style={styles.pareCircle}><Image style={styles.pareCircleImage} resizeMode={'cover'} source={require('../../Images/accept.png')}/></View>
    break
  default:
    component = <View style={[styles.pareCircle, { backgroundColor: '#F5F5F5' }]}/>
    break
  }

  return(
    <View style={styles.pareBack}>
      <View style={styles.pareLeftContainer}>
        <View>
          <View style={[styles.pareLine, { opacity: indexString === 'First' ? 0 : .25 }]}/>

          <View style={styles.pareCircleContainer}>
            {
              component
            }

          </View>
          <View style={[styles.pareLine, { opacity: indexString === 'Last' ? 0 : .25 }]}/>

        </View>
        <View style={styles.pareTimeContainer}>
          <Text style={styles.pareTimePare}>{pare.timeStart}</Text>
          <Text style={type === 1 ? styles.pareTimer : { display: 'none' }}>{'Осталось:\n 00:00'}</Text>
        </View>

      </View>
      <View style={[styles.pareContainer, { backgroundColor: colors[Math.floor(Math.random() * (Object.keys(colors).length))] }]}>
        <Text style={styles.pareNameText}>{pare.name}</Text>
        <Text style={styles.pareSmallText}>{`Тип: ${pare.type}`}</Text>
        <Text style={styles.pareSmallText}>{`Преподаватель: ${pare.prepod}`}</Text>
        <Text style={styles.pareSmallText}>{`Кабинет: ${pare.cabinet}`}</Text>
      </View>
    </View>
  )
}

Pare.propTypes = {
  pare: PropTypes.object,
  indexString: PropTypes.string,
  selectedDate: PropTypes.object
}

export default Pare
