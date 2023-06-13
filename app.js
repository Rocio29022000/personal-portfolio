console.log("Hello world")

var name= prompt("What is your Name?", "");

document.write("Hello " + name)

confirm("Hi, " + name + ". Just a moment... you are about to come into my personal portfolio, are you sure you want to contiune?")

loop:
while(true){
    let colour = prompt("What colour is better; aquamarine, pink or white?", "")
    if (colour != "aquamarine" && colour != "pink" && colour != "white"){
        console.log("Invalid answer! Please choose between Pink, Aquamarine or white");
        alert("Invalid answer, try again.")

    } else {
        confirm("You chose: " + colour )
        document.bgColor = colour
        break loop;
    }

}
