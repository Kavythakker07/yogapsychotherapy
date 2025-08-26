const express = require("express");
const router = express.Router();

router.use('/uploads', express.static('uploads'));

const { registerUser, registerUserPost, introInHindi,mainPage, logout , profile ,loginUser, loginUserPost, requestOtp, verifyOtp, logIn,termsCon,awardsAchievements,mediaNews ,activities,introInGujarati,concept} = require("../controllers/authController");

// Define routes
router.get('/', mainPage);
router.get('/log_in', logIn);
router.get('/terms_conditions', termsCon);
router.get('/awards_achievements', awardsAchievements);
router.get('/media_news', mediaNews);
router.get('/activities', activities);
router.get('/introInGujarati', introInGujarati);
// router.get('/introInGujarati', introInGujarati);

router.get('/introInHindi', introInHindi);
router.get('/concept', concept);









module.exports = router;
