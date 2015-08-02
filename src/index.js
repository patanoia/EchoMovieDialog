// Alexa SDK for JavaScript v1.0.00
// Copyright (c) 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved. Use is subject to license terms.

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Movie Dialog"
 *  Alexa: "You had me at hello"
 */

/**
 * App ID for the skill
 */
var APP_ID = "replace";

/**
 * Array containing general movie quotes
 */
var MOVIE_QUOTES = [
    "You did it. You crazy son of a pitch, you did it.",
    "Frankly, my dear, I don\'t give a damn.",
	"Rosebud",
	"We\'ll always have Paris.",
	"I'm no good at being noble, but it doesn\'t take much to see that the problems of three little people don't amount to a hill of beans in this crazy world. Someday you\'ll understand that.",
    "Take your stinkin' paws off me, you damn dirty ape!",
    "You're out of order! You're out of order! The whole trial is out of order!",
    "What is your major malfunction, numbnuts? Didn't mommy and daddy show you enough attention when you were a child?",
    "No, not the bees! NOT THE BEES! Argh! They're in my eyes! my eyes! Argh!",
    "Badges? We don't need no stinkin' badges!",
	"Your mother was a hamster and your father smelt of elderberries.",
	"I have come here to chew bubblegum and kick ass. And I'm all out of bubblegum.",
	"To call you stupid would be an insult to stupid people! I've known sheep that could outwit you. I've worn dresses with higher IQs.",
	"I see you're drinking one per cent. Is that coz you think you're fat? Coz you're not. You could be drinking whole if you wanted to.",
	"How do you like them apples?",
	"I drink your milkshake!",
	"I see dead people.",
	"You know what they call a Quarter Pounder with Cheese in Paris?",
	"Check out the big brain on Brett.",
	"Zed's dead, baby. Zed's dead.",
	"Nobody's gonna hurt anybody. We're all gonna be three little Fonzies here, and what's Fonzie like?",
	"I ate his liver with some fava beans and a nice chianti.",
	"I wish I knew how to quit you.",
	"In Switzerland they had brotherly love and five hundred years of democracy and peace, and what did that produce? The cuckoo clock.",
	"It was beauty killed the beast.",
	"Nobody puts Baby in a corner.",
	"That's the way it crumbles, cookie-wise.",
	"The sportos, the motorheads, geeks, sluts, bloods, wasteoids, dweebies, dickheads, they all adore him. They think he's a righteous dude.",
	"You go; Glenn Coco!",
	"What we've got here is failure to communicate.",
	"Those aren't pillows!",
	"Yeah, you're right, I talk too much. I also listen too much. I could be a cold hearted cynic like you. But I don't like to hurt people's feelings.",
	"The only things I care about in this cod dam life are me and my drums and you.",
	"I had a dream. In fact it was on the night I met you. In the dream, there was our world and the world was dark because there weren't any robins and the robins represented love.",
	"Someday a real rain will come and wash all this scum off the streets.",
	"You can leave in a taxi. If you can't get a taxi you can leave in a huff. If that's too soon you can leave in a minute and a huff.",
	"I could dance with you until the cows come home. On second thought, I'd rather dance with the cows till you come home.",
	"Love means never having to say you're sorry.",
	"You keep using that word. I do not think it means what you think it means.",
	"Say auf wiedersehen to your Nazi balls.",
	"My, she was yar.",
	"I'd like to say a prayer and drink to world peace.",
	"I don't want to be worshipped. I want to be loved.",
	"Yeah, I was in the show. I was in the show for twenty one days once - the twenty one greatest days of my life.",
	"He's behind me, isn't he?",
	"I crap bigger than you!",
	"I'll have what she's having.",
	"What I'm saying is - and this is not a come-on in any way, shape or form - is that men and women can't be friends because the sex part always gets in the way.",
	"I love the smell of napalm in the morning.",
	"You're an errand boy, sent by grocery clerks, to collect a bill.",
	"Help me. Help me be human.",
	"You could've been one of the great ones Buddy. I looked at you and saw myself.  Why?",
	"Never will there be an Alexander like you, Alexander the Great.",
	"You deliberately disobeyed me!",
	"OK, here's an idea. Let's run it up the flagpole and see if anyone salutes it.",
	"Hey, let's play a game. It's called, See Who Can Be Quiet the Longest.",
    "You've got to ask yourself one question: Do I feel lucky? Well, do ya, punk?",
	"And stay out of the Woolsworth!",
	"D'you know that the human head weighs eight pounds?",
	"Stop trying to make fetch happen! It's not going to happen!",
	"I love my dead gay son.",
	"That rug really tied the room together.",
	"Yeah, well, you know, that's just, like, your opinion, man.",
	"It's such a fine line between stupid and clever.",
	"Well, you have a sweet bike. And you're really good at hooking up with chicks. Plus, you're like the only guy at school who has a mustache.",
	"There's a lot to be said for making people laugh. Did you know that that's all some people have? It isn't much, but it's better than nothing in this cockeyed caravan.",
	"What we found out is that each one of us is a brain, and an athlete, and a basket case, a princess, and a criminal. Does that answer your question?",
	"I have nipples, Greg. Can you milk me?",
	"Oh, hah, I'm sorry, I keep forgetting. You were sick the day they taught law at law school.",
	"Tell me something, my friend. You ever dance with the devil in the pale moonlight?",
	"You know, Billy, we blew it.",
	"I'm walking here! I'm walking here!",
	"Is it safe?",
	"Aw, ma, I love him awful.",
	"Of course it's dark, it's a suicide note.",
	"I saved Latin. What did you ever do?",
	"Make a move and the bunny gets it.",
	"This is so bad it's gone past good and back to bad again.",
	"Edwina's insides were a rocky place where my seed could find no purchase.",
	"Well no; unless round is funny.",
	"Some people never go crazy. What truly horrible lives they must lead.",
	"I don't believe this! I've got a trig midterm tomorrow, and I'm being chased by Guido the killer pimp.",
	"How did we end up here? This place is horrible. Smells like balls. We don't belong here.",
	"This is how they find us, by our teeth.",
	"Negative. I am a meat popsicle.",
	"Well Stu, I'll tell you, surfing's not a sport, it's a way of life, it's no hobby. It's a way of looking at that wave and saying, Hey bud, lets party!",
	"Can you keep a secret? I'm trying to organize a prison break. I'm looking for, like, an accomplice. We have to first get out of this bar, then the hotel, then the city, and then the country. Are you in or you out?",
	"I've selected you to lead us, not only because of your extraordinary fighting ability, but also because, in the unlikely event the Germans ever get you, they will assume from your attire that they've captured a wretched peasant and immediately send you on your way.",
	"What I do have are a very particular set of skills, skills I have acquired over a very long career. Skills that make me a nightmare for people like you. "
];

