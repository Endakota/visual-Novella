function checker(data){
	let inputs = document.querySelectorAll('input')
	let answers = data["positiveAnswer"]
	
    let answerStatus = localStorage.answerStatus
    let q = Number(answerStatus)
	
    inputs.forEach(input => {
    	input.addEventListener('mousedown', () => {
    		inputs.forEach(elem => elem.classList.remove('active'))
    		input.classList.add('active')
    		inputs.forEach(elem => elem.classList)
    	})
    })
    
   	let submit = document.querySelector('.submit')
   	submit.addEventListener('click', () => {
   		let active = document.querySelector('.active')
   		let labels = document.querySelectorAll('label')
   		if(answers.includes(labels[active.value-1].innerHTML)) {
   			localStorage.answerStatus = Number(localStorage.answerStatus) + 1
   			labels[active.value-1].innerHTML += " &#9989;"
   		}
   		else{
   			localStorage.answerStatus = Number(localStorage.answerStatus) - 1
   			labels[active.value-1].innerHTML += " &#10060;"		
   		}  
   		inputs.forEach(input => input.setAttribute('disabled', "disabled"))
      submit.setAttribute('disabled','disabled')
   	})
}