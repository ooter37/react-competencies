const initialState = {
    text: 'this is the initial state text',
    otherText: 'this is the other text'
}

const ALTER_STATE = 'ALTER_STATE'

//Actions
export default function(state = initialState, action) {
    switch(action.type) {
        case ALTER_STATE:
            return {
                text: 'this is the altered state',
                otherText: action.payload
            }
        default:
            return state
    }
}

//Action Builder
export function alterStateFunction(){
    return {
        type: ALTER_STATE,
        payload: 'the state has been altered by the function'
    }
}