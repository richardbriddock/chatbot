// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

var responseArray = [
{keyword: 'bed', response: 'I don\'t want to go to bed'}, 
{keyword: 'dinner', response: 'I want crackers for dinner'}, 
{keyword: 'bath', response: 'You need a bath'}, 
{keyword: 'time out', response: 'I\'m going to go live with Grandma'}
];
var questionNum = 0;													// keep count of question, used for IF condition.
var question = 'Who are you?';				  // first question

var toddler = document.getElementById('toddler');				// store id="toddler" in toddler variable
toddler.innerHTML = question;

var parent = document.getElementById('chatInput');


// invoke the opening message

function bot() { 
    var input = document.getElementById('chatInput').value;
    console.log(input);
    document.getElementById('chatInput').value = "";

    if (questionNum == 0) {
    toddler.innerHTML = input + ' you are not my real parent';// toddler response
    document.getElementById('parent').innerHTML = input;   		// clear text box
    question = 'Can I have some crackers?';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// toddler next question after 2sec delay
    }

    else if (questionNum != 0) {
            document.getElementById('parent').insertAdjacentHTML('beforeend', '<br /><br />' + input);

var childResponse = 'I want my mommy!';
childResponse = responseArray.forEach(function (obj) {
    if(input.indexOf(obj.keyword) != -1) {
        return obj.response;
console.log(obj.response);

document.getElementById('toddler').insertAdjacentHTML('beforeend', 'toddler') = childResponse;
    }
else {
    document.getElementById('toddler').insertAdjacentHTML('beforeend', '<br /><br />' + childResponse);
    console.log(questionNum);
    console.log(childResponse);

}
})
};

        //if (questionNum == 1) {
    //toddler.innerHTML = '<h2>That means you were born in ' + (2016 - input) + '</h2>';
    //document.getElementById('parent').value = "";   
    //question = '<h1>where are you from?</h1>';					      	
    //setTimeout(timedQuestion, 2000);
    //}   
}

function timedQuestion() {
    toddler.innerHTML = question;
}

//push enter to run bot function.
var runBot = document.getElementById('parent');
document.addEventListener("keydown", function (e) {
 console.log('event', e)
    if (e.keyCode === 13) {
    e.preventDefault();
    bot();																							// run bot function when enter key pressed
    questionNum++;		
    }																// increase questionNum count by 1
  });


