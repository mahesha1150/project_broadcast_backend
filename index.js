const express = require("express");
const app = express();
const cors = require("cors");
const isCreditCardValid = require("./validateCard");

app.use(express.json());
app.use(cors());

app.post("/validateCreditCard", (req, res) => {
  //console.log(req.body);
  let creditCard = req.body;
  let creditCardNumber = creditCard.creditCardNumber;
  //console.log(creditCardNumber);

  const isValid = isCreditCardValid(creditCardNumber);
  let output = isValid ? "Valid" : "Invalid";

  res.status(200).json({ message: `Credit Card Number is ${output}` });

});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
