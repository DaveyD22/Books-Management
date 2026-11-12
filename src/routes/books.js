const express = require("express");
const db = require("../db/db");
const { books } = require("../db/schema");
const router = express.Router();

router.get("/", async (req, res)=>{
    try {
        const entries = await db.select().from(books);

        return res.status(200).json(entries);
    } catch (err) {
        return res.status(500).json({
            message: err.message  || "something went wrong",
        })
    }
})

module.exports = router;