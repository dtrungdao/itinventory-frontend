import React from 'react'
import { logoutUser } from '../../services/authService'
//Hooks of redux https://react-redux.js.org/introduction/getting-started
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOGIN, selectName } from '../../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false))
    navigate("/")
  }
  return (
    <div className='pad header'>
        <div className='--flex-middle'>
            <h3>
                <span className='--fw'>Welcome </span>
                <span className='--color-dark'>{name}</span>
            </h3>
            <button onClick={logout} className='--button --button-general'>
                Logout account
            </button>
        </div>
        <hr />
    </div>
  )
}

export default Header