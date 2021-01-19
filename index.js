const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const productRoute = require('./routes/product')

const app = express();

//Initialize Middleware
app.use(express.json({ extended: false }));

// All routes related to product
app.use('/api/v1/product', productRoute);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));