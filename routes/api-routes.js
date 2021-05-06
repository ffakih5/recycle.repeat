const connection = require("../config/connection.js");

module.exports = (app) => {
    //GET
    app.get("/api/all", (req, res) => {
        const dbQuery = "SELECT * FROM score";

        connection.query(dbQuery, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    });
    //ADD
    app.post("/api/new", (req, res) => {
        console.log("Score Data:");
        console.log(req.body);
    })



}



