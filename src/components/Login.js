import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {signIn} from '../store/AuthAction'
import { Redirect } from 'react-router';

export class Login extends Component {
    state={
        email:'',
        password:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.signIn(this.state)
       
      
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render() {
        const authError=this.props.error
        const {auth}=this.props
        if(auth.uid) return <Redirect to="/" />
       
       
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h3>Log in</h3>
                    <div className="input-field">
                        <input id="email" type="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn">Login</button>
                        <div className="red-text center">
                        {authError?authError:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
const mapStateToProps=(state)=>{
    console.log(state)

    return{
        error:state.auth.authError,
        auth:state.firebase.auth
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
