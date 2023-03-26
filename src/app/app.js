import React, { useEffect } from 'react'

import './app.scss'
import Header from '../header'
import Sidebar from '../sidebar'
import Tabs from '../tabs'
import TicketsList from '../ticketsList'
import { getTicketsListDefault, getSearchID } from '../redux/requests'

getSearchID()

const App = () => {
  useEffect(() => {
    getTicketsListDefault()
  }, [])
  return (
    <div className="app">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div>
          <Tabs />
          <TicketsList />
        </div>
      </div>
    </div>
  )
}
export default App
