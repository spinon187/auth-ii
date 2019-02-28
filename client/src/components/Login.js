import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LoginBox = styled.div`
    margin-top: 10rem;
    form {display: flex;
    flex-direction: column;
    padding: 5rem;
    align-items: center;
    justify-content: space-evenly;
    input, button {
        margin-top: 3rem;
        width: 100%;
        padding: .5rem;
        border-radius: 8px;
    }
    .login-button {
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        color: white;
    }
    .toSignup {
        margin-top: 2rem;
        a {
            text-decoration: none;
            color: #4361c2
        }
    }
    }
`;

class Login extends Component {
    
    state = {
        username: '',
        password: ''
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    login = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.props.history.push('/');
    }



    render(){
        const loadingSwap = this.props.isLoading === true
        ? <h3>logging in...</h3>
        : <h3>enter username and password</h3>

        return(
            <LoginBox>
                <form onSubmit={this.login}>
                    {loadingSwap}
                    <input
                        onChange={this.input}
                        placeholder='Username'
                        value={this.state.username}
                        name='username'
                        type='text'
                    />
                    <input
                        onChange={this.input}
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        type='password'
                    />
                    <button className='login-button' type='submit'>Log In</button>
                    {/* <div className='toSignup'>
                        not a member?<br/> <Link to='/signup'>Register Here</Link>
                    </div> */}
                </form>
            </LoginBox>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.login.isLoading,
        error: state.login.error
    }
}

export default connect(mapStateToProps, {login})(Login);