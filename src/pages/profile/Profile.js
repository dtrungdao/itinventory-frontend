import React, { useEffect, useState } from 'react'
import './Profile.scss'
import useRedirect from '../../redirectPage/useRedirect'
import { useDispatch } from 'react-redux'
import { userData } from '../../services/authService'
import { SET_NAME, SET_USER } from '../../redux/features/auth/authSlice'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'

const Profile = () => {

    useRedirect("/login")

    const dispatch = useDispatch()

    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        async function getUserData() {
            const data = await userData()
            console.log(data)
            setProfile(data)
            setIsLoading(false)

            await dispatch(SET_USER(data))
            await dispatch(SET_NAME(data.name))
        }
        getUserData()
    }, [dispatch])

  return (
    <div className='profile --my2'>
        {isLoading}
        <>
            {!isLoading && profile === null ? (
                <p>Please check the page again</p>
            ) : (
                <Card cardClass={"card --flex-column"}>
                    <span className='profile-photo'>
                        <img src={profile?.photo} alt='profile-img' />
                    </span>

                    <span className='profile-data'>
                        <p> <b>Name: </b> {profile?.name} </p>
                        <p> <b>Email: </b> {profile?.email} </p>
                        <p> <b>Department: </b> {profile?.department} </p>
                        <p> <b>Phone: </b> {profile?.phone} </p>
                        <p> <b>Bio: </b> {profile?.bio} </p>
                        <div>
                            <Link to="/editprofile">
                                <button className='--button --button-general'>Edit Profile</button>
                            </Link>
                        </div>
                    </span>
                </Card>
            )}
        </>
    </div>
  )
}

export default Profile