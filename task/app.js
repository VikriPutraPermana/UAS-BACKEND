// import Student Controller
const StudentController = require("../controllers/EmployeesController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello");
});

router.get("/employeess", EmployeesController.index);
router.post("/employeess", EmployeesController.store);
router.put("/employeess/:id", EmployeesController.update);
router.delete("/employeess/:id", EmployeesController.destroy);
router.get("/employeess/:id", EmployeesController.show);
// export routing
module.exports = router;