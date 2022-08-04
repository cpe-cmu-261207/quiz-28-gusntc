const axios = require("axios");

const img = document.getElementById("img-profile");
const name = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const btnRandom = document.getElementById("p-btnRandom");

async function callApi() {
  try {
    const resp = await axios.get("https://randomuser.me/api/");
    const Data = resp.data.results[0];
    img = resp.data.result[0].picture;
    name.innerText = `${Data.name.first}+" "+${Data.name.last}`;
    address = `${Data.location.city}+" "+${Data.name.last}`;
  } catch (err) {
    console.log(err.message);
  }
}

callApi();
