 const MyButton = document.querySelector(".MyButton button");
 const RulesBox = document.querySelector(".RulesBox");
 const exit = document.querySelector(".buttons .exit");
 const ContinueButton = document.querySelector(".buttons .ContinueButton");
 const Questions = document.querySelector(".Questions");

MyButton.onclick = () => {
	RulesBox.classList.add("activeInfo");
}

exit.onclick = () =>{
	RulesBox.classList.remove("activeInfo");
}

ContinueButton.onclick = () => {
	RulesBox.classList.remove("activeInfo");
	Questions.classList.add("activeQuiz");
}