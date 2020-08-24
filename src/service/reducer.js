export const initialState = {
    filter: [{
        id: null,
        name: null,
        quantity: null

    }]
}
// Empty DataLayer

const reducer = (state, action) => {

    //console.log('Action: ', action)

    // Action => type, [payload] 
    switch(action.type) {
    
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
        
            }

        default:
            return state
    }

}

// Action => How manipulate State looks (setState)
// State => How they look

export default reducer