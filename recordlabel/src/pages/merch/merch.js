import React from 'react'
import Songcard from '../../components/songcard';
import NYG from '../../assets/images/nyg.jpg'

class Merch extends React.Component{
    render(){
        return(
            <div>
     <h1>Merch</h1>
     <Songcard artist={NYG}/>
            </div>
        )
    }
}

export default Merch;