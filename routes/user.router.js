const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User
 */

/**
 * @swagger
 * user/get-all-users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
const User = require("../controllers/user.controller");

router.get("/get-all-users", User.getAllUsers);

/**
 * @swagger
 * user/id:
 *   get:
 *     summary: get the user by his id
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User-id'
 */
router.get("/:targetId", User.getUserById);

module.exports = router;
