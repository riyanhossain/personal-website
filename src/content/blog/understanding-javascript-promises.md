---
title: "Understanding JavaScript Promises"
description: "Promises in JavaScript are a powerful way to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never."
pubDate: "24 Jan 2025"
updatedDate: "24 Jan 2025"
tags: ["JavaScript"]
---

Promises in JavaScript are a powerful way to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never.

## Promise Methods with Examples

### 1. `Promise.resolve(value)`

Creates a promise that resolves with the given value.

```javascript
const promise = Promise.resolve("Hello, World!");
promise.then((value) => console.log(value)); // Output: Hello, World!
```

### 2. `Promise.reject(reason)`

Creates a promise that rejects with the given reason.

```javascript
const promise = Promise.reject("Something went wrong!");
promise.catch((error) => console.error(error)); // Output: Something went wrong!
```

### 3. `Promise.all(iterable)`

Resolves when all promises in the iterable resolve or rejects if any promise rejects.

```javascript
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

Promise.all(promises).then((values) => console.log(values)); // Output: [1, 2, 3]
```

### 4. `Promise.allSettled(iterable)`

Waits for all promises to settle (resolve or reject) and returns their results.

```javascript
const promises = [
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3),
];

Promise.allSettled(promises).then((results) => console.log(results));
// Output: [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'Error' },
//   { status: 'fulfilled', value: 3 }
// ]
```

### 5. `Promise.race(iterable)`

Resolves or rejects as soon as one of the promises resolves or rejects.

```javascript
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("First"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 1000)),
];

Promise.race(promises).then((value) => console.log(value)); // Output: First
```

### 6. `Promise.any(iterable)`

Resolves as soon as one of the promises resolves or rejects if all promises reject.

```javascript
const promises = [
  Promise.reject("Error 1"),
  Promise.reject("Error 2"),
  Promise.resolve("Success!"),
];

Promise.any(promises).then((value) => console.log(value)); // Output: Success!
```

### 7. `Promise.prototype.then(onFulfilled, onRejected)`

Defines what to do when the promise is resolved or rejected.

```javascript
const promise = Promise.resolve("Done");
promise.then((value) => console.log(value)); // Output: Done
```

### 8. `Promise.prototype.catch(onRejected)`

Handles errors or rejections in a promise chain.

```javascript
const promise = Promise.reject("Oops!");
promise.catch((error) => console.error(error)); // Output: Oops!
```

### 9. `Promise.prototype.finally(onFinally)`

Executes a callback after the promise is settled (resolved or rejected).

```javascript
const promise = Promise.resolve("Complete");
promise
  .finally(() => console.log("Cleanup"))
  .then((value) => console.log(value));
// Output: Cleanup
// Output: Complete
```

## Conclusion

Promises make asynchronous programming cleaner and more manageable. By leveraging these methods, you can handle a wide variety of scenarios in your JavaScript applications.
