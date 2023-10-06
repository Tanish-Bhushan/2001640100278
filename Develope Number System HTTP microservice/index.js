const express = require("express");
const app = express();
const axios = require("axios");

app.get("/numbers", async (req, res) => {
  let list = [];
  let params = req.query.url;

  //   const url = "http://20.244.56.144/numbers/primes";

  const findit = async (url) => {
    const response = await axios(url);
    // console.log(response.data.numbers);
    response.data.numbers.forEach((element) => {
      list.push(element);
      //   console.log(list)
    });
    return list;
  };
  console.log(typeof params);
  await findit(params);

  // list = _.uniq(list);

  res.json(list);
});

app.listen("4000", () => {
  console.log("Server running at port:4000");
});
