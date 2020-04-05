import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const ClientSummary =({client})=> {
  
        return (
            <li className="collection-item"><div>{client.firstname} {client.lastname}
            <Link to={'/client/'+client.id} href="#!" className="secondary-content"><i className="material-icons">more</i></Link></div></li>
        )
   
}

export default ClientSummary;
