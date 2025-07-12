import { getUser } from "./models/users.model";

function main() {
    getUser("admin", "0000")

}

document.addEventListener("DOMContentLoaded", main)