const findTheOldest = function (people) {
    let oldest = people[0];
    const currentYear = new Date().getFullYear();

    for (let i = 1; i < people.length; i++) {
        const currentAge =
            (people[i].yearOfDeath ?? currentYear) - people[i].yearOfBirth;
        const oldestAge =
            (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
        if (currentAge > oldestAge) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
