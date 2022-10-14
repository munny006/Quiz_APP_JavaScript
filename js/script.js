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
	showQuestions(0);
}

let que_count = 0;

const nextBtn = document.querySelector(".nextBtn");
nextBtn.onclick = () => {
	if(que_count < questions.length - 1){
		que_count ++ ;
		showQuestions(que_count)
	}
	else{
		console.log("You Have Completd Your Task") ;
	}
}


function showQuestions(index){
	const Quetext = document.querySelector('.text');
	const Option_list = document.querySelector(".MyOption");
	let option_tag = '<div class="options">'+ questions[index].option[0]  +'</div>'
					+ '<div class="options">'+ questions[index].option[1]  +'</div>'
					+ '<div class="options">'+ questions[index].option[2]  +'</div>'
					+ '<div class="options">'+ questions[index].option[3]  +'</div>'
	let que_tag = "<span>" + questions[index].numb+ '.'+ questions[index].question + "</span>";
	Quetext.innerHTML = que_tag;
	Option_list.innerHTML = option_tag;
	const total_que = document.querySelector('.total_que');
	let total_quetag = '<p>' + questions[index].numb +  ' of 5 </p>'
	total_que.innerHTML = total_quetag;
}