// Define the helloSpeaker and byeSpeaker objects
var helloSpeaker = {};
var byeSpeaker = {};

// Attach speak method to helloSpeaker
helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
};

// Attach speak method to byeSpeaker
byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
};

// Your main function to loop through the names
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
