const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json("GET /colors");
});

router.delete("/:name/css-styles/:style", (req, res) => {
    res.json(`DELETE /colors/${req.params.name}/css-styles/${req.params.style}`);
});

router.post("/:name/css-styles", (req, res) => {
    res.json(`POST /colors/${req.params.name}/css-styles`);
});

router.get("/:name", (req, res) => {
    res.json(`GET /colors/${req.params.name}`);
});




module.exports = router;
