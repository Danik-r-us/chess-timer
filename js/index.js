//Starting Variables
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let time1 = document.getElementById('time1')
let time2 = document.getElementById('time2')
let readyPlayers = false
let timerRunningForPlayer1 = false
let timerRunningForPlayer2 = false
let minutes
let seconds
let centiseconds

//Play button must be enabled for timers to run
let start = function(){
    let startButton = document.querySelector('#start')
    if(startButton.innerHTML == '⏵'){
        startButton.innerHTML = '⏸'
        readyPlayers = true
    }else if(startButton.innerHTML == '⏸'){
        startButton.innerHTML = '⏵'
        timerRunningForPlayer1 = false
        timerRunningForPlayer2 = false
        readyPlayers = false
    }
}

//5 min button sets both timers to 10
let setTime5Min = function(){
    minutes = 5
    seconds = 0
    centiseconds = 0
    document.querySelector('#time1').innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    document.querySelector('#time2').innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    console.log('5min')
}

//10 min button sets both timers to 10
let setTime10Min = function(){
    minutes = 10
    seconds = 0
    centiseconds = 0
    document.querySelector('#time1').innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    document.querySelector('#time2').innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    console.log('10min')
}

//Player 1 Controls, first press of the game starts player 1's timer, second press stops player 1's timer and starts player 2's timer
let startCountDownForPlayer1 = function(){
    function timer(){
        setInterval(function(){
        if(centiseconds < 0){
            centiseconds += 99
            seconds--
        } if(seconds < 0){
            seconds += 60
            minutes--
        }
        currentTime=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
        time1.innerHTML = currentTime
        centiseconds--
    },10)
    currentTime = time1.innerText
    }

    if(timerRunningForPlayer1 == false && timerRunningForPlayer2==false && readyPlayers==true){
        timerRunningForPlayer2 = true
        timer()
    }else if(timerRunningForPlayer1 == false && timerRunningForPlayer2 == true && readyPlayers==true){
        timerRunningForPlayer2 = false
        clearInterval(timer())
    }
}

//Player 2 Controls, first press of the game starts player 2's timer, second press stops player 2's timer and starts player 1's timer
let startCountDownForPlayer2 = function (){

    function timer(){
        setInterval(function(){
        if(centiseconds < 0){
            centiseconds += 99
            seconds--
        } if(seconds < 0){
            seconds += 60
            minutes--
        }
        currentTime=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
        time2.innerHTML = currentTime
        centiseconds--
    },10)
    currentTime = time2.innerText
    }

    if(timerRunningForPlayer1 == false && timerRunningForPlayer2==false && readyPlayers==true){
        timerRunningForPlayer2 = true
        timer()
    }else if(timerRunningForPlayer1 == false && timerRunningForPlayer2 == true && readyPlayers==true){
        timerRunningForPlayer2 = false
        clearInterval(timer())
    }
}

//Event listeners
document.querySelector('#min5').addEventListener('pointerdown', setTime5Min)
document.querySelector('#min10').addEventListener('pointerdown', setTime10Min)
document.querySelector('#start').addEventListener('pointerdown', start)
document.querySelector('#button1').addEventListener('pointerdown', startCountDownForPlayer1)
document.querySelector('#button2').addEventListener('pointerdown', startCountDownForPlayer2)