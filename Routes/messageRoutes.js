const express = require("express");
const router = express.Router();
const {
  sendMessage,
  sendImage,
  getAllMessage,
  viewMessage,
  changeStatus,
} = require("../controller/messageController");
const { isAuthenticated } = require("../middleware/validateToken");
const { imageUpload } = require("../middleware/multer");

router.post("/sendMessage", isAuthenticated, sendMessage);
router.post("/sendImage", imageUpload, sendImage);
router.post("/getAllMessage", isAuthenticated, getAllMessage);
router.post("/isViewMessage", isAuthenticated, viewMessage);
router.post("/changeStatus", isAuthenticated, changeStatus);

module.exports = router;
