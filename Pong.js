
var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

var continueGame;

var text = "";

var computerReactionDistance;
var computerMovementSpeed;

function drawCanvas(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawCanvas();
MAXANGLE = Math.PI / 4;

function drawPlayer1() { 
    ctx.beginPath();
    ctx.fillStyle = "#0099ff";
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.stroke();
}

function drawPlayer2() { 
    ctx.beginPath();
    ctx.fillStyle = "#0099ff";
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
    ctx.stroke();
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
}

function drawMiddleLine(){
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.setLineDash([20, 5]);
    ctx.moveTo(600, 0);
    ctx.lineTo(600, 850);
    ctx.stroke();
}

function drawScore() {
    ctx.font = "48px Verdana"
    ctx.fillText(player1.score, canvas.width/2 - 100, 40);
    ctx.font = "48px Verdana"
    ctx.fillText(player2.score, canvas.width/2 + 75, 40);
}

const player1 = {
    score: 0,
    x: 0,
    y: 400,
    width: 25,
    height: 100,
    movePaddleUp: function() {
        if(player1.y - 10 < 0){
            player1.y = 0;
        }
        else {
            player1.y -= 10;
        }       
    },

    movePaddleDown: function(){
        if(player1.y + 10 > 700){
            player1.y = 700;
        }
        else {
            player1.y += 10;
        }
    }
}

const player2 = {
    score: 0,
    x: 1175,
    y: 400,
    width: 25,
    height: 100,
    movePaddleUp: function() {
        if(player2.y - 10 < 0){
            player2.y = 0;
        }
        else {
            player2.y -= 10;
        }       
    },

    movePaddleDown: function(){
        if(player2.y + 10 > 700){
            player2.y = 700;
        }
        else {
            player2.y += 10;
        }
    }
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius : 10,
    speed : 5,
    xVelocity : 5,
    yVelocity : 1,
}

const controller = {
    'w': {pressed: false, func: player1.movePaddleUp},
    's': {pressed: false, func: player1.movePaddleDown},
    'ArrowUp': {pressed: false, func: player2.movePaddleUp},
    'ArrowDown': {pressed: false, func: player2.movePaddleDown},
}


document.addEventListener("keydown", (e) => {
    if(controller[e.key]){
        controller[e.key].pressed = true
    }
})

document.addEventListener("keyup", (e) => {
    if(controller[e.key]){
        controller[e.key].pressed = false
    }
})

const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
}


function moveComputer() {
    if(ball.x < computerReactionDistance){        
        if(ball.y - (player1.y + 50) < - 5){
            player1.y -= computerMovementSpeed;
        }
        
        if(ball.y - (player1.y + 50) > 5){
            player1.y += computerMovementSpeed;
        }
    }
}

function paddleCollision(ball, player) {
    var rightSideOfPaddle = player.x + 25;
    var leftSideOfPaddle = player.x;
    var topOfPaddle = player.y;
    var bottomOfPaddle = player.y + 100;
    var ballLeft = ball.x - ball.radius;
    var ballRight = ball.x + ball.radius;
    var ballBottom = ball.y + ball.radius;
    var ballTop = ball.y - ball.radius;

    if(player == player1){
        return ballTop > topOfPaddle -25 && ballBottom < bottomOfPaddle + 25 && ballLeft < rightSideOfPaddle;
    }
    else {
        return ballTop > topOfPaddle - 25 && ballBottom < bottomOfPaddle + 25 && ballRight > leftSideOfPaddle;
    }

}

function wallCollision(){
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.yVelocity *= -1;
    }
}


function render(){
    drawCanvas();
    drawPlayer1();
    drawPlayer2();
    drawCircle();
    drawMiddleLine();
    drawScore();
}

function update(){
    if(ball.x > canvas.width / 2){
        var player = player2;
    }
    else {
        var player = player1;
    }

    if(paddleCollision(ball, player)) {
        changeBallDirection(ball, player);  
    }
    wallCollision();

    ball.x += ball.xVelocity;
    ball.y += ball.yVelocity;
}

