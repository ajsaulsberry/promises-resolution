const promise1a = new Promise(resolve => {
    console.log('Inside the promise1a executor code');
    setTimeout(() => resolve('Value from promise1a resolve method'), 2000);
});
console.log('After the promise1a constructor');
console.log(promise1a);
promise1a.then(value => {
    console.log(promise1a);
    console.log(value);
});
console.log('After promise1a is called');
console.log(promise1a);