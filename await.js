function makeRequest(location) {
    return new Promise( (resolve, reject) => {
        if(location === 'expected') {
            resolve("Location verified");
        } else {
            reject("Invalid location");
        }
    }
)}

function processRequest(message) {
    return new Promise((resolve, reject) => {
        console.log("Processing request...");
        resolve("Processed successfully", message);
    })
}

// makeRequest("expected").then( p => {
//     console.log("Request received");
//     return processRequest(p);
// }).then( processedResponse => {
//     console.log(processedResponse);
// }).catch( err => {
//     console.log(err);
// })

async function doWork() {
    const resp = await makeRequest('expected');
    console.log("Async response received");
    const processedResponse = await processRequest(resp);
    console.log(processedResponse);
}

doWork();