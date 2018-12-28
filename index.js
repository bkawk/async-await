const fetch = require('node-fetch');

/**
 * getTodo Promise
 */
function getTodoPromise() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err.message));
}

/**
 * getTodo Async
 */
async function getTodoAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err.message);
  }
}

getTodoPromise();
getTodoAsync();
