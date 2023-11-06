//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    addScore(newScore) {
        return this.scores.push(newScore);
    }
    average() {
        let addedTests = 0;
        let numTests = this.scores.length;
        for (let i = 0; i < this.scores.length; i++) {
            addedTests += this.scores[i]
        }
        return Math.round(10 * addedTests / numTests) / 10;
    }
    status() {
        let ave = this.average();
        if (ave >= 90) {
            return `Accepted`;
        } else if (ave >= 80) {
            return `Reserve`;
        } else if (ave >= 70) {
            return `Probationary`;
        } else {
            return `rejected`;
        }
    }
}

let bubbaBear = new CrewCandidate(`Bubba Bear`, 135, [88, 85, 90]);
let merry = new CrewCandidate(`b. Merry`, 1.5, [93, 88, 97]);
let glad = new CrewCandidate(`c. Glad`, 225, [75, 78, 62]);
// console.log(bubbaBear)
// console.log(merry)
// console.log(glad) 
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// bubbaBear.addScore(89)
// console.log(merry.average())
let canidates = [bubbaBear, merry, glad]
for (i = 0; i < canidates.length; i++) {
    console.log(`${canidates[i].name} earned an average test score of ${canidates[i].average()}% and has a status of ${canidates[i].status()}.'`)
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// uncomment one or the other to see how many tests it took glad to get to Reserve or Accepted respectively
// let testsTaken = 0;
// while (glad.status() !== `Reserve`) {
//     glad.addScore(100);
//     testsTaken += 1;
// }
let testsTaken = 0;
while (glad.status() !== `Accepted`) {
    glad.addScore(100);
    testsTaken += 1;
}

console.log(`Glad took ${testsTaken} tests to recieve aan even higher status`)

