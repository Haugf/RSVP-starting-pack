import React, {useContext} from 'react' //Use context is to use states in different componets
import GuestContext from '../../context/guestContext/guestContext'
import Guest from './Guest'


const Guests = () => {
  const {guests, filterGuests, search} = useContext(GuestContext) // gives us access to the guests
  return (
    <div className="guests">  
    { search !== null ? search.map(guest => <Guest key={guest.id} guest={guest} />) :
      guests.filter(guest => !filterGuests || guest.isConfirmed).map(guest => <Guest key={guest.id} guest={guest}/>)}   
    </div> // Each guest from the state gets mapped to a new guest component [key and guest are props]
  )
}
export default Guests
