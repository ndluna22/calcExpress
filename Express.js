const express = require("express");

const app = express();
const ExpressError = require("./expressError");
const { meanfunc, medianfunc, modefunc } = require("./functions");
//invalid number (nan errors)
//400 Bad Request
//${}is not a number

//empty input error
//400 Bad Request
//"nums are required"

app.get("/mean", (req, res, next) => {
  const { operation = "piggies", value = "top" } = req.query;
  //term="piggies",sort ="top" is default
  //regular is {term,sort}
  return res.send(`SEARCH PAGE!  Term is: ${term}, sort is: ${sort}`);
});

app.get("/median", (req, res, next) => {

    try {
      let response = {operation:"mean",result:meanfunc()};
    }
    return res.send(response);
    
  });




app.get("/mode", (req, res, next) => {
    try {
        let response = {operation:"mean",result:mode()};
      }
      return res.send(response);
      
    });
  

app.use(function (req, res, next) {
    try {
        let response = {operation:"mean",result:mode()};
      }
      return res.send(response);
      
    });

app.use(function (err, req, res, next) {
  //global error handler
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});
