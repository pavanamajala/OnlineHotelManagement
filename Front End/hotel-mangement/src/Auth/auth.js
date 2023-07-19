// import React from 'react'

export default function Auth() {

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return { Authorization: 'Bearer ' + user };
    } else {
        return { };
    }
    
}
