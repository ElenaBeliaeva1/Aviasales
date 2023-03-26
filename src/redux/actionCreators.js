import { store } from '..'

export const setFilter = (name, payload) => {
  return {
    type: name,
    payload,
  }
}

export const setFilterAllOn = () => {
  return store.dispatch(setFilter('ALL'))
}

export const setFilterAllOff = () => {
  return store.dispatch(setFilter('ALL_REMOVE'))
}

export const setFilterWithoutOn = () => {
  return store.dispatch(setFilter('WITHOUT'))
}

export const setFilterWithoutOff = () => {
  return store.dispatch(setFilter('WITHOUT_REMOVE'))
}

export const setFilter1TransferOn = () => {
  return store.dispatch(setFilter('1_TRANSFER'))
}

export const setFilter1TransferOff = () => {
  return store.dispatch(setFilter('1_TRANSFER_REMOVE'))
}

export const setFilter2TransfersOn = () => {
  return store.dispatch(setFilter('2_TRANSFERS'))
}

export const setFilter2TransfersOff = () => {
  return store.dispatch(setFilter('2_TRANSFERS_REMOVE'))
}

export const setFilter3TransfersOn = () => {
  return store.dispatch(setFilter('3_TRANSFERS'))
}

export const setFilter3TransfersOff = () => {
  return store.dispatch(setFilter('3_TRANSFERS_REMOVE'))
}

export const setActiveTab = (name) => {
  return store.dispatch(setFilter('TAB_ACTIVE', name))
}

export const setTicketsAll = (list) => {
  return store.dispatch(setFilter('TICKETS_ALL', list))
}

export const setTicketsWithout = (list) => {
  return store.dispatch(setFilter('TICKETS_WITHOUT', list))
}

export const setTickets1Transfer = (list) => {
  return store.dispatch(setFilter('TICKETS_1_TRANSFER', list))
}

export const setTickets2Transfers = (list) => {
  return store.dispatch(setFilter('TICKETS_2_TRANSFERS', list))
}

export const setTickets3Transfers = (list) => {
  return store.dispatch(setFilter('TICKETS_3_TRANSFERS', list))
}
