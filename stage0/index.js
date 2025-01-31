const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "ajujoshua2019@gmail.com", // Replace with your email
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/joshuakalu0/stage0",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
