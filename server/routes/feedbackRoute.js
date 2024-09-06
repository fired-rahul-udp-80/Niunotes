const express = require("express");
const router = express.Router();

// project/feedback form 
const {createFeedbackForm,
    getAllFeedbackForm,
    createProject,
    getAllProject} = require("../controllers/FeedBackForm");

router.post("/createFeedback",createFeedbackForm);
router.get("/getAllFeedback",getAllFeedbackForm);

router.post("/createProject",createProject);
router.get("/getAllProject",getAllProject);

// semester notes controller
const {createThirdSemController,
    createFourthSemController,
    createFifthSemController,
    createSixthSemController,
    createSeventhSemController,
    createEighthSemController,

    // get data
    getThirdSemController,
    getFourthSemController,
    getFifthSemController,
    getSixthSemController,
    getSeventhSemController,
    getEighthSemController,

    // delete notes data
    deleteThirdSemController,

} = require("../controllers/SemesterController");

router.post("/createThirdSem",createThirdSemController);
router.get("/getThirdSem",getThirdSemController);
router.delete("/deleteThirdSem:id",deleteThirdSemController)
 
router.post("/createFourthSem",createFourthSemController);
router.get("/getFourthSem",getFourthSemController);

 
router.post("/createFifthSem",createFifthSemController);
router.get("/getFifthSem",getFifthSemController);

router.post("/createSixthSem",createSixthSemController);
router.get("/getSixthSem",getSixthSemController);
 
router.post("/createSeventhSem",createSeventhSemController);
router.get("/getSeventhSem",getSeventhSemController);

 
router.post("/createEighthSem",createEighthSemController);
router.get("/getEighthSem",getEighthSemController);

// previous year question bank 
const {createThirdSemQuestController,
    createFourthSemQuestController,
    createFifthSemQuestController,
    createSixthSemQuestController,
    createSeventhSemQuestController,
    createEighthSemQuestController,

    // get Controller
    getThirdSemQuestController,
    getFourthSemQuestController,
    getFifthSemQuestController,
    getSixthSemQuestController,
    getSeventhSemQuestController,
    getEighthSemQuestController,
}  = require("../controllers/PrevYearController");

router.post("/createThirdSemQuest",createThirdSemQuestController);
router.get("/getThirdSemQuest",getThirdSemQuestController);

router.post("/createFourthSemQuest",createFourthSemQuestController);
router.get("/getFourthSemQuest",getFourthSemQuestController);

router.post("/createFifthSemQuest",createFifthSemQuestController);
router.get("/getFifthSemQuest",getFifthSemQuestController);

router.post("/createSixthSemQuest",createSixthSemQuestController);
router.get("/getSixthSemQuest",getSixthSemQuestController);

router.post("/createSeventhSemQuest",createSeventhSemQuestController);
router.get("/getSeventhSemQuest",getSeventhSemQuestController);

router.post("/createEighthSemQuest",createEighthSemQuestController);
router.get("/getEighthSemQuest",getEighthSemQuestController);


module.exports = router;