const express = require('express');
const noteModel = require('../models/noteModel');
const authMiddleWare = require('../middlewares/authMiddleWare');
const noteRouter = express();


// CRUD OPERATIONS

noteRouter.post("/create", authMiddleWare, async (req, res) => {
    const { title, description, userID, username } = req.body;
    try {
        const note = new noteModel({ title, description, userID, username });
        await note.save();
        res.status(201).json({
            message: "Note created successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error while craeating the note", error
        });
    }
});


noteRouter.get("/", authMiddleWare, async (req, res) => {
    console.log(req.body);
    const { userID, user } = req.body;
    try {
        const notes = await noteModel.find({ userID });
        res.status(200).json({
            message: "All notes",
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: "Error while getting all notes",
            error
        });
    }
});


noteRouter.patch("/update/:id", authMiddleWare, async (req, res) => {
    const { id } = req.params;
    try {

        await noteModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).json({
            message: `Note updated successfully with id : ${id}`
        })

    } catch (error) {
        res.status(500).json({
            message: `Error while updating the note`,
            error
        });
    }
});

noteRouter.delete("/update/:id", authMiddleWare, async (req, res) => {
    const { id } = req.params;
    try {
        if (id == userID) {
            await noteModel.findByIdAndDelete({ _id: id });
            res.status(200).json({
                message: `Note deleted successfully with id : ${id} `
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Error while deleting the note`,
            error
        });
    }
});

module.exports = noteRouter;