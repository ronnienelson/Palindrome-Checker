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

const form= document.querySelector('form')
const result=document.querySelector('h3')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const user= form.elements.pc.value
  if(palindrome(user)==true){
    console.log('yes')
    result.innerText=`${user} is a palindrome!`
  }
  else{
    console.log('no')
      result.innerText=`${user} is not a palindrome!`
  }
})
