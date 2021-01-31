// gather all pieces that affect timer/counter
const counter = document.getElementById("counter")
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const button = document.querySelectorAll('button')[3]
const likes = document.getElementsByClassName("likes")[0]

//"listen" for events of + - and heart

minus.addEventListener('click', handleMinus, true)
plus.addEventListener('click', handlePlus, true)
heart.addEventListener('click', handleHeart, true)

//increase or decrease counter depending on event

function handleMinus(e) {counter.innerHTML -- }
function handlePlus(e) {counter.innerHTML ++ }


function handleHeart(e){
    let second = counter.innerHTML
    let likeList = document.getElementById(`${second}`)
   
    if (likeList === null){
        likeList = document.createElement('li')
        likes.appendChild(likeList)
        likeList.id = `${second}`
        num = 1
        likeList.innerHTML = `${second} has been liked <span> ${num} </span> time`
        let clickCount = document.querySelector('span').innerHTML
    }
    else {
        likeList.innerHTML = `${second} has been liked <span> ${num++} </span> times`
    }   
}  

timeCounter = function handleTimer() {
    timer = setInterval(setTime, 1000) 
    function setTime() {
        ++counter.innerHTML;
    }
}

timeCounter()

//add listener to click on buttons

button.addEventListener('click', event => {
    if(event.target.id === 'pause'){
    //change button to resume
    //pause timer
    clearInterval(timer)
    minus.removeEventListener('click', handleMinus, true)
    plus.removeEventListener('click', handlePlus, true)
    heart.removeEventListener('click', handleHeart, true)
    button.id =  'resume'
    button.innerHTML =  'resume'
    }
    else if(event.target.id === 'resume'){
    //resume timer
    //change text to 'pause'
    timeCounter()
    minus.addEventListener('click', handleMinus, true)
    plus.addEventListener('click', handlePlus, true)
    heart.addEventListener('click', handleHeart, true)
    button.id =  'pause'
    button.innerHTML =  'pause'
    }
})

 
const commentBox = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentBox.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const newComment = document.getElementById("comment-input").value;
 commentList.innerHTML += `<p>${newComment}</p>`
 event.target.reset()
}