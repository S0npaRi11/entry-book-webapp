// contains all the fetch methods for book

const URL = 'https://entry-book.herokuapp.com';


// read all books
const readAllBooks = async(token) => {
    const data=  await fetch(URL+'/book',{
        headers:{
        'auth-token': token,
        }
    })

    return data.json()
}

export const readAll = readAllBooks

// read a book
const readOneBook = async(token, bookID) => {
    const id = typeof(bookID) === 'string' ? bookID : bookID.toString();
    const data = await fetch(URL+'/book/'+id,{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const readOne = readOneBook

// create a book
const createOneBook = async(token,formData) => {
    const data = await fetch(URL+'/book',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'auth-token': token
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const createOne = createOneBook

// update a book 
const updateOneBook = async(token, bookID,formData) => {
    const id = typeof(bookID) === 'string' ? bookID : bookID.toString();
    const data = await fetch(URL+'/book/'+id,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
            'auth-token': token
        },
        body: JSON.stringify(formData)
    })

    return data.json()
}

export const updateOne = updateOneBook

// delete a book
const deleteOneBook = async(token, bookID) => {
    const id = typeof(bookID) === 'string' ? bookID : bookID.toString()
    const data = await fetch(URL+'/book/'+id,{
        method: 'DELETE',
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const deleteOne = deleteOneBook

// view all users of the book
const readAllUsersOfBook = async(token, bookID) => {
    const id = typeof(bookID) === 'string' ? bookID : bookID.toString()
    const data = await fetch(URL+'/book/user/'+id,{
        headers:{
            'auth-token': token
        }
    })

    return data.json()
}

export const readAllUsers = readAllUsersOfBook

// making book object for default export

const book = {
    readAll: readAllBooks,
    readOne: readOneBook,
    createOne: createOneBook,
    updateOne: updateOneBook,
    deleteOne: deleteOneBook,
    readAllUsers: readAllUsersOfBook
}

export default book