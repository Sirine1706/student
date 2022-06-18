const {
	getFaculties,
	createFaculty,
    getFaculty,
    deleteFaculty,
    updateFaculty,
} = require("../controllers/faculty.controllers");

const router = require("express").Router();

router.get("/",getFaculties);
router.get('/:facultyId', getFaculty)
router.delete("/:facultyId", deleteFaculty);
router.put("/:facultyId", updateFaculty);
router.post("/", createFaculty);

module.exports = router;