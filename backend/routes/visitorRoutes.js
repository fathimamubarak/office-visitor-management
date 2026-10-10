const express = require("express");
const router = express.Router();

const Visitor = require("../models/visitor");

// Add a new visitor
router.post("/", async (req, res) => {
    try {
        const visitor = await Visitor.create(req.body);

        res.status(201).json({
            message: "Visitor added successfully",
            visitor
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to add visitor",
            error: error.message
        });
    }
});

// Get all visitors
router.get("/", async (req, res) => {
    try {
        const visitors = await Visitor.find().sort({ createdAt: -1 });

        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch visitors",
            error: error.message
        });
    }
});
// Check in visitor
router.put("/:id/checkin", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            {
                status: "Checked-In"
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor checked in successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to check in visitor",
            error: error.message
        });
    }
});


// Check out visitor
router.put("/:id/checkout", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            {
                status: "Checked-Out"
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor checked out successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to check out visitor",
            error: error.message
        });
    }
});
// Get one visitor
// Approve visitor
router.put("/:id/approve", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            { status: "Approved" },
            { new: true, runValidators: true }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor approved successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to approve visitor",
            error: error.message
        });
    }
});


// Reject visitor
router.put("/:id/reject", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            { status: "Rejected" },
            { new: true, runValidators: true }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor rejected successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to reject visitor",
            error: error.message
        });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json(visitor);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch visitor",
            error: error.message
        });
    }
});

// Update visitor
router.put("/:id", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor updated successfully",
            visitor
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update visitor",
            error: error.message
        });
    }
});

// Delete visitor
router.delete("/:id", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndDelete(req.params.id);

        if (!visitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete visitor",
            error: error.message
        });
    }
});

module.exports = router;