import { usersBBDD } from "../BBDD/users-BBDD"
import { readLocalStorage, resetLocalStorage, setLocalStorage } from "../localStorage/localStorage-scripts"
import { IUser } from "../types/user-type"


function getUsersBBDD(): IUser[] {
    
    setLocalStorage("usersBBDD", usersBBDD)
    return readLocalStorage("usersBBDD")
}

function checkUser(username: IUser["username"], password: IUser["password"]) {
    const usersList = getUsersBBDD()

    const userSelected = usersList.find(user => user.username === username && user.password === password)

    if (!userSelected) {
        console.log("Incorrect user")
        return null
    }
    if (userSelected) {
        setLocalStorage("userLogged", userSelected)
        return userSelected
    }
}

function getUser(): IUser | null {
    const checkedUser = readLocalStorage("userLogged")

    if (!checkedUser) {
        return null
    }

    return checkedUser
}

export function logIn(username: IUser["username"], password: IUser["password"]) {
    checkUser(username, password)
    getUser()
    console.log("Usuario loggeado")
}

export function logOut() {
    if(readLocalStorage("userLogged")) {
        resetLocalStorage("userLogged")
        console.log("Eliminado")
    }
}