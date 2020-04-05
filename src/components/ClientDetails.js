import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router'

class  ClientDetils extends Component{
    render(){

        const {client,auth} = this.props
        if(!auth.uid) return <Redirect to="/"/>
       
    return (
        <div className="container">
            {client ? (<div className="card">
                <div className="card-content">
                    <div className="card-title">
                      {client.firstname} {client.lastname}
                    </div>
                    <p>{client.summary} na den {client.date}</p>
                </div>
                <div className="card-action grey lighten-2">
                   Added  by {client.author}
                </div>
            </div>) : (<div>Loading...</div>)}
        </div>
        
    )
    }
}

    const mapStateToProps =(state,Ownprops)=>{
        let id=Ownprops.match.params.id
        const clients = state.firestore.data.clients
        const client=clients?clients[id]:null
        
        
        return{
            client:client,
            auth:state.firebase.auth
        }
    }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'clients'}
    ])
)(ClientDetils);
