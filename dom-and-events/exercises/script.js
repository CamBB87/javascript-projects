function init() {
   const missionAbort = document.getElementById("abortMission");
   const button = document.getElementById("liftoffButton");
   const paragraph = document.getElementById("statusReport");

   // Put your code for the exercises here.
   button.addEventListener('click', event => {
      paragraph.innerHTML = 'Houston! We have liftoff!';
   });
   missionAbort.addEventListener(`mouseover`, (event) => {
      event.target.style.backgroundColor = "red";
   });
   missionAbort.addEventListener(`mouseleave`, (event) => {
      event.target.style.backgroundColor = "";
   });
   missionAbort.addEventListener(`click`, () => {
      let answer = window.confirm(`are you sure you want to abort this mission?`);
      if (answer === true) {
         paragraph.innerHTML = `Mission aborted! Space shuttle returning home`;
      } else {
         paragraph.innerHTML = `lol good we couldn't stop it anyway`
      }
   })
}

window.addEventListener("load", init); 
