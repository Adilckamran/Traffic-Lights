var red =document.getElementById('red')
var yellow =document.getElementById('yellow')
var green =document.getElementById('green')



setInterval(redlight , 3000)
function redlight(){
    red.style.backgroundColor ='red'
    yellow.style.backgroundColor =''
    green.style.backgroundColor =''
    
}
setInterval(orangelight , 6000)
function orangelight(){
    red.style.backgroundColor =''
    yellow.style.backgroundColor ='yellow'
    green.style.backgroundColor =''
}
setInterval(greenlight , 9000)
function greenlight(){
    red.style.backgroundColor =''
    yellow.style.backgroundColor =''
    green.style.backgroundColor ='green'
}