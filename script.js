document.querySelector("input").onkeydown=function(){
	let ul=document.querySelector("ul")
	let input=document.querySelector("input")
	if (event.keyCode==13) {
		let li=document.createElement("li")
		let img = document.createElement('img')
		img.src='recycleBin.jpg'
		li.innerHTML=input.value
		li.appendChild(img)
		ul.appendChild(li)
		input.value=""

	}
}
document.querySelector("ul").onclick=function () {
	if (event.target.nodeName=='LI') {
	 event.target.classList.toggle('finish1')
	}
	if (event.target.nodeName=='IMG') {
		event.target.parentElement.remove()
	}
}
document.querySelector(".clear").onclick=function(){
	document.querySelector("ul").innerHTML=""
	
}
document.querySelector(".finish").onclick=function(){
	let massiv=document.querySelectorAll("li")
	for (var i = 0; i < massiv.length; i++) {
		massiv[i].classList="finish1"
	}
}



