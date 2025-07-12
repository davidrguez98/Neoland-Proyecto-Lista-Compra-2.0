import { usersBBDD } from "../BBDD/users-BBDD"
import { readLocalStorage, setLocalStorage } from "../localStorage/localStorage-scripts"
import { IUser } from "../types/user-type"


export function getUsersBBDD(): IUser[] {
    
    setLocalStorage("usersBBDD", usersBBDD)
    return readLocalStorage("usersBBDD")
}

export function checkUser(username: IUser["username"], password: IUser["password"]) {
    const usersList = getUsersBBDD()

    const userSelected = usersList.find(user => user.username === username && user.password === password)

    if (!userSelected) {
        return false
    }
    if (userSelected) {
        setLocalStorage("userLogged", userSelected)
        return true
    }
}

export function getUser(username: IUser["username"], password: IUser["password"]) {
    const checkedUser = checkUser(username, password)

    if (!checkedUser) { console.log("Usuario incorrecto") }
    if (checkedUser) {
        const userLogged = readLocalStorage("userLogged")
        console.log(userLogged)
    }

    
}