import { LOCALHOST, USERURL } from "../utils/index.js"
const getUser = async () => {
    const url = LOCALHOST + USERURL
    let user = await fetch(url)
    if (user) {
        user = user.json()
        return user
    } else {
        return false
    }
}

export { getUser }