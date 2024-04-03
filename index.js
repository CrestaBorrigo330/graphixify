const capitalizeString = require('./capitalizeString')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  }