const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// route

app.get("/express_backend", (req, res) => {
    res.send({express: 'The express backend is connected to react'});
});
