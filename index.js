const fetch = require('node-fetch');

/**
 * timesTen
 * @param {number} number
 * @return {number} the number * 10
 */
function timesTen(number) {
  return number * 10;
}

/**
 * getTodo Promise
 */
function getTodoPromise() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => timesTen(json.id))
      .then((sum) => console.log(`a: ${sum}`))
      .catch((err) => console.log(err.message));
}

/**
 * getTodo Async
 */
async function getTodoAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    const sum = await timesTen(json.id);
    console.log(`b: ${sum}`);
  } catch (err) {
    console.log(err.message);
  }
}

getTodoPromise();
getTodoAsync();
