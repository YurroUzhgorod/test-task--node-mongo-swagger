const express = require("express");

const { AccountController } = require("../controllers/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The Tests managing API
 */

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User-auth'
 *     responses:
 *       200:
 *         description: User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User-auth'
 *       500:
 *         description: Some server error
 */

router.post("/sign-up/", AccountController.signUpHandler);

/**
 * @swagger
 * /auth/sign-in:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User-sign-in'
 *     responses:
 *       200:
 *         description: User has logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User-sign-in'
 *       500:
 *         description: Some server error
 */

router.post("/sign-in/", AccountController.signInHandler);

module.exports = router;
