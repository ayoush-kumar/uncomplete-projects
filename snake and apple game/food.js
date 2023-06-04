import { onsanke, expandsnake} from "./snake.js"
import { randomGridPosition } from './grid.js'

let food = {x: 10, y: 1}
const expensionrate = 1

export function update(){
    if (onsanke(food)){
        expandsnake(expensionrate)
        food = { x: 20, y: 10 }
    }
}

export function draw(gameboard){
    const foodelement = document.createElement('div')
    foodelement.style.gridRowStart = food.y
    foodelement.style.gridColumnStart = food.x
    foodelement.classList.add('food')
    gameboard.appendChild(foodelement)
}

function getrandomfoodposition(){
    let newfoodposition 
    while(newfoodposition == null || onsanke(newfoodposition)){
        newfoodposition =  randomGridPosition()
    }

    return newfoodposition
}