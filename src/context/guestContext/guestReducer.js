import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST
} from './../type'

export default (state, {type, payload}) => {
    switch(type){
        case ADD_GUEST:
            return{
                ...state,
                guests:[...state.guests, payload] //payload is the new one
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