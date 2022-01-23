const prom1 = new Promise( (resolve, reject) => {
    return resolve('Promise 1 resolved');
})

const prom2 = new Promise( (resolve, reject) => {
    return resolve('Promise 2 resolved');
})

const prom3 = new Promise( (resolve, reject) => {
    return resolve('Promise 3 resolved');
})

// returns after all promises have returned
Promise.all([ 
    prom1, 
    prom2,
    prom3
]).then( promisesArray => {
    console.log(promisesArray);
})

// returns after FIRST promise has returned
Promise.race([ 
    prom1, 
    prom2,
    prom3
]).then( singlePromise => {
    console.log(singlePromise);
})