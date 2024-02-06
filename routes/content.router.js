const express = require("express");

const Content = require("../controllers/content.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: content
 *   description: content
 */

router.get("/", Content.getContentList);

router.get("/:id", Content.getContentById);

// /**
//  * @swagger
//  * /content:
//  *   post:
//  *     summary: Create and add new test
//  *     parameters:
//  *       - in: header
//  *         name: Access token
//  *         description: Access token for authentication
//  *         required: true
//  *         schema:
//  *           type: string
//  *     tags: [Content]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Content'
//  *     responses:
//  *       200:
//  *         description: You are successfully created a new test
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Content'
//  *       500:
//  *         description: Some server error
//  */

/**
 * @swagger
 * /content:
 *   post:
 *     summary: Create a new test
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Access token for authentication
 *         required: true
 *         schema:
 *           type: string
 *     tags: [Content]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Content'
 *     responses:
 *       200:
 *         description: The test was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Content'
 *       500:
 *         description: Some server error
 */
router.post("/", Content.createContent);

router.put("/:id", Content.updateContent);

router.delete("/:id", Content.deleteContent);

router.get("/pass/:content-id", Content.passContent);

router.get("/pass-list/:idUser", Content.getAllPassedTestOfUser);

router.post("/assign", Content.assignContentToUser);

module.exports = router;
