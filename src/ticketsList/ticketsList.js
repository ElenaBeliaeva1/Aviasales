import React from 'react'
import { connect } from 'react-redux'
import { Spin, Alert } from 'antd'

import Ticket from '../ticket'
import './ticketsList.scss'
import { store } from '..'

const TicketsList = ({ tickets, maxCount, sort, isError }) => {
  const sortCheaper = (list) => {
    let newArr = [...list]
    newArr.sort((a, b) => a.price - b.price)
    return newArr
  }

  const sortFaster = (list) => {
    let newArr = [...list]
    newArr.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
    return newArr
  }
  let list = [...tickets]
  let minID = 0
  let elements
  if (!isError) {
    if (list.length > 0) {
      if (sort == 'Самый дешевый') {
        list = [...sortCheaper(list)]
      } else if (sort == 'Самый быстрый') {
        list = [...sortFaster(list)]
      }
      elements = list.slice(0, maxCount).map((el) => {
        minID += 1
        return <Ticket info={el} key={minID}></Ticket>
      })
    } else {
      elements = null
    }
  } else {
    elements = (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon className="message" />
    )
  }

  const loadedPage = elements ? (
    <React.Fragment>
      {elements}
      <button className="btn-more" onClick={() => store.dispatch({ type: 'ADD_TICKETS', maxCount })}>
        Показать еще 5 билетов
      </button>
    </React.Fragment>
  ) : (
    <Spin className="loader" />
  )
  return <div className="tickets-list">{loadedPage}</div>
}

const mapStateToProps = (state) => {
  const removeTwinTickets = (list) => {
    const result = list.filter((object, index, array) => {
      return index === array.findIndex((o) => o.id === object.id)
    })
    return result
  }
  let ticketsArr = []
  if (state.filterAll) {
    ticketsArr.push(...state.ticketsAll)
    return { tickets: ticketsArr, maxCount: state.ticketsCount, sort: state.activeTab }
  } else if (state.filterWithout) {
    ticketsArr.push(...state.ticketsWithout)
  } else if (state.filter1Transfer) {
    ticketsArr.push(...state.tickets1Transfer)
  } else if (state.filter2Transfers) {
    ticketsArr.push(...state.tickets2Transfers)
  } else if (state.filter3Transfers) {
    ticketsArr.push(...state.tickets3Transfers)
  }
  ticketsArr = [...removeTwinTickets(ticketsArr)]
  ticketsArr = [...ticketsArr.sort(() => Math.random() - 0.5)]
  ticketsArr = ticketsArr || state.ticketsAll
  let isError
  if (
    !state.filterAll &&
    !state.filterWithout &&
    !state.filter1Transfer &&
    !state.filter2Transfers &&
    !state.filter3Transfers
  ) {
    isError = true
  } else {
    isError = false
  }
  return { tickets: ticketsArr, maxCount: state.ticketsCount, sort: state.activeTab, isError: isError }
}

export default connect(mapStateToProps)(TicketsList)
