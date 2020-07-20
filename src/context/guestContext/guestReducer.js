import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT
} from './../type'

export default (state, {type, payload}) => {
    switch(type){
        case ADD_GUEST:
            return{
                ...state,
                guests:[...state.guests, payload] //payload is the new one
            }
        case EDIT_GUEST:
            return{
                ...state,
                editable: payload
            }
        case CLEAR_EDIT:
            return{
                ...state,
                editable: null
            }
        case REMOVE_GUEST:
            return{
                ...state,
                guests: [...state.guests.filter(guest => guest.id !== payload)]
            }
        case UPDATE_GUEST:
            return{
                ...state,
                guests: state.guests.map(guest => guest.id === payload.id ? payload : guest)
            }
        case TOGGLE_FILTER:
            return{
                ...state, //cant mutate state directly so we make a copy of it...
                filterGuests: !state.filterGuests
            }
        case SEARCH_GUEST:
            const reg = new RegExp(`${payload}`, 'gi')
            return{
                ...state,
                search: state.guests.filter(guest =>  guest.name.match(reg))
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                search: null
            }
        default:
            return state
    }
}