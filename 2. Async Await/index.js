//This is a sync funtion expect to resolve the promise if the promise is resolved return resolve, else return reject promise
async function myAsyncFunction() {
  await new Promise((resolve, reject) => { //Declares a lambda function that takes resolve and reject as arguments
    resolve();
  }).then(() => {
    console.log('Promise resolved')
  }).catch(() => {
    console.log('Promise rejected')
  })
}


async function asyncFailedFunction() {
  await new Promise((resolve, reject) => {
    throw new Error('My Custom Error')
  }).then(() => {
    console.log('Promise resolved')
  }).catch(() => {
    console.error('Promise rejected')
  })
}




myAsyncFunction()
asyncFailedFunction()