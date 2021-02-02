import { useState, useEffect } from 'react'
import Header from './partials/_Header'
import UpdateUser from './partials/_UpdateUser'
// import MessagesList from './partials/_MessagesList'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { readOne, updateOne } from '../controllers/user'
import getCookie from '../controllers/additionals'

const Profile = () => {

    const [toggleForm, setToggleForm] = useState(false);
    const [email, setEmail] = useState('')
    const [MNO, setMNO] = useState('')
   
    const token = getCookie('token');
    const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');


    useEffect(() => {
        const readLoggedInUser = async () => {
            const data = await readOne(userID, token)
            console.log(data)
            // loggedUser.email = data.result.email
            // loggedUser.mobileNumber = data.result.mobileNumber
            setEmail(data.result.email)
            setMNO(data.result.mobileNumber)
        }

        readLoggedInUser()
    },[userID, token])

    // update user password
    const updatePass = async (userID, token, formData) => {
        await updateOne(userID, token, formData)
    }

    return (
        <>
            <Header  user = { userName }/>
            <Container>
                <h1> { userName } </h1>
                <h3> { email } </h3>
                <h3> { MNO } </h3>

                <Button varient='primary' onClick = { () => setToggleForm(!toggleForm) }>
                    Update Password
                </Button>

                { toggleForm && <UpdateUser  onUpdate = { updatePass } userID = { userID } token = { token }/> }

            </Container>
        </>  
    )
}

export default Profile
