import './header.css';
import nemo from '../../../images/nemo.png';
// import profilePic from '../../../images/profile.png';
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/user-provider.component';
const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const userContext = useContext(UserContext);
    return (
        <div>
            <div className='header'>
                <img src={nemo} alt='logo' width={100} onClick={() => navigate('/')} />  {/* go to home page when clicking on logo */}
                {props.text ? <span>{props.text}</span> : null}
                <span style={userContext.user?{"marginLeft": 100}:{marginRight: 50}}>
                    <Link to="/add" className={location.pathname === '/add' ? 'active nemo-button' : 'nemo-button'}>add</Link>
                    <NavLink to="/view" className={(location.pathname === '/view' || location.pathname === '/view/') ? 'active nemo-button' : 'nemo-button'}>view</NavLink>
                </span>
                <span className='userProfile'>
                    <div>
                        <p>Cart: {props.cart || 0}&nbsp;&nbsp;</p>
                        {
                        userContext.user?.fullName
                            ? <div className="user-badge">
                                <img src={userContext.user.imageUrl} alt="" />
                                <p>{userContext.user.fullName}</p>
                                <button
                                    className='logout-button'
                                    onClick={() => {
                                        userContext.setUser(null);
                                        navigate('/login');
                                    }}>
                                    logout
                                </button>
                            </div>
                            : <Link className='nemo-button' to='/login'>login</Link>}</div>
                </span>
            </div>
            <hr />
        </div>
    );
};
export default Header;