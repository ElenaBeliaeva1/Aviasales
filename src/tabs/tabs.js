import React from 'react'
import './tabs.scss'
import { connect } from 'react-redux'

import { setActiveTab } from '../redux/actionCreators'

const Tabs = ({ activeTab }) => {
  const classesCheaper = activeTab === 'Самый дешевый' ? 'tab tab-cheaper active' : 'tab tab-cheaper'
  const classesFaster = activeTab === 'Самый быстрый' ? 'tab tab-faster active' : 'tab tab-faster'

  return (
    <div className="tabs-container">
      <div className={classesCheaper} onClick={(e) => setActiveTab(e.target.textContent)}>
        Самый дешевый
      </div>
      <div className={classesFaster} onClick={(e) => setActiveTab(e.target.textContent)}>
        Самый быстрый
      </div>
      <div className="tab tab-optimal" onClick={() => {}}>
        Оптимальный
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { activeTab: state.activeTab }
}

export default connect(mapStateToProps)(Tabs)
