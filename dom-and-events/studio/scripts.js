// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {

    let rocketHieght = 0;
    let rocketPositionX = 0;
    let rocketPositionY = 0;
    //buttons
    const takeOff = document.getElementById(`takeoff`);
    const landButton = document.getElementById(`landing`)
    const abortButton = document.getElementById(`missionAbort`)
    //areas
    const shuttlePng = document.getElementById(`shuttleBackground`);
    const shuttleHieght = document.getElementById(`spaceShuttleHeight`)
    const flightStatus = document.getElementById(`flightStatus`);

    //rocket image
    const rocket = document.getElementById(`rocket`)


    takeOff.addEventListener(`click`, function () {
        let answer = window.confirm(`Confirm that the shuttle is ready for takeoff.`);
        if (answer === true) {
            flightStatus.innerHTML = `Shuttle in flight`;
            shuttlePng.style.backgroundColor = `blue`;
            rocketHieght = 10000;
            shuttleHieght.innerHTML = rocketHieght;
            rocketPositionY += 10;
            rocket.style.marginBottom = rocketPositionY + `px`;
        }
    });
    landButton.addEventListener(`click`, () => {
        alert(`The shuttle is landing, landing gear engaged`);
        flightStatus.innerHTML = `Shuttle has landed`;
        resetRocket()
    });
    abortButton.addEventListener(`click`, function () {
        let shouldAbort = confirm(`Confirm that you want to abort the mission.`);
        if (shouldAbort === true) {
            flightStatus.innerHTML = `Mission Aborted`;
            resetRocket()
        }
    });


    //using event delegation
    document.addEventListener(`click`, function (event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttlePng).getPropertyValue(`width`))
        if (event.target.id === "left" && rocketPositionX > -(bkgWidth / 2 - 40)) {
            rocketPositionX -= 10;
            rocket.style.marginLeft = rocketPositionX + `px`
        }
        if (event.target.id === "up" && rocketHieght < 250000) {
            rocketPositionY += 10;
            rocket.style.marginBottom = rocketPositionY + `px`
            rocketHieght += 10000;
            shuttleHieght.innerHTML = rocketHieght
        }
        if (event.target.id === "down" && rocketHieght > 0) {
            rocketPositionY -= 10;
            rocket.style.marginBottom = rocketPositionY + `px`
            rocketHieght -= 10000;
            shuttleHieght.innerHTML = rocketHieght
        }
        if (event.target.id === "right" && rocketPositionX < (bkgWidth / 2 - 40)) {
            rocketPositionX += 10;
            rocket.style.marginLeft = rocketPositionX + `px`
        }
    })

    function resetRocket() {
        shuttlePng.style.backgroundColor = `green`;
        rocketHieght = 0;
        shuttleHieght.innerHTML = rocketHieght;
        rocketPositionX = 0;
        rocketPositionY = 0;
        rocket.style.marginLeft = rocketPositionX + `px`;
        rocket.style.marginBottom = rocketPositionY + `px`;
    }


});