var turn = 1;
var win = -1;
var count = 0;
var a = 0;
var b = 0;
var roundsCounter = -1;
var matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var cols = document.querySelectorAll('.col');
    cols.forEach((col)=>{
        col.style.visibility = "hidden";
    })
function rounds(val){
    var cols = document.querySelectorAll('.col');
    cols.forEach((col)=>{
        col.style.visibility = "visible";
    })
    roundsCounter = val;
    document.getElementById("tes").style.visibility = "hidden";
    document.getElementById("message").innerHTML = "Player 1 turn";
    document.getElementById('clearAll').innerHTML = "NEXT!";
}
document.getElementById("clearAll").style.visibility = "hidden";
function action(elem, row, col){
    if(elem.innerHTML != '') return;
    if(win != -1) return;
    matrix[row][col] = turn;
    if(turn == 1){
        count++;
        elem.innerHTML = 'X';
        document.getElementById('message').innerHTML = "Player 2's turn";
        turn = 2;
    }else if(turn == 2){
        count++;
        elem.innerHTML = 'O';
        document.getElementById('message').innerHTML = "Player 1's turn";
        turn = 1;
    }
    for(var i = 0; i < 3; i++){
        if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2] && matrix[i][0] != -1) win = matrix[i][0];
        if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i] && matrix[0][i] != -1) win = matrix[0][i];
        if(matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) win = matrix[0][0];
        if(matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0]) win = matrix[0][2];
    }
    if (count == 9 || win != -1){
    if(count == 9){
        document.getElementById('message').innerHTML = "DRAW";
        document.getElementById("clearAll").style.visibility = "visible";
    }
    if(win != -1){
        if(win == 1){
            a++;
        document.getElementById('player1').innerHTML = a;
        }else{
            b++;
            document.getElementById('player2').innerHTML = b;
        }
        document.getElementById('message').innerHTML = "PLAYER " + win + "'S WINS!";
        document.getElementById('clearAll').style.visibility = "visible";
    }
    roundsCounter--;
}
}
function clearAll(elem){
    var cols = document.querySelectorAll('.col');
    cols.forEach((col)=>{
        col.innerHTML = '';
    })
    document.getElementById('message').innerHTML = "Player 1's turn";
    count = 0;
    win = -1;
    turn = 1;
    matrix = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];

    if(roundsCounter == 0){
        elem.innerHTML = "FINISHED";
        if(a > b){
            document.getElementById("message").innerHTML = "VICTORY FOR PLAYER 1";
        }else if(b > a){
            document.getElementById("message").innerHTML = "VICTORY FOR PLAYER 2";
        }else{
            document.getElementById("message").innerHTML = "THE GAME IS DRAW";
        }
        document.getElementById('player1').innerHTML = "0";
        document.getElementById('player2').innerHTML = "0";
        document.getElementById('clearAll').innerHTML = "Play Again?";
        roundsCounter--;
        var cols = document.querySelectorAll('.col');
        cols.forEach((col)=>{
            col.style.visibility = "hidden";
    })
}else if(roundsCounter == -1){
        a = 0;
        b = 0;
        var cols = document.querySelectorAll('.col');
        cols.forEach((col)=>{
        col.style.visibility = "hidden";
        document.getElementById("tes").style.visibility = "visible";
        document.getElementById("message").innerHTML = "Choose the number of rounds!";
        document.getElementById('clearAll').style.visibility = "hidden";
    })
    
    }else{
        document.getElementById("clearAll").style.visibility = "hidden";
    }
}
