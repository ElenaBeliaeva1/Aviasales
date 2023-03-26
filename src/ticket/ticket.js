import React from 'react'
import './ticket.scss'

const Ticket = ({ info }) => {
  const minutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}ч ${remainingMinutes}м`
  }
  const stopsCount = (num) => {
    switch (num) {
      case 0:
        return 'Нет пересадок'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      case 3:
        return '3 пересадки'
    }
  }
  const calculateTime = (date, minutesElapsed) => {
    const dateStart = new Date(date)
    const startTime = dateStart.getHours() * 60 + dateStart.getMinutes()
    let totalMinutes = startTime + minutesElapsed
    let endHours = Math.floor(totalMinutes / 60)
    let endMinutes = totalMinutes % 60
    let endTime = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`
    while (endHours >= 24) {
      endHours -= 24
      endTime = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`
    }
    let startTimeFormatted = `${dateStart.getHours().toString().padStart(2, '0')}:${dateStart
      .getMinutes()
      .toString()
      .padStart(2, '0')}`
    return `${startTimeFormatted} - ${endTime}`
  }
  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <div className="price">{`${info.price} P`}</div>
        <img src={`//pics.avs.io/99/36/${info.carrier}.png`} alt="Company's logo" className="logo-company" />
      </div>
      <div /*тут будет грид с временем и пересадками*/ className="info">
        <div>
          <p className="info--place">{`${info.segments[0].origin} - ${info.segments[0].destination}`}</p>
          <p className="info--time">{calculateTime(info.segments[0].date, info.segments[0].duration)}</p>
        </div>
        <div>
          <p className="inWay">В пути</p>
          <p className="time-count">{minutesToHours(info.segments[0].duration)}</p>
        </div>
        <div>
          <p className="transfer-count">{stopsCount(info.segments[0].stops.length)}</p>
          <p className="transfer-name">{info.segments[0].stops.join(', ')}</p>
        </div>
        <div>
          <p className="info--place">{`${info.segments[1].origin} - ${info.segments[1].destination}`}</p>
          <p className="info--time">{calculateTime(info.segments[1].date, info.segments[1].duration)}</p>
        </div>
        <div>
          <p className="inWay">В пути</p>
          <p className="time-count">{minutesToHours(info.segments[1].duration)}</p>
        </div>
        <div>
          <p className="transfer-count">{stopsCount(info.segments[1].stops.length)}</p>
          <p className="transfer-name">{info.segments[1].stops.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
