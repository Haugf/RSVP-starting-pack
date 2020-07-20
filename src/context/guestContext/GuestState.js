import React, {useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST

} from './../type'

const GuestState = (props) => {
    const initialState = {
        filterGuests: false, //when we turn this true, the filter in guests.js will filter on isconfirmed
        search: null, //search is null by deafult
        guests:[
            {
                id: 1,
                name: "Jack Smith",
                phone: "333 333 3343",
                dietary: "Vegan",
                isConfirmed: false
            },
            {
                id: 2,
                name: "Jacky Brown",
                phone: "333 333 3343",
                dietary: "Vegan",
                isConfirmed: true
            },
            {
                id: 3,
                name: "Bob Belcher",
                phone: "333 333 3343",
                dietary: "Non-Veg",
                isConfirmed: false
            },
        ]
    }

    const [state, dispatch] = useReducer(guestReducer, initialState)


   // ACTIONS

   const addGuest = (guest) => {
       guest.id = Date.now() //lazy uuid
       guest.isConfirmed = false
       dispatch({
           type: ADD_GUEST,
           payload: guest
       })
   } 

   const toggleFilter = () => {
       dispatch({
           type: TOGGLE_FILTER
       })
   }

   const searchGuest = (guest) => {
       dispatch({
           type: SEARCH_GUEST,
           payload: guest
       })
   }


   const clearSearch = (guest) => {
       dispatch({
           type: CLEAR_SEARCH
       })
   }
    return (
        <GuestContext.Provider
            value={{
                guests: state.guests,
                filterGuests: state.filterGuests,
                search: state.search,
                toggleFilter,
                searchGuest,
                clearSearch,
                addGuest
            }}
        >{props.children}</GuestContext.Provider>
    )
}


export default GuestState