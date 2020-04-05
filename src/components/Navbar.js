import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

const  Navbar=(props)=> {

    const {uId }= props
    const links = uId.uid ? ( <SignedIn />) : ( <SignedOut />)
    console.log(uId)
    return (
       <nav className="nav-wrapper grey darken-3">
        <div className="container">
       
      
                <NavLink className="brand-logo left" to="/">Logo</NavLink>
                
                {uId.isLoaded&&links}
       
        
        </div>
       </nav>
    )
}

const mapStateToProps=(state)=>{
  

    return{
        uId:state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);

