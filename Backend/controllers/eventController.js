const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create({ ...req.body, createdBy: req.user._id });
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllEvents = async (req, res) => {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
};
