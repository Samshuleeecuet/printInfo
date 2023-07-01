import React, { useContext } from 'react';
import useUser from '../../hooks/useUser/useUser';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const [isUser] = useUser();
    const {user}= useContext(AuthContext);
    console.log('user', user)
    console.log('isUser',isUser)
    return (
        <div>
            <p>This is Home Page</p>
        </div>
    );
};

export default Home;