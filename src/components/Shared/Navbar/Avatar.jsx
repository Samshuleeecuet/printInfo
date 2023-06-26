import React, { useContext } from 'react';
import avatarImg from './../../../../src/assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';


const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <img src={user && user.photoURL ? user.photoURL : avatarImg} className='rounded-full' alt='profile' height='40' width='40'>
            
        </img>
    );
};

export default Avatar;