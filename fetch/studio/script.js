//TODO: Add Your Code Below
window.addEventListener(`load`, () => {

    const container = document.getElementById(`container`)

    fetch(`https://handlers.education.launchcode.org/static/astronauts.json`).then( function(response) {
        response.json().then(function(data) {
            
            console.log(data)


            for (let i = 0; i < data.length; i++) {
                let astronuat = data[i]
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronuat.firstName} ${astronuat.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronuat.hoursInSpace}</li>
                            <li>Active: ${astronuat.active}</li>
                            <li>Skills: ${astronuat.skills.join(`, `)}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronuat.picture}">
                </div>
                `
            }
        })
    })


}) 