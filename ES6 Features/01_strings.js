var test_strings = function () {
    var person = {
        name: "Bud Buddy",
        employed: false
    };
    var oldFashionedString = "Name: " + person.name + "\n" +
        "Employed: " + (person.employed ? "yes" : "no") + "\n";
    console.log("old way result");
    console.log(oldFashionedString);
    var niceString = "Name: " + person.name + "\nEmployed: " + (person.employed ? "yes" : "no");
    console.log("new way result");
    console.log(niceString);
}; 
