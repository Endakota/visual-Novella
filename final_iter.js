function final_iter(data){
	let dataContent
	let dataContentImg
	let dataContentName
	
	if(data == level41){
		if(localStorage["Причина риска"] == "Порчу стенда"){
			if(localStorage["Вариант2"] == "Попросить участников потесниться"){
				dataContent = "stando-content"
				dataContentImg = "stando-content-img"
				dataContentName = "stando-content-name"
				localStorage["Рискованность"] = Number(localStorage["Рискованность"])-1
			}
			else{
				console.log(213)
			}
			
		}else{
			if(localStorage["Вариант2"] == "Попросить участника расставить экспонаты на полу "){
				dataContent = "badWeather-content"
				dataContentImg = "badWeather-content-img"
				dataContentName = "badWeather-content-name"
				localStorage["Рискованность"] = Number(localStorage["Рискованность"])+1
			}
			else{
				console.log(213)
			}
		}
	}
	else if(data == level42){
		if(localStorage["Чью сторону"] == "Не соглашаться с Жандосом"){
			dataContent = "impossible-content"
			dataContentImg = "impossible-img"
			dataContentName = "impossible-name"
		}
		else{
			if(localStorage["Вариант"] == "Жени"){
				localStorage["Рискованность"] = Number(localStorage["Рискованность"])+1
				dataContent = "non-impossible-zhenya-content"
				dataContentImg = "non-impossible-zhenya-img"
				dataContentName = "non-impossible-zhenya-name"
			}else{
				dataContent = "non-impossible-zhako-content"
				dataContentImg = "non-impossible-zhako-img"
				dataContentName = "non-impossible-zhako-name"
			}
		}
	}else if(data == level43){
		if(localStorage["Рискованность"] == 0){
			dataContent = "good-ending"
			dataContentImg = "good-ending-img"
			dataContentName = "good-ending-name"
		}
		else{
			dataContent = "bad-ending"
			dataContentImg = "bad-ending-img"
			dataContentName = "bad-ending-name"
		}
	}
	
	
	let length = Object.keys(data[dataContent]).length
	/* кнопки */
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')

	/* счетчики для event-ов */
	let n = 1
	nexter(data,n,dataContent,dataContentImg,dataContentName)
	
	next.onclick = () => {
		if(n < length) n += 1
		else n = length
			
		nexter(data,n,dataContent,dataContentImg,dataContentName)
	}
	back.onclick = () => {
		if(n > 1) n -= 1
		else n = 1	

		nexter(data,n,dataContent,dataContentImg,dataContentName)
	}
	end.onclick = () => {
		window.location.replace('levels.html')
		if(n==length && data == level43){
			if(confirm("Поздравляем, вы прошли игру")){
				window.location.replace('levels.html')	
			}else{
				window.location.replace('levels.html')
			}
			
		}else if(data == level41){
			window.location.replace('levels.html')
		}

	}
}
function nexter(data,n,dataContent,dataContentImg,dataContentName){
	let content = document.querySelector('.content-text')
	let next = document.querySelector('.next')
	let back = document.querySelector('.back')
	let end = document.querySelector('.end')
	/* Фотки персонажей */
	let characterImg = document.querySelector('.characterImg')
	
	/* Имена персонаэей */
	let character = document.querySelector('.character')

	
	/* вставка контента */
	content.innerHTML = data[dataContent][n]
	character.innerHTML = data[dataContentName][n-1]
	characterImg.setAttribute('src', data[dataContentImg][n-1])
}