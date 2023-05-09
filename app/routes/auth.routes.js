const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require("express");

const router = new express.Router();

router
  .route("/signup")
  .post(
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

router.route("/signin").post(controller.signin);

router.route("/signout").post(controller.signout);

module.exports = router;
