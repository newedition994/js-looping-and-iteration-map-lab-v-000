// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(driver => driver.toLowerCase());
}

function nameToAttributes (array) {
    return array.map(driver => Object.assign({}, {'firstName': driver.split(' ')[0], 'lastName': driver.split(' ')[1] }));
}

function attributesToPhrase (array) {
    return array.map(driver => `${driver.name} is from ${driver.hometown}`);
}