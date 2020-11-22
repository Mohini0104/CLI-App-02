//============Variables=====================
var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score=0;
var name = readlineSync.question("Enter your name: ")
console.log("Hey! "+ (chalk.red(name))+ ", Welcome to F.R.I.E.N.D.S. Trivia Quiz !! ")

console.log((chalk.bgCyan.black.bold("Drumm Rolllsss....!!") )+"Get Ready for the first Question")

//=====================Arrays======================
var questions = [{
  question:"Which character has a twin? \n * Rachel\n * Ross \n * Phoebe \n * Chandler \n",
 
  answer:"phoebe"
},
{
question:"Who sang the 'Friends' theme song? \n* The Rembrandts \n* The Academy \n* Metallica \n* One Direction \n",
  answer:"the Rembrandts"
},
{question:"What’s the name of Phoebe’s most popular song? \n* Smelly Cat\n* Scary Cat \n* Smelly Donkey \n* Scared Dog \n",
  answer:"smelly Cat"
},
{question:"Where did Rachel, Monica and Ross go to high school?\n* Washington High \n* Lincoln High \n",
 answer:"lincoln high"
},
{question:"What did Joey buy Chandler as a token of their friendship? Chandler hates it.\n* Bracelet \n* Ring \n* Cap \n* T-Shirt \n",
  answer:"bracelet"
}]
 
var scoreBoard=[{
  name:"Mohini Mahato",
  score: "10"
},
{
  name:"Pompi Mahato",
  score:"9"
}]
//=================FUNCTIONS==================

function friendsQuiz(question,answer){
  console.log("         ")
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase()===answer.toUpperCase()){  
   console.log(userAnswer);
    console.log(chalk.green("You got it right: +2 points"))
    score= score+2
  }
  else{
      console.log(chalk.yellow(userAnswer))
    console.log(chalk.red("mmh,hmm Wrong Answer :-1 point"))
    score=score-1
  }
  console.log("-------------------")
console.log("You secured " + (chalk.bgCyan.black.bold(score)) +" points");

  
}

 
function highScore(name,score){

console.log(currentScore.name,currentScore.score)

}



//=================LOOPS===================
for (var i =0;i<questions.length;i++){
  currentQuestion = questions[i]
 
  friendsQuiz(currentQuestion.question,currentQuestion.answer)
}
console.log("         ")
console.log("============================");
console.log("Highest Scorer");
for(var j=0;j<scoreBoard.length;j++){
  currentScore = scoreBoard[j]
  console.log(currentScore)
}
console.log("         ")
console.log(chalk.yellow("If you have beaten the top 2 score send me the screenshot of it , \nto have your name in the leader board"))
console.log("         ")
console.log("No, one told you life is gonna be this way")
