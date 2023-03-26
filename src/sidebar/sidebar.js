import React from 'react'
import { connect } from 'react-redux'

import './sidebar.scss'

import {
  setFilterAllOn,
  setFilterAllOff,
  setFilterWithoutOn,
  setFilterWithoutOff,
  setFilter1TransferOn,
  setFilter1TransferOff,
  setFilter2TransfersOn,
  setFilter2TransfersOff,
  setFilter3TransfersOn,
  setFilter3TransfersOff,
} from '../redux/actionCreators'
import { store } from '..'

const Sidebar = ({ filterAll, filterWithout, filter1Transfer, filter2Transfers, filter3Transfers }) => {
  const changeFilter = (e) => {
    switch (e.target.textContent) {
      case 'Все':
        if (!filterAll) return setFilterAllOn()
        else return setFilterAllOff()
      case 'Без пересадок':
        if (!filterWithout) return setFilterWithoutOn()
        else return setFilterWithoutOff()
      case '1 пересадка':
        if (!filter1Transfer) return setFilter1TransferOn()
        else return setFilter1TransferOff()
      case '2 пересадки':
        if (!filter2Transfers) return setFilter2TransfersOn()
        else return setFilter2TransfersOff()
      case '3 пересадки':
        if (!filter3Transfers) return setFilter3TransfersOn()
        else return setFilter3TransfersOff()
      default:
        return store
    }
  }

  const addingAllCheckbox = (e) => {
    switch (e.target.textContent) {
      case 'Без пересадок':
        if (!filterWithout && filter1Transfer && filter2Transfers && filter3Transfers && !filterAll)
          return setFilterAllOn()
        else return
      case '1 пересадка':
        if (filterWithout && !filter1Transfer && filter2Transfers && filter3Transfers && !filterAll)
          return setFilterAllOn()
        else return
      case '2 пересадки':
        if (filterWithout && filter1Transfer && !filter2Transfers && filter3Transfers && !filterAll)
          return setFilterAllOn()
        else return
      case '3 пересадки':
        if (filterWithout && filter1Transfer && filter2Transfers && !filter3Transfers && !filterAll)
          return setFilterAllOn()
        else return
      default:
        return store
    }
  }

  return (
    <div className="sidebar">
      <div>Количество пересадок</div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterAll} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
          }}
        >
          Все
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterWithout} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          Без пересадок
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filter1Transfer} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          1 пересадка
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filter2Transfers} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          2 пересадки
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filter3Transfers} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          3 пересадки
        </label>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filterAll: state.filterAll,
    filterWithout: state.filterWithout,
    filter1Transfer: state.filter1Transfer,
    filter2Transfers: state.filter2Transfers,
    filter3Transfers: state.filter3Transfers,
  }
}
export default connect(mapStateToProps)(Sidebar)
