const inputBox = document.getElementById("input-box");
const exBox = document.getElementById("expiration-box");
const listContainer = document.getElementById("list-container");

function addTask(){
	if(inputBox.value == '' && exBox.value == ''){
		alert("You must write something!");
	}else if(inputBox.value == ''){
		alert("Item Name is Missing!");
	}else if(exBox.value == ''){
		alert("Expiration Date is Missing!");
	}
	else{
	let li = document.createElement("li");
    li.innerHTML = inputBox.value + " (Expiration Date: " + exBox.value + ")";
    listContainer.appendChild(li); 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
	}
	inputBox.value = "";
	exBox.value = "";

	saveData();
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();