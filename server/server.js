const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

// Reemplaza con tu ACCESS_TOKEN disponible en: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: "TEST-1065602451630464-113019-fdea311b07b4364aa7d28e14b003a1d1-200244363",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client/html-js"));
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:8080/feedback",
      failure: "http://localhost:8080/feedback",
      pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
    // Puedes incluir el token directamente aquí
    access_token: "<ACCESS_TOKEN>",
  };

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/feedback', function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
