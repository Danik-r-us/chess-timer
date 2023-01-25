//Starting Variables
let startButton = document.querySelector('#start')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let time1 = document.getElementById('time1')
let time2 = document.getElementById('time2')
let readyPlayers = false
let timerRunningForPlayer1 = false
let timerRunningForPlayer2 = false
let player1IntervalID
let player2IntervalID
let minutes
let seconds
let centiseconds
let standardNotation = "${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}"

//Play button must be enabled for timers to run
let start = function(){
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

//10sec button sets both timers to 10sec
let setTime10Sec = function(){
    minutes = 0
    seconds = 10
    centiseconds = 0
    time1.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    time2.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    console.log(`${standardNotation}`)
}

//5 min button sets both timers to 10
let setTime5Min = function(){
    minutes = 5
    seconds = 0
    centiseconds = 0
    time1.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    time2.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
}

//10 min button sets both timers to 10
let setTime10Min = function(){
    minutes = 10
    seconds = 0
    centiseconds = 0
    time1.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
    time2.innerText=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
}

//Player 1 Controls, first press of the game starts player 1's timer, second press stops player 1's timer and starts player 2's timer
let startCountDownForPlayer1 = function(){
    if(timerRunningForPlayer1 == false && timerRunningForPlayer2==false && readyPlayers==true){
        timerRunningForPlayer1 = true
        player1IntervalID = setInterval(function(){
            if(centiseconds < 0){
                centiseconds += 99
                seconds--
            } if(seconds < 0){
                seconds += 60
                minutes--
            }
            time1.innerHTML=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
            centiseconds--
            if(time1.innerHTML == `0:00.00`){
                clearInterval(player1IntervalID)
            }
            if(readyPlayers==false){
                clearInterval(player1IntervalID)
            }
        },10)
    }else if(timerRunningForPlayer1 == true && timerRunningForPlayer2 == false && readyPlayers==true){
        timerRunningForPlayer1 = false
        clearInterval(player1IntervalID)
        startCountDownForPlayer2()
    }
}

//Player 2 Controls, first press of the game starts player 2's timer, second press stops player 2's timer and starts player 1's timer
let startCountDownForPlayer2 = function (){
    if(timerRunningForPlayer1 == false && timerRunningForPlayer2==false && readyPlayers==true){
        timerRunningForPlayer2 = true
        player2IntervalID = setInterval(function(){
            if(centiseconds < 0){
                centiseconds += 99
                seconds--
            } if(seconds < 0){
                seconds += 60
                minutes--
            }
            time2.innerHTML=`${minutes}:${seconds<10 ? '0'+seconds:seconds}.${centiseconds<10?'0'+centiseconds:centiseconds}`
            centiseconds--
            if(time2.innerHTML == `0:00.00`){
                clearInterval(player2IntervalID)
            }
            if(readyPlayers==false){
                clearInterval(player2IntervalID)
            }
        },10)
    }else if(timerRunningForPlayer1 == false && timerRunningForPlayer2 == true && readyPlayers==true){
        timerRunningForPlayer2 = false
        clearInterval(player2IntervalID)
        startCountDownForPlayer1()
    }
}


//Event listeners
document.querySelector('#tenSecond').addEventListener('pointerdown',setTime10Sec)
document.querySelector('#min5').addEventListener('pointerdown', setTime5Min)
document.querySelector('#min10').addEventListener('pointerdown', setTime10Min)
document.querySelector('#start').addEventListener('pointerdown', start)
document.querySelector('#time1').addEventListener('pointerdown', startCountDownForPlayer1)
document.querySelector('#time2').addEventListener('pointerdown', startCountDownForPlayer2)