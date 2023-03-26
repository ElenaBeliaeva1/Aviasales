import { store } from '..'

import {
  setTicketsAll,
  setTicketsWithout,
  setTickets1Transfer,
  setTickets2Transfers,
  setTickets3Transfers,
} from './actionCreators'

export const getSearchID = async () => {
  const result = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
  if (!result.ok) localStorage.setItem('searchId', result.searchId)
}

export const getTicketsListDefault = async () => {
  let minID = 100
  const result = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('searchId')}`
  )
    .then((res) => res.json())
    .then((res) => {
      const list = res.tickets.map((el) => {
        el.id = minID
        minID += 1
        return el
      })
      res.tickets = list
      return res
    })
    .then((res) => {
      getTicketsAll(res.tickets)
      getTicketsWithout(res.tickets)
      getTickets1Transfer(res.tickets)
      getTickets2Transfers(res.tickets)
      getTickets3Transfers(res.tickets)
      return res
    })
  const payload = result.tickets
  if (!result.ok) return store.dispatch({ type: 'TICKETS_DEFAULT', payload })
}

export const getTicketsAll = (list) => {
  const ticketsListDefault = [...list]
  setTicketsAll(ticketsListDefault)
  return list
}

export const getTicketsWithout = (list) => {
  const ticketsListDefault = [...list]
  const result = ticketsListDefault.filter(
    (el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0
  )
  setTicketsWithout(result)
  return list
}

export const getTickets1Transfer = (list) => {
  const ticketsListDefault = [...list]
  const result = ticketsListDefault.filter(
    (el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1
  )
  setTickets1Transfer(result)
  return list
}

export const getTickets2Transfers = (list) => {
  const ticketsListDefault = [...list]
  const result = ticketsListDefault.filter(
    (el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2
  )
  setTickets2Transfers(result)
  return list
}

export const getTickets3Transfers = (list) => {
  const ticketsListDefault = [...list]
  const result = ticketsListDefault.filter(
    (el) => el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3
  )
  setTickets3Transfers(result)
  return list
}
