const express = require("express");

const { ItemController, MemberController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/members", MemberController.browse);
router.get("/members/:id", MemberController.read);
router.put("/members/:id", MemberController.edit);
router.post("/members", MemberController.add);
router.delete("/members/:id", MemberController.delete);

module.exports = router;
