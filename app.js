let game = document.querySelector(".game")
let playerturn = document.querySelector("h1")
let p1tablo = document.querySelector(".tablo1")
let drewtablo = document.querySelector(".tablo2")
let p2tablo = document.querySelector(".tablo3")

p1tablo.innerHTML = "P1"
drewtablo.innerHTML = "Dr"
p2tablo.innerHTML = "P2"

for(i = 0 ; i < 9 ; i++){
    game.innerHTML += "<div class='sqr'></div>"
}

document.querySelector(".reset").onclick = function(){
    for(i=0;i<9;i++){
        sqr[i].innerHTML = ""
        sqr[i].style.backgroundColor = "white"
    }
    win = 0
    count = 0
    playerturn.innerHTML = "Player Turn"
    playerturn.style.color = "black"

    if(x>y){
        p1tablo.style.color = "green"
        p2tablo.style.color = "red"
    }
    else if(x<y){
        p1tablo.style.color = "red"
        p2tablo.style.color = "green"
    }
    else{
        p1tablo.style.color = "black"
        p2tablo.style.color = "black"
    }
}

let sqr = document.getElementsByClassName("sqr")
let x = 0
let win = 0
let y = 0

let winFunctionPlayer = function(el){
        if(sqr[0].innerHTML == el && sqr[1].innerHTML == el && sqr[2].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }
        }
        else if(sqr[0].innerHTML == el && sqr[3].innerHTML == el && sqr[6].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[0].innerHTML == el && sqr[4].innerHTML == el && sqr[8].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[3].innerHTML == el && sqr[4].innerHTML == el && sqr[5].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                k
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[6].innerHTML == el && sqr[7].innerHTML == el && sqr[8].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[1].innerHTML == el && sqr[4].innerHTML == el && sqr[7].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[2].innerHTML == el && sqr[5].innerHTML == el && sqr[8].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }

        }
        else if(sqr[2].innerHTML == el && sqr[4].innerHTML == el && sqr[6].innerHTML == el){
            playerturn.innerHTML = `Player ${el} Wins`
            playerturn.style.color = "green"
            win = 1
            if(el == "X"){
                x += 1
                
            }
            else if(el == "O"){
                y+=1
                
            }
        }
        if(el == "X"){
            p1tablo.innerHTML = x;    
        }
        else if(el == "O"){
            p2tablo.innerHTML = y;
        }

}


let z = 0
let drewFunction = function(){
    if(count==9 && win ==0){
        playerturn.innerHTML = "drew"
        z+=1
    }
    drewtablo.innerHTML = z
}
let count = 0

for(i = 0 ; i < 9 ; i++){
    sqr[i].onclick = function(){
        if(this.innerHTML == "" && win == 0){
            if(count % 2 == 0){
                this.innerHTML = "X"
                this.style.backgroundColor = "#00446C"
                this.style.color = "#89DCF6"
                count++
                playerturn.innerHTML = "Player X turn"
                playerturn.style.color = "#00446C"
            }
            else{
                this.innerHTML = "O"
                this.style.backgroundColor = "#9C0010"
                this.style.color = "#EBABAA"
                count++
                playerturn.innerHTML = "Player O turn"
                playerturn.style.color = "#9C0010"
            }
        }

        winFunctionPlayer("X")
        winFunctionPlayer("O")
        drewFunction()
    }
}

