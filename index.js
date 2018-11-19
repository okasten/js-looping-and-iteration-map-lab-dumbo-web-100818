// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (driver) {return driver.toLowerCase()});
}

function nameToAttributes(array){
  return array.map(function (name) { 
    const firstName = name.split(' ')[0];
  })
}