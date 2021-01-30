// contains all the fetch methods for user

const URL = 'https://entry-book.herokuapp.com';


// create user (register)
const createUser = async (formData) => {
    const data = await fetch(URL+'/user',{
        method: 'POST',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    });

    return data
}

export const register = createUser;

// read a single user with id

const readOneUser = async(userID,token) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/'+id,{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const readOne = readOneUser

// update a single user with id

const updateOneUser = async(userID,token, formData) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/'+id,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'auth-token': token
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const updateOne = updateOneUser

// delete a single user with id

const deleteOneUser = async(userID,token) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/'+id,{
        method: 'DELETE',
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const deleteOne = deleteOneUser

// login

const logInUser = async(formData) => {
    const data = await fetch(URL+'/user/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const logIn = logInUser

// read all users

const readAllUsers = async (token) => {
    const data = await fetch(URL+'/user',{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const readAll = readAllUsers

// view all the books of the user

const readAllBooksOfUser = async(token) => {
    const data = await fetch(URL+'/user/books',{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const readAllBooks = readAllBooksOfUser

// read messages

const readAllMessagesOfUser = async(token) => {
    const data = await fetch(URL+'/user/messages',{
        headers:{
            'auth-token':token
        }
    })

    return await data.json()
}

export const readAllMessages = readAllMessagesOfUser    

// read a single message

const readOneMessageOfUser = async (token,userID) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/message/'+id,{
        headers:{
            'auth-token': token
        }
    })

    return data.json()

}

export const readOneMessage = readOneMessageOfUser

// delete message

const deleteOneMessageOfUser = async (token,userID) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/message/'+id,{
        method: 'DELETE',
        headers:{
            'auth-token': token
        }
    })

    return data.json()

}

export const deleteOneMessage = deleteOneMessageOfUser

// send a message

const sendOneMessageOfUser = async (token,userID,formData) => {
    const id = typeof(userID) === 'string' ? userID : userID.toString();
    const data = await fetch(URL+'/user/message/'+id,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'auth-token': token
        },
        body: JSON.stringify(formData)
    })

    return data.json()

}

export const sendOneMessage = sendOneMessageOfUser

// reaquest a book

const requestBookToUser = async (token, bookID) => {
    const id = typeof(bookID) === 'string' ? bookID : bookID.toString()
    const data = await fetch(URL+'/user/request/'+id,{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const requestBook = requestBookToUser

const user = {
    register: createUser,
    logIn: logInUser,
    readOne: readOneUser,
    updateOne: updateOneUser,
    deleteOne: deleteOneUser,
    readAll: readAllUsers,
    readAllBooks: readAllBooksOfUser,
    readAllMessages: readAllMessagesOfUser,
    readOneMessage: readOneMessageOfUser,
    deleteOneMessage: deleteOneMessageOfUser,
    sendOneMessage: sendOneMessageOfUser,
    requestBook: requestBookToUser
}

export default user

