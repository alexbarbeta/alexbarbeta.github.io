function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var userAge = prompt('how old are you?');
	userAge = parseInt(userAge);

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log ('Geeetings, General');
	}


	if (userAge >= 18) {
		console.log('user is an adult');

	} else if (userAge>=13) {
		console.log('user is teenager');
	} else {
		console.log('go away child');
	}

	$('h2').text('hello ' + fullName);


	var faveColour = prompt('what is your favourite colour?');

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color',faveColour);
	}

}




//when the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	//when the user clicks an h3
	$('h3').on('click', function() {

		// When the user clicks the next element (miliseconds)
		$(this).next().slideToggle();

	});

});
