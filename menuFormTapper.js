function menuFormTapper(){
	let form = document.querySelector('.outer')
	form.addEventListener('submit', (event) => {
		var data = new FormData(form);
		var output = "";
	    for (const entry of data) {
		  output = entry[1] + "\r";
		};
		
		event.preventDefault();
		window.location.replace(tapLevel(output))

		function tapLevel(level){
			let path = ''
			if(level == 1){
				path = './chapter1/preview.html';
				
				localStorage.answerStatus = 0
				localStorage.setItem("tappedMenu", 1);
			}
			else if(level == 2){
				path = './chapter2/levels.html'

				localStorage.answerStatus = 0
				localStorage.setItem("tappedMenu", 2);
			}
			else if(level == 3){
				path = './chapter3/levels.html'
				localStorage["Рискованность"] = 0
				localStorage.answerStatus = 0
				localStorage.setItem("tappedMenu", 3);
			}else if(level == 4){
				path = './chapter4/levels.html'
				localStorage.answerStatus = 0
				localStorage.setItem("tappedMenu", 4);
			}
			return path
		}	
	})
}