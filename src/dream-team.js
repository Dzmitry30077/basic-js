const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  const teamArr = Array.isArray(team) ? [...team] : false
  let result

  if (teamArr) {
    result = teamArr
      .reduce((acc, elem) => {
        if (typeof elem === 'string') {
          let trimElem = elem.trim()
          acc.push(trimElem[0].toLowerCase())
        }

        return acc
      }, [])
      .sort()
      .join('')
      .toUpperCase()
  } else {
    result = false
  }

  return result
}

module.exports = {
  createDreamTeam,
}