function clear(c) {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function changeBallDirection(ball, player){
    var centerOfPaddle = player.y + (player.height/2);
    var locationOfCollision = ball.y - centerOfPaddle;
    var normalizedCollisoin = locationOfCollision / (player.height/2);
    var bounceAngle = normalizedCollisoin * MAXANGLE;

    ball.speed += 0.2;
    ball.xVelocity = ball.speed * Math.cos(bounceAngle); 
    ball.yVelocity = ball.speed * Math.sin(bounceAngle);

    if(player == player1){
        ball.xVelocity = Math.abs(ball.xVelocity);
    }
    else {
        ball.xVelocity = Math.abs(ball.xVelocity) * -1;
    }

}

function checkScore() {
    if(ball.x > 1193){
        player1.score += 1;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speed = 5;
        ball.xVelocity = 5;
        ball.yVelocity = 1;
    }
    
    if(ball.x < 7){
        player2.score += 1;
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speed = 5;
        ball.xVelocity = -5;
        ball.yVelocity = 1;
    }
}


function renderWinScreen(){
    console.log("hello");
    clear(ctx);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var winText = document.getElementById('Win');
    var playAgain = document.getElementById('playAgain');
    var mainMenu = document.getElementById('mainMenu');
    if(player1.score == 3){
        winText.style.left = '-21%';
        winText.innerHTML = text;
    }
    else {
        winText.style.left = '-21%';
        winText.innerHTML = "Player 2 Wins!"
    }
    winText.style.display = 'block';
    playAgain.style.display = 'inline-block';
    mainMenu.style.display = 'inline-block';

    document.getElementById('playAgain').onclick = function() { // Handle when Play Again button is clicked
        winText.style.display = 'none';
        playAgain.style.display = 'none';
        mainMenu.style.display = 'none';
        player1.score = 0;
        player2.score = 0;
        continueGame = setInterval(game, 15);
        continueGame;
    }

    document.getElementById('mainMenu').onclick = function() { // Handle when Main Menu button is clicked
        winText.style.display = 'none';
        playAgain.style.display = 'none';
        player1.score = 0;
        player2.score = 0;
        var welcomeText = document.getElementById('Welcome');
        var buttons = document.getElementById('Start');
        var computer = document.getElementById('Computer');
        welcomeText.style.display = 'block';
        buttons.style.display = 'block';
        mainMenu.style.display = 'none';
        computer.style.display = 'block';
    }


}

function game(){
    clear(ctx);
    executeMoves();
    update();
    checkScore();
    if(checkWin()){
        clearInterval(continueGame);
        renderWinScreen();
    }
    else{
        render();
    }
    
}

function computerGame(){
    clear(ctx);
    executeMoves();
    moveComputer();
    update();
    checkScore();
    if(checkWin()){
        clearInterval(continueGame);
        renderWinScreen();
    }
    else{
        render();
    }
    
}

function checkWin(){
    return player1.score == 3 || player2.score == 3;
}


function hideMenuElements(){
    var welcomeText = document.getElementById('Welcome');
    var buttons = document.getElementById('Start');
    var mainMenu = document.getElementById('mainMenu');
    var computer = document.getElementById('Computer');
    var easy = document.getElementById('Easy');
    var medium = document.getElementById('Medium');
    var hard = document.getElementById('Hard');
    easy.style.display = 'none';
    medium.style.display = 'none';
    hard.style.display = 'none';
    welcomeText.style.display = 'none';
    buttons.style.display = 'none';
    mainMenu.style.display = 'none';
    computer.style.display = 'none';
}

function showDifficulty(){
    var easy = document.getElementById('Easy');
    var medium = document.getElementById('Medium');
    var hard = document.getElementById('Hard');
    easy.style.display = 'inline-block';
    medium.style.display = 'inline-block';
    hard.style.display = 'inline-block';
    document.getElementById('Easy').onclick = function() {
        hideMenuElements();
        text = 'Computer Wins!'
        computerReactionDistance = canvas.width / 4;
        computerMovementSpeed = 3;
        continueGame = setInterval(computerGame, 15);
        continueGame;
    }

    document.getElementById('Medium').onclick = function() {
        hideMenuElements();
        text = 'Computer Wins!'
        computerReactionDistance = canvas.width / 4;
        computerMovementSpeed = 5;
        continueGame = setInterval(computerGame, 15);
        continueGame;
    }

    document.getElementById('Hard').onclick = function() {
        hideMenuElements();
        text = 'Computer Wins!'
        computerReactionDistance = canvas.width / 2;
        computerMovementSpeed = 10;
        continueGame = setInterval(computerGame, 15);
        continueGame;
    }
}


document.getElementById('Start').onclick = function() {
    hideMenuElements();
    text = "Player 1 Wins!"
    continueGame = setInterval(game, 15);
    continueGame;
}

document.getElementById('Computer').onclick = function() {
    hideMenuElements();
    showDifficulty();
}


