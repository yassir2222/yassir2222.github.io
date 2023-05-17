var player1 = false;
var player2 = false;

var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
var win1=0,win2=0;

var i=0,j=0;

function start(){
    document.querySelector("#chose").style.display='flex';

}

function choix(i){
    
    if(i==1){
        player1=true;
        player2=false;
    }else{
        player1=false;
        player2=true;
    }
    document.querySelector("#chose").style.display='none';
}

function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            document.getElementById(`(${i})(${j})`).replaceChildren();
            board[i][j]=0;
        }
    }
    win1=0;
    win2=0;
    document.querySelector(".p1").innerHTML=`Player 1: ${win1}`;
    document.querySelector(".p2").innerHTML=`Player 2: ${win1}`;
}

function boxe(i,j){
    b1=document.getElementById(`(${i})(${j})`);
    if(player1 && board[i][j]==0){
        b1.innerHTML='<div class="X">X</div>';
        board[i][j]='X';
        player1=!(player1);
     player2=!(player2);
    }else if(player2 && board[i][j]==0){
        b1.innerHTML='<div class="O">O</div>';
        board[i][j]='O';

        player1=!(player1);
        player2=!(player2);
    }
}

function check_horizontale(){
    let p1=0,p2=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[j][i]=='X'){
                p1++;
            }else if(board[j][i]=='O'){
                p2++;
            }
        }  
        if(p1==3){
            console.log(11);
            return 1;
        }else if(p2==3){
            console.log(12);
            return 2;
        }else{
            p1=0;
            p2=0;
        }
    }
    return 0;
    
}

function check_verticale(){
     p1=0,p2=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]=='X'){
                p1++;
            }else if(board[i][j]=='O'){
                p2++;
            }
        }
        if(p1==3){
            console.log(21);
            return 1;
        }else if(p2==3){
            console.log(22);

            return 2;
        }else{
            p1=0;
            p2=0;
        }
    }
    
 return 0;
}

function check_diagonale(){
    let p1=0,p2=0;
    for(let i=0;i<3;i++){

        if(board[i][i]=='X'){
            p1++;
        }else if(board[i][i]=='O'){
            p2++;
        }
    }
        if(p1==3){
            console.log(31)
            return 1;
            
        }else if(p2==3){
            console.log(32)
            return 2;
        }else{
            p1=0;
            p2=0;
        }
       
    
    
    for(let i=0;i<3;i++){

        if(board[i][2-i]=='X'){
            p1++;
        }else if(board[i][2-i]=='O'){
            p2++;
        }
    }
        if(p1==3){
            console.log(41);
            return 1;
            
        }else if(p2==3){
            console.log(42);
            return 2;
        }else{
            p1=0;
            p2=0;
        }
    
    return 0;
}

function check(){
    if(check_horizontale()==1 || check_verticale()==1 || check_diagonale()==1){
        document.querySelector(".modal").style.display='flex';
        document.querySelector(".modal_text").innerHTML=`Player 1: Win!!`;
        win1++;
        document.querySelector(".p1").innerHTML=`Player 1: ${win1}`;
        console.log(board);

    }else if(check_horizontale()==2 || check_verticale()==2 || check_diagonale()==2){
        document.querySelector(".modal").style.display='flex';
        document.querySelector(".modal_text").innerHTML=`Player 2: Win!!`;
        win2++;
        document.querySelector(".p2").innerHTML=`Player 2: ${win1}`;
        console.log(board);
    } 
}
var played=0;
function boxe_check(i,j){
    boxe(i,j);
    played++;
    if(played>=4){
        check();
        
    }
    if(played>=8){
            tie();
    }
    
}

function tryfunction(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            document.getElementById(`(${i})(${j})`).replaceChildren();
            board[i][j]=0;
        }
    }
    played=0;
    document.querySelector(".modal").style.display='none';
}
function tie(){
    let a=0;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]=='X'||board[i][j]=='O'){
                    a++;
                }
            }
        }
        if(a==9){
            document.querySelector(".modal").style.display='flex';
        document.querySelector(".modal_text").innerHTML=`Tie game !!`;
        }
}


