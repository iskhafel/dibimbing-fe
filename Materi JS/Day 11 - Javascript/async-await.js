// const login = async () => {
//   console.log("user menginputkan nama");
//   console.log("user menginputkan password");
//   console.log("validasi login ...");

//   await setTimeout(() => {
//     if (true) {
//       return { province: "jawa barat" };
//     } else {
//       return "login failed";
//     }
//   }, 3000);
// };

// login()
// .then((value) => console.log(value));

const fetch = require('node-fetch');

async function myFunction() {
  return Promise.resolve("");
}

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
};

getUsers();
