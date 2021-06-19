async function start() {
    return await Promise.resolve('async is workimg')
}

start().then(console.log('Babel!'))

// var _ = require('lodash')
// import ('lodash').then(() => {
//     console.log('Lodash', _.random(0, 42, true))
// })