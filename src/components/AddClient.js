import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CreateClient,ClientError} from '../store/ClientAction'
import { Redirect } from 'react-router'

 class AddClient extends Component {
    state={
        
        firstname:'',
        lastname:'',
        summary:'',
        date:'',
        error:null
      
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       
        if(this.state.firstname!=''&&this.state.lastname!=''&&this.state.summary!=''&&this.state.date!=''){
            this.props.CreateClient(this.state)
            this.props.history.push('/')
            this.setState({
                error:null
            })
                 
        }else{
           this.setState({
               error:'Fill all the inputs'
           })
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h3>Add Client</h3>
                    <div className="input-field">
                        <input id="firstname" type="text" placeholder="Firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input id="lastname" type="text" placeholder="LastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <textarea  id="summary"   placeholder="Summary" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <input id="date" type="date" placeholder="Date" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Create</button>
                        <div className="red-text center">
                            {this.state.error?this.state.error:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        CreateClient:(clients)=>dispatch(CreateClient(clients)),
        
       
        
    }
}
const mapStateToProps =(state)=>{
    return{
        auth:state.firebase.auth,
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddClient);
