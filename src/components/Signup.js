import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router';
import {signUp} from '../store/AuthAction'

export class Signup extends Component {
    state={
        user: {
            email:'',
        password:'',
        firstname:'',
        lastname:''
        },
        errors:{

        }
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       
       this.props.signUp(this.state.user)
    }

    handleChange=(e)=>{
        this.setState({
            user:{
                [e.target.id]:e.target.value
            }
        }
        )
    }

    render() {
        const {auth}=this.props
        const authError2=this.props.authError2
      
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h3>Signup</h3>
                    <div className="input-field">
                        <input id="email" type="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input id="firstname" type="text" placeholder="Firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input id="lastname" type="text" placeholder="Lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Login</button>
                        <div className="red-text center">
                            {authError2 ?authError2:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{

    return{
        signUp:(creds)=>dispatch(signUp(creds))
    }
}

const mapStateToProps =(state) =>{
    return{
        auth:state.firebase.auth,
        authError2:state.auth.authError2
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
