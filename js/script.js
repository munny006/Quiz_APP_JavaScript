 const MyButton = document.querySelector(".MyButton button");
 const RulesBox = document.querySelector(".RulesBox");



MyButton.onclick = () => {
	RulesBox.classList.add("activeInfo");
}