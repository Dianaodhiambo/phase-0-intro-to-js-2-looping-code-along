// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
return messages;
  }
console.log (writeCards(["Ada", "Brendan", "Ali"], "birthday"))


function countDown(){
    var countDown = 10;
    for(;countDown > 0; countDown--) { 
        console.log(countDown);
    }
    console.log(countDown);
}
    
