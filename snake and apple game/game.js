import{ update as updatesnake, draw as drawsnake, snakespeed, getsnakehead, snakeintersection} 
from './snake.js'

import { update as updatefood, draw as drawfood } 
from './food.js'

import { outsidegrid} from './grid.js'

let lastrenderTime = 0
let game = false
const gameboard = document.getElementById('game-board')

function main(CurrentTime){
    if(gameover){
        return alert('you asshole lost the game')
    }

    window.requestAnimationFrame(main) 
    const secondssincelastrender =( CurrentTime - lastrenderTime )/ 1000
    if(secondssincelastrender < 1 / snakespeed) return
    
    console.log("render")
    lastrenderTime = CurrentTime
   
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updatesnake()
    updatefood()
    checkdeath()

}

function draw(){
    gameboard.innerHTML = ''
    drawsnake(gameboard)
    drawfood(gameboard)

}

function checkdeath(){
    gameover = outsidegrid(getsnakehead()) || snakeintersection()
}