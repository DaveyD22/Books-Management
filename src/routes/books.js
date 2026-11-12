const express = require("express");
const db = require("../db/db");
const { books } = require("../db/schema");
const { eq } = require("drizzle-orm");
const ErrorHandler = require("../utilities/ErrorHandler");
const router = express.Router();


router.get("/", async (req, res)=>{
    try {
        const entries = await db.select().from(books);

        return res.status(200).json(entries);
    } catch (err) {
        return ErrorHandler(res, err)
    }
})

router.get("/:id", async (req, res)=>{
    try {
        const [entry] = await db.select().from(books).where(eq(books.id, + req.params.id));

        if (!entry){
            return res.status(404).json({
                message: "book not found",
            });
        }

        return res.status(200).json(entry);
    } catch (err) {
        return ErrorHandler(res, err)
    }
})

router.post("/", async (req, res)=>{
    try {
        const {title, author, year} = req.body
        if (!title){
            return res.status(404).json({
                message: "no title"
            })
        }
        if (!author){
            return res.status(404).json({
                message: "no author"
            })
        }
        if (year === undefined || year > new Date().getFullYear()){
            return res.status(404).json({
                message: "no year"
            })
        }

        await db.insert(books).values({
            title: title,
            author: author,
            year: year,
        })

        return res.status(201).json({
            message: "created succesfully"
        })

        
    } catch (err) {
        return ErrorHandler(res, err)
    }
})

module.exports = router;