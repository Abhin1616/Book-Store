import express from "express"
const router = express.Router()
import { Book } from "../models/book.js"
import { wrapAsync } from "../wrapAsync.js"

router.get("/", wrapAsync(async (req, res) => {
    const allBooks = await Book.find()
    res.status(201).send(allBooks)
}))
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id)
    res.status(201).send(book)

}))
router.post("/", wrapAsync(async (req, res) => {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year })
    await book.save()
    res.status(201).send(book)
}))

router.put("/:id", wrapAsync(async (req, res) => {

    const { id } = req.params;
    const { title, author, year } = req.body;
    const book = await Book.findByIdAndUpdate(id, { title, author, year }, { new: true })
    res.status(201).send(book)

}))

router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id)
    res.status(201).send("Book Successfully deleted")
}))

export default router;