/**
 * Array containing quotes to start the dialog
 */
var HELLO_QUOTES = [
    "You had me at hello.",
    "Say hello to my little friend.",
	"Welcome to the party, pal.",
	"Louie, I think this is the beginning of a beautiful friendship.",
    "Hello everybody. This is Mrs. Norman Maine.",
    "Hello? Hello? Anybody home? Hey! Think, McFly. Think!",
    "You talkin' to me? You talkin' to me? You talkin' to me? Then who the hell else are you talking; you talking to me? Well I'm the only one here.",
	"Hello Danny. Come and play with us. Come and play with us, Danny. Forever. And ever. And ever.",
	"Did you warble, my little wren?"
];

/**
 * Array containing quotes to answer "Who are you" questions
 */
var WHO_QUOTES = [
	"I'm also just a girl standing in front of a boy asking him to love her.",
	"I'll tell you what I am, I'm the damn patter familias!",
	"I'm the Wienie King! Invented the Texas wienie! Lay off 'em, you'll live longer.",
	"Ned. Ryerson. Needlenose Ned? Ned the Head? Come on buddy.",
	"I'm an excellent driver.",
	"P. Sherman, Forty Two Wallaby Way, Sydney.",
	"My name is Gladiator.",
	"Hello! My name is Inigo Montoya! You killed my father! Prepare to die! ",
	"I'm Batman.",
	"I'm the only one who can walk in both worlds. I'm the Ghost Rider.",
	"We're the Flying Elvises. Utah chapter.",
	"Name's Smalls. Leonard Smalls. My friends call me Lenny. Only I ain't got no friends.",
	"I am Jack's wasted life.",
	"I'm Spartacus!"
];

/**
 * Array containing quotes to answer "How are you" questions
 */
var HOW_QUOTES = [
	"I'm as mad as hell, and I'm not gonna take this anymore!",
	"I'm ready for my close-up.",
    "I'm very drunk and I intend on getting still drunker before this evening's over.",
    "Fasten your seat belts. It's going to be a bumpy night.",
	"Enough is enough! I have had it with these motherfucking snakes on this motherfucking plane!",
	"You got me hotter than Georgia asphalt!",
	"I would sell my grandmother for a drink, and you know how I love my grandmother."
];

/**
 * Array containing quotes to answer "Advice" questions
 */
