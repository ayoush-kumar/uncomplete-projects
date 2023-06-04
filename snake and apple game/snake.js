import { getinputdireaction } from "./input.js"

export const snakespeed = 5
const snakebody = [{x: 11, y:11}]
let newsegments = 0


export function update(){
    addsegments()

    const inputdirection = getinputdireaction()
    for(let i = snakebody.length - 2; i >=0; i--){
        snakebody[i + 1] = { ...snakebody[i]}
    }

    snakebody[0].x += inputdirection.x
    snakebody[0].y += inputdirection.y
}

export function draw(gameboard){
    snakebody.forEach(segment =>{
        const snakeelement = document.createElement('div')
        snakeelement.style.gridRowStart = segment.y
        snakeelement.style.gridColumnStart = segment.x
        snakeelement.classList.add('snake')
        gameboard.appendChild(snakeelement)
    })
}

export function expandsnake(amount){
    newsegments += amount
}

export function onsanke(position, {ignorehead = flase} = {}){
    return snakebody.some(segment => {
        if(ignorehead && index === 0) return false
        return equalposition(segment,position)
    })
}

export function getsnakehead(){
    return snakebody[0]
}

export function snakeintersection(){
    return onsanke(snakebody[0], { ignorehead: true })
}

function equalposition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addsegments(){
    for(let i=0; i< newsegments; i++){
        snakebody.push({...snakebody[snakebody.length - 1]})
    }
    newsegments = 0
}