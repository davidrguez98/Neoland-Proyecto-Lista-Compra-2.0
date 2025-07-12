export function setLocalStorage(key: string, value: {} | string) {
    if (key !== "" && value !== "") {
        localStorage.setItem(key, JSON.stringify(value));
        console.log("Set data:", key);
    } else {
        console.error("Invalid key or value");
    }
}

export function readLocalStorage(key: string) {
    const item = localStorage.getItem(key)

    if (!item) { 
        return null
    } 
    if (item) {
        const value = JSON.parse(item)
        console.log("Data founded:", key, value);
        return value;
    }
}

export function resetLocalStorage(key: string) {
    localStorage.removeItem(key)
    console.log(`LocalStorage ${key} has been removed.`)
}

// export function deleteItemLocalStorageAdmin() {

//     const selectedButton = document.querySelectorAll("#StorageList #deleteButton")
//     const list = readLocalStorage("newList")

//     for (let index = 0; index < selectedButton.length; index++) {
//         selectedButton[index].addEventListener("click", function() {
//             list.splice(index, 1)
//             setLocalStorage("newList", list)
//             window.location.assign("./admin-web.html")
//         })
//     }
// }

// export function deleteItemLocalStorageShoppingCart() {

//     const selectedButton = document.querySelectorAll("#shoppingCartContainer .removeOneShoppingCart")
//     const shoppingCartList = readLocalStorage("shoppingCartList")
    

//     for (let index = 0; index < selectedButton.length; index++) {
//         selectedButton[index].addEventListener("click", function(event) {
//             event.preventDefault()
//             shoppingCartList.splice(index, 1)
//             setLocalStorage("shoppingCartList", shoppingCartList)
//             displayProductInShoppingCart()
//         })
//     }
// }

// export function editItemLocalStorageShoppingCart() {

//     const ButtonItemShoppingCartPlus = document.querySelectorAll("#shoppingCartContainer .itemShoppingCartPlus")
//     const ButtonItemShoppingCartMinus = document.querySelectorAll("#shoppingCartContainer .itemShoppingCartMinus")
//     const shoppingCartList = readLocalStorage("shoppingCartList")

//     for (let index = 0; index < shoppingCartList.length; index++) {
//         ButtonItemShoppingCartPlus[index].addEventListener("click", function(event) {
//             event.preventDefault()
//             shoppingCartList[index].quantity = shoppingCartList[index].quantity + 1 
//             setLocalStorage("shoppingCartList", shoppingCartList)
//             displayProductInShoppingCart()
//         })

//         ButtonItemShoppingCartMinus[index].addEventListener("click", function(event) {
//             event.preventDefault()

//             if (shoppingCartList[index].quantity > 0) {
//                 shoppingCartList[index].quantity = shoppingCartList[index].quantity - 1 
//                 setLocalStorage("shoppingCartList", shoppingCartList)
//                 displayProductInShoppingCart()
//             } if (shoppingCartList[index].quantity < 1) {
//                 console.log("soajdhaskd")
//                 shoppingCartList.splice(index, 1)
//                 setLocalStorage("shoppingCartList", shoppingCartList)
//                 displayProductInShoppingCart()
//             }
//         })
//         }
// }

// export function editItemLocalStorage() {

//     const selectedButton = document.querySelectorAll("#StorageList #editButton")

//     for (let index = 0; index < selectedButton.length; index++) {
//         selectedButton[index].addEventListener("click", function() {
            
//             localStorage.setItem("editIndex", index)
//             window.location.assign("./update-article.html") 
//         }) 

//     }

    
// }

