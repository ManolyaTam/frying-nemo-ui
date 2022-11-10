
import LoginBlock from '../../components/login-block/login.component';
import { checkUser } from '../../services/checkUser';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../../components/providers/user-provider.component';
import { useContext, useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(userContext.user){
            navigate('/')
        }
    }, []);

    const userContext = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value.trim();
        const userPassword = e.target.password.value.trim();

        const user = checkUser(userEmail, userPassword)
        if (user) {
            console.log('welcome here!');
            userContext.setUser(user);
            navigate('/view');
        }
        else
            alert('email/password combination is wrong, please try again or sign up');
    };

    return (
        <LoginBlock onSubmit={submitHandler} />
    );
};

export default Login;