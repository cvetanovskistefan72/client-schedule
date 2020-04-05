import React, { Component } from 'react'
import ClientSummary from './ClientSummary'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router'


 class Dashboard extends Component {
    render() {
        const {clients} = this.props

        const {auth} = this.props

        if(!auth.uid) return <Redirect to ="/"/>

        const summary = clients ?( clients.map((client)=>{
            return <ClientSummary key={client.id} client={client} />
        })):(<li>Loading data...</li>)


        return (
          <div className="container">
                <ul className="collection with-header">
        <li className="collection-header"><h4>Clients</h4></li>
            {summary}
      </ul>
          </div>
        )
    }
}

const mapStateToProps =(state)=>{
  console.log(state)
    return{
        clients: state.firestore.ordered.clients,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'clients'},
       
    ])
)(Dashboard);
