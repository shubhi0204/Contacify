const express = require("express");
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

const validateToken= require("../middlewares/validateTokenHandler");
router.route("/").get(getAllContacts);

router.route("/").post(createContact);
router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
