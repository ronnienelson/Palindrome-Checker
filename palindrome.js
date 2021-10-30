// need to add difficulty functionality so that each time a player answers a question they have to input a palindrome that has one more character than the last one they entered. also need to add function that pushes correct answers into an array of unusable answers


function palindrome(str) {
str = str.replace(/[^0-9a-z]/gi, '');
  let a=str.split('').join().toLowerCase()

let b=str.split('').reverse().join().toLowerCase()


console.log(a,b)
  if(a===b){
  return true;
  }
  else if(a!==b){
    return false
  }
}





const form= document.querySelector('#form1')
const form2= document.querySelector('#form2')
const result=document.querySelector('#p1')
const result2=document.querySelector('#p2')
const but=document.querySelector('#but')
const but2=document.querySelector('#but2')
const winner=document.querySelector('#winner')
const reset=document.querySelector('#reset')



const game = ()=>{
  but2.disabled=true
  let p1score=0;
  let p2score=0;
  let p1Scoreboard=document.querySelector('#p1s')
  let p2Scoreboard=document.querySelector('#p2s')
  
  
  const win=()=>{
    if(p1score>=5){
    winner.innerText='PLAYER 1 WINS!'
    but.disabled=true
    but2.disabled=true
        p1Scoreboard.style.color='green'
      p2Scoreboard.style.color='red'
      reset.hidden=false
  }
  else if(p2score>=5){
    winner.innerText='PLAYER 2 WINS!'
    but.disabled=true
    but2.disabled=true
    p1Scoreboard.style.color='red'
      p2Scoreboard.style.color='green'
    reset.hidden=false
  }
}

  
  const res=()=>{
    p1score=0
    p2score=0
    but2.disabled=true
    but.disabled=false
    form.elements.pc.value=''
    form2.elements.pc2.value=''
    p1Scoreboard.innerText=`${p1score}`
    p2Scoreboard.innerText=`${p2score}`
     result.innerText=''
     result2.innerText=''
    reset.hidden=true
    winner.innerText=''
     p1Scoreboard.style.color='black'
      p2Scoreboard.style.color='black'
  } 
  
  reset.addEventListener('click',(e)=>{
    e.preventDefault()
    res()
  })
  
  
//player 1
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const user= form.elements.pc.value
  if(palindrome(user)==true){
    console.log('yes')
    form.elements.pc.value=''
    result.innerText=`${user} is a palindrome!`
    but.disabled=true
    but2.disabled=false
    p1score++
    p1Scoreboard.innerText=`${p1score}`
    win()
  }
  else{
    console.log('no')
    form.elements.pc.value=''
      result.innerText=`${user} is not a palindrome!`
       but.disabled=true
    but2.disabled=false
    win()
  }
})


//player 2

form2.addEventListener('submit',(e)=>{
  e.preventDefault()
  const user= form2.elements.pc2.value
  if(palindrome(user)==true){
    console.log('yes')
    form2.elements.pc2.value=''
    result2.innerText=`${user} is a palindrome!`
     but2.disabled=true
    but.disabled=false
    p2score++
    p2Scoreboard.innerText=`${p2score}`
    win()
  }
  else{
    console.log('no')
    form2.elements.pc2.value=''
      result2.innerText=`${user} is not a palindrome!`
      but2.disabled=true
    but.disabled=false
    win()
  }
  
})
}
game()
