export const rootReducer = (state, action) => {
  // let sorted = []
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        filterAll: true,
        filterWithout: true,
        filter1Transfer: true,
        filter2Transfers: true,
        filter3Transfers: true,
        activeTab: null,
      }
    case 'ALL_REMOVE':
      return {
        ...state,
        filterAll: false,
        filterWithout: false,
        filter1Transfer: false,
        filter2Transfers: false,
        filter3Transfers: false,
        activeTab: null,
      }
    case 'WITHOUT':
      return {
        ...state,
        filterWithout: true,
        filterAll: false,
        activeTab: null,
      }
    case 'WITHOUT_REMOVE':
      return { ...state, filterAll: false, filterWithout: false, activeTab: null }
    case '1_TRANSFER':
      return { ...state, filter1Transfer: true, activeTab: null }
    case '1_TRANSFER_REMOVE':
      return { ...state, filterAll: false, filter1Transfer: false, activeTab: null }
    case '2_TRANSFERS':
      return { ...state, filter2Transfers: true, activeTab: null }
    case '2_TRANSFERS_REMOVE':
      return { ...state, filterAll: false, filter2Transfers: false, activeTab: null }
    case '3_TRANSFERS':
      return { ...state, filter3Transfers: true }
    case '3_TRANSFERS_REMOVE':
      return { ...state, filterAll: false, filter3Transfers: false, activeTab: null }
    case 'TICKETS_DEFAULT':
      return { ...state, tickets: action.payload }
    case 'TICKETS_FILTERED':
      return { ...state, ticketsFiltered: action.payload.name }
    case 'ADD_TICKETS':
      return { ...state, ticketsCount: action.maxCount + 5 }
    case 'TAB_ACTIVE':
      return { ...state, activeTab: action.payload }
    case 'TICKETS_ALL':
      return { ...state, ticketsAll: action.payload }
    case 'TICKETS_WITHOUT':
      return { ...state, ticketsWithout: action.payload }
    case 'TICKETS_1_TRANSFER':
      return { ...state, tickets1Transfer: action.payload }
    case 'TICKETS_2_TRANSFERS':
      return { ...state, tickets2Transfers: action.payload }
    case 'TICKETS_3_TRANSFERS':
      return { ...state, tickets3Transfers: action.payload }
    default:
      return state
  }
}
