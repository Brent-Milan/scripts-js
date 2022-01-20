// simple promise example:

let p = new Promise( (resolve, reject) => {
    let a = 1;
    if( a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then( (message) => {
    console.log('Then:', message);
}).catch( (message) => {
    console.log("Catch:", message)
})

const error1 = false;
const error2 = false;

// simple callback pattern:

function watchCallBack(callback, errorCallback) {
    if(error1) {
        errorCallback( 
            { 
                name: "Error:",
                message: "Error1 occurred"
            }
        );
    } else if(error2) {
        errorCallback(
            { 
                name: "Error:",
                message: "Error2 occurred"
            }
        );
    } else {
        callback('Success');
    }

}

watchCallBack( (message) => {
    console.log("message arg:", message);
    console.log("Result:", message);
}, (error) => {
    console.log(error.name , error.message);
})

// same function with a promise

function watchCallBackWithPromise() {
    return new Promise( (resolve, reject) => {
        if(error1 || error2) {
            reject( { name: "Promise:", message: "Reject" });
        } else {
            resolve( { name: "Promise", message: "Resolve" });
        }
    })

}

watchCallBackWithPromise().then( p => {
    console.log("Success:", p.message);
}).catch( error => {
    console.log(error.name, error.message);
})


