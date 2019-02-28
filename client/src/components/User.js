import React, {Component} from 'react';
import styled from 'styled-components';

const MessageBox = styled.div`
    display: flex;
    width: 25rem;
    flex-direction: column;
    padding: 1rem 0;
    background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    border-radius: 8px;
    margin-bottom: .5rem;
    color: white;
    .top-box{

        display: flex;
        flex-direction: column;
        .text-box{
            width: 100%;
            padding: 1rem;
        }
        .button-box{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            .msg-button{
                width: 30%;
                border: none;
                background-color: none;
            }
        }
    }
    .unhidden{
        display: flex;
        flex-direction: column;
    }
    .edit-button{
        margin-top: .5rem;
        width:30%;
        border: none;
        align-self: center;
    }
`

class User extends Component {
    constructor(props){
        super(props);

    }
    
    render(){
        return (
        <MessageBox>
            <div className='top-box'>
                <div className='text-box'>
                    <p>{this.props.user.username}</p>
                </div>
            </div>
        </MessageBox>
    )}
}

export default User;