import React, {Component} from 'react';
import { connect } from 'react-redux';
import {register} from '../actions';
import styled from 'styled-components';


const SignupBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    h3 {
        font-size: 3rem;
        align-self: center;
        margin-top: 3rem;
    }
    form {display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 30rem;
    align-items: center;
    
    justify-content: space-evenly;
    input, button {
        margin-top: .5rem;
        width: 100%;
        padding: .5rem;
        border-radius: 8px;
    }
    .signup-button {
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        color: white;
    }
    p {
        margin-top: 2rem;
    }

    }
    .hidden {
        display: none;
    }
`;

class Register extends Component {

    state = {
        username: '',
        password: '',
        department: ''
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    signup = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.register(this.state);
        this.props.history.push('/');
    }



    render(){

        return(
            <SignupBox>
                <h3>{this.props.displayText}</h3>
                <form className={this.props.hideDone} onSubmit={this.signup}>
                    {/* <p>your name</p>
                    <input
                        onChange={this.input}
                        placeholder='Name'
                        value={this.state.name}
                        name='name'
                        type='text'
                    /> */}
                    {/* <input
                        onChange={this.input}
                        placeholder='Last Name'
                        value={this.state.lastName}
                        name='lastName'
                        type='text'
                    /> */}
                    <p>username</p>
                    <input
                        onChange={this.input}
                        placeholder='Username'
                        value={this.state.username}
                        name='username'
                        type='text'
                    />
                    <p>password</p>
                    <input
                        onChange={this.input}
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        type='password'
                    />
                    <p>department</p>
                    <input
                        onChange={this.input}
                        placeholder='department name'
                        value={this.state.department}
                        name='department'
                        type='text'
                    />
                    <button className='signup-button' type='submit'>sign up</button>
                </form>
            </SignupBox>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.signup.isLoading,
        displayText: state.signup.displayText,
        hideDone: state.signup.hideDone,
        error: state.signup.error
    }
}

export default connect(mapStateToProps, {register})(Register);