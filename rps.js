// getting elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.querySelector(".result");
const choose = document.querySelector(".choose");

rock.addEventListener("click", () => {
  let user = "rock";
  match(cpu(), user);
});
paper.addEventListener("click", () => {
  let user = "paper";
  match(cpu(), user);
});
scissor.addEventListener("click", () => {
  let user = "scissor";
  match(cpu(), user);
});

// cpu turn
const cpu = () => {
  let cpuI = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissor"][cpuI];
};

// matching result
const match = (cpu, user) => {

  if (cpu === user) {
    result.innerHTML = ("Match draw")
    choose.innerHTML = (`Computer chooses ${cpu}`)

  } else if (cpu === "rock" && user === "paper") {
    result.innerHTML = ("You Won")
    choose.innerHTML = (`Computer chooses ${cpu}`)

  } else if (cpu === "rock" && user === "scissor") {
    result.innerHTML = ("You Loose")
    choose.innerHTML = (`Computer chooses ${cpu}`)

    console.log("cpu");
  } else if (cpu === "paper" && user === "scissor") {
    result.innerHTML = ("You Won")
    choose.innerHTML = (`Computer chooses ${cpu}`)

  } else if (cpu === "paper" && user === "rock") {
    result.innerHTML = ("You Loose")
    choose.innerHTML = (`Computer chooses ${cpu}`)

  } else if (cpu === "scissor" && user === "rock") {
    result.innerHTML = ("You Won")
    choose.innerHTML = (`Computer chooses ${cpu}`)
    
  } else if (cpu === "scissor" && user === "paper") {
    result.innerHTML = ("You Loose")
    choose.innerHTML = (`Computer chooses ${cpu}`)
  }
};
