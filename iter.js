function iter(data,length,title,module){
	let content = document.querySelector('.content-text')

	let pics = document.querySelector('.pics')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	/* счетчики для event-ов */
	let n = 1

	
	content.innerHTML = data["content"][n]
	character.innerHTML = data["character-name"][n-1]
	characterImg.setAttribute('src', data["characters-img"][n-1])
	sideCharacters.setAttribute('src', data["sideCharacters-img"][n-1])

	next.onclick = () => {
		if(n < length) n += 1
		else n = length

		if(data == level22) pics.setAttribute('src', data["pics"][n-1])
		if(data == level31) pics.setAttribute('src', data["pics"][n-1])
		if(data == level32) pics.setAttribute('src', data["pics"][n-1])


		if(data == level11 && n == 31){
			if(localStorage.answerStatus < data['positiveAnswer'].length-3){
				localStorage.answerStatus = 0
				console.log("откат")
				bye_Jojo(data,document.cloneNode(true))

			}
		}else if(data == level21 && n == 11){
			if(localStorage.answerStatus < data['positiveAnswer'].length-2){
				localStorage.answerStatus = 0
				console.log("откат")
				bye_Jojo(data,document.cloneNode(true))
			}
		}
		else if(data == level31 && data["content"][n] == ""){
			characterImg.removeAttribute('src')
			if(localStorage["Чью сторону"] == "Согласиться с Жандосом"){
				isImpossible(data)
			}else{
				isNonImpossible(data)
			}
		}else if(data == level32 && data["content"][n] == ""){
			characterImg.removeAttribute('src')
			if(localStorage["Причина риска"] == "Плохую погода"){
				isDestruction(data)
			}else{
				isNonDestruction(data)
			}
		}else nexter(data,n)
	}
	back.onclick = () => {
		if(n > 1) n -= 1
		else n = 1

		if(data == level22) pics.setAttribute('src', data["pics"][n-1])
		if(data == level31) pics.setAttribute('src', data["pics"][n-1])
		if(data == level32) pics.setAttribute('src', data["pics"][n-1])

		if(data == level11 && n == 31){
			if(localStorage.answerStatus < data['positiveAnswer'].length-3){
				localStorage.answerStatus = 0
				console.log("откат")
				bye_Jojo(data,document.cloneNode(true))

			}
		}else if(data == level21 && n == 11){
			if(localStorage.answerStatus < data['positiveAnswer'].length-2){
				localStorage.answerStatus = 0
				console.log("откат")
				bye_Jojo(data,document.cloneNode(true))
			}
		}
		else if(data == level31 && data["content"][n] == ""){
			characterImg.removeAttribute('src')
			if(localStorage["Чью сторону"] === "Согласиться с Жандосом"){
				isImpossible(data)
			}else{
				isNonImpossible(data)
			}
		}else if(data == level32 && data["content"][n] == ""){
			characterImg.removeAttribute('src')
			if(localStorage["Причина риска"] == "Порчу стенда"){
				isDestruction(data)
			}else{
				isNonDestruction(data)
			}
		}else nexter(data,n)
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
	

}
function bye_Jojo(data,d){
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	let n = 1

	content.innerHTML = data["bye-bye-jojo"][n]
	character.innerHTML = data["badCharacter-name"][n-1]
	characterImg.setAttribute('src', data["badCharacter-img"][n-1])
	
	next.classList.add('next1')
	back.classList.add('back1')
	next.classList.remove('next')
	back.classList.remove('back')
	let next1 = document.querySelector('.next1')
	let back1 = document.querySelector('.back1')
	let length = Object.keys(data["badCharacter-name"]).length
	next1.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		content.innerHTML = data["bye-bye-jojo"][n]
		character.innerHTML = data["badCharacter-name"][n-1]
		characterImg.setAttribute('src', data["badCharacter-img"][n-1])
	}
	back1.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["bye-bye-jojo"][n]
		character.innerHTML = data["badCharacter-name"][n-1]
		characterImg.setAttribute('src', data["badCharacter-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function nexter(data,n){
	let content = document.querySelector('.content-text')
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')
	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	sideCharacters.setAttribute('src', data["sideCharacters-img"][n-1])
	/* вставка контента */
	content.innerHTML = data["content"][n]
	character.innerHTML = data["character-name"][n-1]
	characterImg.setAttribute('src', data["characters-img"][n-1])

	if(data["character-name"][n-1] == "Опрос") checker(data)
	if(data["character-name"][n-1] == "Выбор") {
		if(data == level11 && n == 36){
			dataSaver("Причина риска")
		}
		if(data == level11 && n == 40){
			dataSaver("Чью сторону")
		}
	}

}

function dataSaver(key){
	let inputs = document.querySelectorAll('input')
	
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
   		 
   		alert("Выбрано: " + labels[active.value-1].innerHTML)
   		localStorage.setItem(key, labels[active.value-1].innerHTML)	
   		inputs.forEach(input => input.setAttribute('disabled', "disabled"))
   	})
}
function isImpossible(data){
	let pics = document.querySelector('.pics')


	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	let n = 1

	content.innerHTML = data["impossible-content"][n]
	character.innerHTML = data["impossible-content-name"][n-1]
	characterImg.setAttribute('src', data["impossible-content-img"][n-1])
	
	next.classList.add('next2')
	back.classList.add('back2')
	next.classList.remove('next')
	back.classList.remove('back')
	let next2 = document.querySelector('.next2')
	let back2 = document.querySelector('.back2')
	let length = Object.keys(data["impossible-content-name"]).length
	next2.onclick = () => {

		if(n < length) n += 1
		else n = length
		pics.removeAttribute('src')

		content.innerHTML = data["impossible-content"][n]
		character.innerHTML = data["impossible-content-name"][n-1]
		characterImg.setAttribute('src', data["impossible-content-img"][n-1])
	}
	back2.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["impossible-content"][n]
		character.innerHTML = data["impossible-content-name"][n-1]
		characterImg.setAttribute('src', data["impossible-content-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function isNonImpossible(data){
	let pics = document.querySelector('.pics')
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	let n = 1
	localStorage["Рискованность"] = Number(localStorage["Рискованность"])+1
	content.innerHTML = data["non-impossible-content"][n]
	character.innerHTML = data["non-impossible-content-name"][n-1]
	characterImg.setAttribute('src', data["non-impossible-content-img"][n-1])
	
	next.classList.add('next3')
	back.classList.add('back3')
	next.classList.remove('next')
	back.classList.remove('back')
	let next3 = document.querySelector('.next3')
	let back3 = document.querySelector('.back3')
	let length = Object.keys(data["non-impossible-content-name"]).length
	next3.onclick = () => {

		if(n < length) n += 1
		else n = length
		pics.removeAttribute('src')
		
		

		content.innerHTML = data["non-impossible-content"][n]
		character.innerHTML = data["non-impossible-content-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-img"][n-1])
		
		if(n == length){
			dataSaver("Вариант")

			if(localStorage["Вариант"] == "Жандоса"){
				evgenii(data)
			}
			if(localStorage["Вариант"] == "Жени"){
				endakota(data)
			}
		}		
	}
	back3.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-impossible-content"][n]
		character.innerHTML = data["non-impossible-content-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}

function endakota(data){
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next3')
	let back = document.querySelector('.back3')
	let end = document.querySelector('.end')

	let n = 0

	next.classList.add('next1')
	back.classList.add('back1')
	next.classList.remove('next3')
	back.classList.remove('back3')
	let next1 = document.querySelector('.next1')
	let back1 = document.querySelector('.back1')
	let length = Object.keys(data["non-impossible-content-zhako-name"]).length
	next1.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		content.innerHTML = data["non-impossible-content-zhako"][n]
		character.innerHTML = data["non-impossible-content-zhako-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-zhako-img"][n-1])
	}
	back1.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-impossible-content-zhako"][n]
		character.innerHTML = data["non-impossible-content-zhako-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-zhako-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function evgenii(data){
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next3')
	let back = document.querySelector('.back3')
	let end = document.querySelector('.end')

	let n = 0

	next.classList.add('next1')
	back.classList.add('back1')
	next.classList.remove('next3')
	back.classList.remove('back3')
	let next1 = document.querySelector('.next1')
	let back1 = document.querySelector('.back1')
	let length = Object.keys(data["non-impossible-content-zhenya-name"]).length
	next1.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		content.innerHTML = data["non-impossible-content-zhenya"][n]
		character.innerHTML = data["non-impossible-content-zhenya-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-zhenya-img"][n-1])
	}
	back1.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-impossible-content-zhenya"][n]
		character.innerHTML = data["non-impossible-content-zhenya-name"][n-1]
		characterImg.setAttribute('src', data["non-impossible-content-zhenya-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function isDestruction(data){
	let pics = document.querySelector('.pics')


	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	let n = 1

	content.innerHTML = data["destruction-content"][n]
	character.innerHTML = data["destruction-content-name"][n-1]
	characterImg.setAttribute('src', data["destruction-content-img"][n-1])
	
	next.classList.add('next2')
	back.classList.add('back2')
	next.classList.remove('next')
	back.classList.remove('back')
	let next2 = document.querySelector('.next2')
	let back2 = document.querySelector('.back2')
	let length = Object.keys(data["destruction-content-name"]).length
	next2.onclick = () => {

		if(n < length) n += 1
		else n = length
		pics.removeAttribute('src')

		content.innerHTML = data["destruction-content"][n]
		character.innerHTML = data["destruction-content-name"][n-1]
		characterImg.setAttribute('src', data["destruction-content-img"][n-1])
	}
	back2.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["destruction-content"][n]
		character.innerHTML = data["destruction-content-name"][n-1]
		characterImg.setAttribute('src', data["destruction-content-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function isNonDestruction(data){
	let pics = document.querySelector('.pics')
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')
	localStorage["Рискованность"] = Number(localStorage["Рискованность"])+1
	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	let n = 1

	content.innerHTML = data["non-destruction-content"][n]
	character.innerHTML = data["non-destruction-content-name"][n-1]
	characterImg.setAttribute('src', data["non-destruction-content-img"][n-1])
	
	next.classList.add('next3')
	back.classList.add('back3')
	next.classList.remove('next')
	back.classList.remove('back')
	let next3 = document.querySelector('.next3')
	let back3 = document.querySelector('.back3')
	let length = Object.keys(data["non-destruction-content-name"]).length
	next3.onclick = () => {

		if(n < length) n += 1
		else n = length
		pics.removeAttribute('src')
		
		

		content.innerHTML = data["non-destruction-content"][n]
		character.innerHTML = data["non-destruction-content-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-img"][n-1])
		
		if(n == length){
			dataSaver("Вариант2")

			if(localStorage["Вариант2"] == "Попросить участника расставить экспонаты на полу"){
				firstOpt(data)
			}
			if(localStorage["Вариант2"] == "Попросить участников потесниться"){
				secondOpt(data)
			}
		}		
	}
	back3.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-destruction-content"][n]
		character.innerHTML = data["non-destruction-content-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-img"][n-1])

		if(n == length){
			dataSaver("Вариант2")

			if(localStorage["Вариант2"] == "Попросить участника расставить экспонаты на полу"){
				firstOpt(data)
			}
			if(localStorage["Вариант2"] == "Попросить участников потесниться"){
				secondOpt(data)
			}
		}
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function firstOpt(data){
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next3')
	let back = document.querySelector('.back3')
	let end = document.querySelector('.end')

	let n = 0

	next.classList.add('next1')
	back.classList.add('back1')
	next.classList.remove('next3')
	back.classList.remove('back3')
	let next1 = document.querySelector('.next1')
	let back1 = document.querySelector('.back1')
	let length = Object.keys(data["non-destruction-content-first-name"]).length
	next1.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		content.innerHTML = data["non-destruction-content-first"][n]
		character.innerHTML = data["non-destruction-content-first-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-first-img"][n-1])
	}
	back1.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-destruction-content-first"][n]
		character.innerHTML = data["non-destruction-content-first-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-first-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}
function secondOpt(data){
	let content = document.querySelector('.content-text')

	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	let sideCharacters = document.querySelector('.side')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	/* кнопки */
	let next = document.querySelector('.next3')
	let back = document.querySelector('.back3')
	let end = document.querySelector('.end')

	let n = 0

	next.classList.add('next1')
	back.classList.add('back1')
	next.classList.remove('next3')
	back.classList.remove('back3')
	let next1 = document.querySelector('.next1')
	let back1 = document.querySelector('.back1')
	let length = Object.keys(data["non-destruction-content-second-name"]).length
	next1.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		content.innerHTML = data["non-destruction-content-second"][n]
		character.innerHTML = data["non-destruction-content-second-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-second-img"][n-1])
	}
	back1.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		content.innerHTML = data["non-destruction-content-second"][n]
		character.innerHTML = data["non-destruction-content-second-name"][n-1]
		characterImg.setAttribute('src', data["non-destruction-content-second-img"][n-1])
	}
	end.onclick = () => {
		if(localStorage["tappedMenu"] == 1){
			window.location.replace('../menu.html')	
		}
		else window.location.replace('levels.html')
		localStorage.answerStatus = 0
	}
}