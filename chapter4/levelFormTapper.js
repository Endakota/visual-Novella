function levelFormTapper(){
	let form = document.querySelector('.outer')
	form.addEventListener('submit', (event) => {
		var datas = new FormData(form);
		var output = "";
	    for (const entry of datas) {
		  output = entry[1] + "\r";
		};
		
		event.preventDefault();

		localStorage.answerStatus = 0
		localStorage.setItem("tappedLevel", output);
		window.location.replace("preview.html")
	})
}