var ADVICE_QUOTES = [
    "You're gonna need a bigger boat!",
	"If that plane leaves the ground and you're not with him, you'll regret it. Maybe not today. Maybe not tomorrow. But soon and for the rest of your life.",
    "No wire hangers! No wire hangers EVER!",
    "Fat drunk and stupid is no way to go through life, son.",
	"Get busy living, or get busy dying.",
	"Every man dies, not every man really lives.",
	"What we do in life echoes in eternity.",
	"Let me remind you of General Yamashita's motto: be happy in your work.",
	"Pay no attention to that man behind the curtain.",
	"Two and two is four and five will get you ten if you know how to work it.",
	"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
	"Keep your friends close but your enemies closer.",
	"You are not a beautiful or unique snowflake. You're the same decaying organic matter as everything else.",
	"Take dead aim on the rich boys. Get them in the crosshairs and take them down. Just remember, they can buy anything but they can't buy backbone.",
	"The things you own end up owning you.",
	"Man who catch fly with chopstick accomplish anything."
];

/**
 * Array containing quotes to answer "What's wrong" questions
 */
var WRONG_QUOTES = [
	"You come into my house on the day my daughter is to be married and you ask me to do murder - for money.",
 	"You're a very nosy fellow kitty cat. Huh? You know what happens to nosy fellows? Huh? No? Wanna guess? Huh? No? Okay. They lose their noses.",
	"You're only supposed to blow the bloody doors off!",
	"I haven't lost my temper in forty years, but Pilgrim you caused a lot of trouble this morning. Might have got somebody killed, and somebody oughta belt you in the mouth. But I won't. I won't. The hell I won't!",
	"What is your damage, Heather?",
	"Yes, I killed him. I killed him for money - and a woman - and I didn't get the money and I didn't get the woman. Pretty, isn't it?",
	"Smokey, my friend, you are entering a world of pain.",
	"I eat breakfast three hundred yards from four thousand Cubans who are trained to kill me, so don't think for one second that you can come down here, flash a badge, and make me nervous.",
	"Can somebody tell me what kind of a world we live in where a man dressed up as a bat gets all of my press? This town needs an enema!",
	"I lost my hand! I lost my bride! Johnny has his hand! Johnny has his bride! You want me to take my heartache, put it away and forget?",
	"You know what your problem is, Princess? You're too used to getting your own way."
];

/**
 * Array containing quotes to answer "Help" questions
 */
var HELP_QUOTES = [
	"You know how to whistle, don't you Steve? You just put your lips together and, blow.",
 	"Help. Police, Murder."
];

/**
 * Array containing quotes to finish the dialog
 */
