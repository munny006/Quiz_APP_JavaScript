 const MyButton = document.querySelector(".MyButton button");
 const RulesBox = document.querySelector(".RulesBox");
 const exit = document.querySelector(".buttons .exit");
 const ContinueButton = document.querySelector(".buttons .ContinueButton");
 const Questions = document.querySelector(".Questions");
 const Option_list = document.querySelector(".MyOption");

 const timeCount = document.querySelector(".TimeCount .Sec");

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
	startTimer(12);
}

let que_count = 0;
let counter;

let timeValue  = 12;
let userscore  = 0;


const nextBtn = document.querySelector(".nextBtn");

const Result_box = document.querySelector(".result_box");

const quickButton = document.querySelector(".btm .quick");


quickButton.onclick = () =>{
	window.location.reload();
}

nextBtn.onclick = () => {
	if(que_count < questions.length - 1){
		que_count ++ ;
		showQuestions(que_count);
		clearInterval(counter);
		startTimer(timeValue);
		nextBtn.style.display = "none";
	}
	else{
		console.log("You Have Completd Your Task") ;
		showResult();
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


	const option = Option_list.querySelectorAll(".options");
	for(let i = 0; i< option.length; i++){
		option[i].setAttribute("onclick","optionSelected(this)");
	}
}
let tickIcon = '<div class="tick icon"><i class="fa fa-check"></i></div>';
let crossIcon = '<div class="cross"><i class="fa fa-times"></i></div>';

function optionSelected(anser){
	clearInterval(counter);
	let userAns = anser.textContent;
	let correctAns = questions[que_count].anser;
	
	
	if(userAns == correctAns){
		userscore +=1;
		console.log(userscore);
		anser.classList.add('correct');
		console.log("Answer Is Correct");
		anser.insertAdjacentHTML("beforeend",tickIcon);

	}
	else {

		anser.classList.add('Incorrect');
		console.log("Answer is wrong");
		anser.insertAdjacentHTML("beforeend",crossIcon);
		
	}

nextBtn.style.display = "block";



}

function showResult(){
	RulesBox.classList.remove("activeInfo");
	Questions.classList.remove("activeQuiz");
    Result_box.classList.add("activeResult");
	const ScoreText = document.querySelector(".score");
	if(userscore > 3){
		let scoreTag = '<span">Congratulations!You Got <p>' + userscore +'</p> Out OF <p>'+ questions.length+'</p></span>';
		ScoreText.innerHTML = scoreTag;
	}
	else if(userscore > 1){
		let scoreTag ='<span>Carry on You Got<p>'+ userscore +'</p> Out OF<p>'+ questions.length +'</p></span>';
		ScoreText.innerHTML = scoreTag;
	}
	else{
		let scoreTag = '<span>I am Sorry You Got <p> '+ userscore +'</p> Out OF<p>'+ questions.length +'</p></span>';
		ScoreText.innerHTML =scoreTag;
	}
} 

function startTimer(time){
	counter = setInterval(timer, 1000);
function timer(){
	timeCount.textContent = time;
	time --;
	if(time < 9){
		let addZero = timeCount.textContent;
		timeCount.textContent = 0 +addZero ;
	}
	if(time < 0 ){
		clearInterval(counter);
		timeCount.textContent = "00";
	}
}
}