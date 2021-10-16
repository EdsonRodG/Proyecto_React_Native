import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51JkaJUD7vVeyMzF6rq1ksPm8cGYic0JUD50nLri4LophKnIC7az4jFVFW16fWIAoRmk3m40yl4BPFPVKOVeDBRxw005PSfKywt";
const SECRET_KEY = "sk_test_51JkaJUD7vVeyMzF6kPL0xRlcZDzlxsppIppHVmsIySBxm2eX1JMdXUMHqeDY19TRShEqQ3krQ2ww0Ovo3YYq3DtQ00AFfMm9UQ";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});