var GOODBYE_QUOTES = [
    "Goodbye Mister Chips. Goodbye.",
    "Here at last, on the shores of the sea, comes the end of our fellowship.",
 	"Here's looking at you kid.",
    "I will never let go Jack. I'll never let go.",
    "Why don't you come up some time and see me?",
    "I'll be back.",
	"Shane! Shane! Come back! Bye, Shane.",
    "In case I don't see you, good afternoon, good evening, and good night!",
    "Stay golden, Ponyboy."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * MovieDialog is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var MovieDialog = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MovieDialog.prototype = Object.create(AlexaSkill.prototype);
MovieDialog.prototype.constructor = MovieDialog;

MovieDialog.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("MovieDialog onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
    //Check if session variables are NOT already initialized.
    if (!session.attributes.started) {

        session.attributes.started = true;
        session.attributes.helloQuotes = HELLO_QUOTES.slice();
        session.attributes.movieQuotes = MOVIE_QUOTES.slice();
        session.attributes.whoQuotes = WHO_QUOTES.slice();
        session.attributes.howQuotes = HOW_QUOTES.slice();
        session.attributes.adviceQuotes = ADVICE_QUOTES.slice();
        session.attributes.wrongQuotes = WRONG_QUOTES.slice();
        session.attributes.goodbyeQuotes = GOODBYE_QUOTES.slice();
        session.attributes.surely = 0;
        session.attributes.nice = 0;
    }

};

MovieDialog.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("MovieDialog onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleHelloQuoteRequest(session, response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
MovieDialog.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("MovieDialog onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

MovieDialog.prototype.intentHandlers = {
    GeneralIntent: function (intent, session, response) {
        handleNewQuoteRequest(session, response);
    },

	WhoIntent: function (intent, session, response) {
        handleWhoQuoteRequest(session, response);
    },

	HowIntent: function (intent, session, response) {
        handleHowQuoteRequest(session, response);
    },

	SurelyIntent: function (intent, session, response) {
		if (session.attributes.surely === 0) {
			handleSurelyQuoteRequest(session, response);
		} else {
			handleNewQuoteRequest(session, response);
		}
    },

	AdviceIntent: function (intent, session, response) {
        handleAdviceQuoteRequest(session, response);
    },

	WrongIntent: function (intent, session, response) {
        handleWrongQuoteRequest(session, response);
    },

	NiceIntent: function (intent, session, response) {
		if (session.attributes.nice === 0) {
			handleNiceQuoteRequest(session, response);
		} else {
			handleNewQuoteRequest(session, response);
		}
	},

	QuitIntent: function (intent, session, response) {
        handleGoodbyeQuoteRequest(session, response);
    },

    HelpIntent: function (intent, session, response) {
        response.ask("You know how to whistle, don't you Steve? You just put your lips together and, blow.");
    }
};

/**
 * Gets a random new quote from the list and returns to the user.
 */
 
function handleHelloQuoteRequest(session, response) {

//	var sessionAttributes = {};

    // Get a random quote from the movie quotes list
    var quoteIndex = Math.floor(Math.random() * session.attributes.helloQuotes.length);
    var quote = session.attributes.helloQuotes[quoteIndex];
	
    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleNewQuoteRequest(session, response) {
    // Get a random quote from the movie quotes list
	// if we have used up all WHO quotes, copy the original array again
	if (session.attributes.movieQuotes.length === 0) {
		console.log("MovieQuotes length = 0");
		session.attributes.movieQuotes = MOVIE_QUOTES.slice();
	}

    var quoteIndex = Math.floor(Math.random() * session.attributes.movieQuotes.length);
    var quote = session.attributes.movieQuotes[quoteIndex];

	// remove this quote from array
	session.attributes.movieQuotes.splice(quoteIndex, 1);

    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleWhoQuoteRequest(session, response) {
    // Get a random quote from the movie quotes list
	// if we have used up all WHO quotes, copy the original array again
	if (session.attributes.whoQuotes.length === 0) {
		session.attributes.whoQuotes = WHO_QUOTES.slice();
	}

    var quoteIndex = Math.floor(Math.random() * session.attributes.whoQuotes.length);
    var quote = session.attributes.whoQuotes[quoteIndex];
	
	// remove this quote from array
	session.attributes.whoQuotes.splice(quoteIndex, 1);

    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleHowQuoteRequest(session, response) {
    // Get a random quote from the movie quotes list
	// if we have used up all HOW quotes, copy the original array again
	if (session.attributes.howQuotes.length === 0) {
		session.attributes.howQuotes = HOW_QUOTES.slice();
	}
    var quoteIndex = Math.floor(Math.random() * session.attributes.howQuotes.length);
    var quote = session.attributes.howQuotes[quoteIndex];

	// remove this quote from array
	session.attributes.howQuotes.splice(quoteIndex, 1);


    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleSurelyQuoteRequest(session, response) {
 	// Make sure we don't say this again in this session
	session.attributes.surely = 1;
	// Use hard-coded quote
    var speechOutput = "I am serious. And don't call me Shirley.";

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleAdviceQuoteRequest(session, response) {
    // Get a random quote from the Advice quotes list
	// if we have used up all ADVICE quotes, copy the original array again
	if (session.attributes.adviceQuotes.length === 0) {
		session.attributes.adviceQuotes = ADVICE_QUOTES.slice();
	}
    var quoteIndex = Math.floor(Math.random() * session.attributes.adviceQuotes.length);
    var quote = session.attributes.adviceQuotes[quoteIndex];

	// remove this quote from array
	session.attributes.adviceQuotes.splice(quoteIndex, 1);


    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleWrongQuoteRequest(session, response) {
    // Get a random quote from the Wrong quotes list
	// if we have used up all WRONG quotes, copy the original array again
	if (session.attributes.wrongQuotes.length === 0) {
		session.attributes.wrongQuotes = WRONG_QUOTES.slice();
	}
    var quoteIndex = Math.floor(Math.random() * session.attributes.wrongQuotes.length);
    var quote = session.attributes.wrongQuotes[quoteIndex];

	// remove this quote from array
	session.attributes.wrongQuotes.splice(quoteIndex, 1);


    // Create speech output
    var speechOutput = quote;

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);
}

function handleNiceQuoteRequest(session, response) {
	// Make sure we don't say this again in this session
	session.attributes.nice = 1;
    // Use hard-coded quote
    var speechOutput = "Hey!  That's my line!";

    response.askWithCard(speechOutput, "MovieDialog", speechOutput);

}

function handleGoodbyeQuoteRequest(session, response) {
    // Get a random quote from the movie quotes list
    var quoteIndex = Math.floor(Math.random() * GOODBYE_QUOTES.length);
    var quote = GOODBYE_QUOTES[quoteIndex];

    // Create speech output
    var speechOutput = quote;

    response.tellWithCard(speechOutput, "MovieDialog", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MovieDialog skill.
    var movieDialog = new MovieDialog();
    movieDialog.execute(event, context);
};
