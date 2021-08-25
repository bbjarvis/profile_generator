/*
a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc.
It will then generate a profile description for them to use online, like the example demonstrated above
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  // log the answer to an object for the user
  const name = answer;

  rl.question(`What's an activity you like doing?`, (answer) => {
    // log the answer to an object for the user
    const activity = answer;

    rl.question(`What do you listen to while doing that?`, (answer) => {
      // log the answer to an object for the user
      const listen = answer;

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        // log the answer to an object for the user
        const meal = answer;
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          // log the answer to an object for the user
          const food = answer;
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            // log the answer to an object for the user
            const sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              // log the answer to an object for the user
              const power = answer;

              console.log(`Hi, m name is ${name}, I like to listen to ${listen} while doing favorite thing, ${activity}. I love eating ${food} for ${meal}. My favorite sport is ${sport} and my superpower is ${power}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


      
    
  
 
