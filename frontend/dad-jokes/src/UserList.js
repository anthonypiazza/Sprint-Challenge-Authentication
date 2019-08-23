import React from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
    return(
        <div>
            <h1>{props.users.username}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, null)(UserList);