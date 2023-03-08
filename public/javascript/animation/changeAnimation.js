import { transitionBlackOut } from "../function/transitionBlackOut.js"
import { animateTown,animateCenter,animateShop,animateBattle } from "./index.js"

const changeAnimation = (key) => {
    transitionBlackOut()
    switch (key) {
        case 220: animateTown(); break;
        case 291: animateCenter(); break;
        case 292: animateShop(); break;
        case 2800: animateBattle(); break;
        default: console.log(key); break;
    }

}

export { changeAnimation }