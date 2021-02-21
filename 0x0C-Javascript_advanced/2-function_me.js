#!/usr/bin/node

function welcomeMessage(fullName) {
  return function alertFunction() {
    alert("Welcome " + fullName);
  };
}

guillaume = welcomeMessage((fullName = "Guillaume"));
alex = welcomeMessage((fullName = "Alex"));
fred = welcomeMessage((fullName = "Fred"));

guillaume();
alex();
fred();
