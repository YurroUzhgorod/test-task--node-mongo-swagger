const express = require("express");

const router = express.Router();
const Middlewares = require("./../middlewares");

const Authorization = require("../middlewares/authorization");

const authRouter = require("./auth.router");

const userRouter = require("./user.router");

const contentRouter = require("./content.router");

/**
 * @swagger
 * components:
 *   schemas:
 *     User-auth:
 *       type: object
 *       required:
 *         - login
 *         - email
 *         - password
 *       properties:
 *         login:
 *           type: string
 *           description: Login which user will use
 *           default: Yurro
 *         email:
 *           type: string
 *           description: email which user will use
 *           default: yurro@gmail.com
 *         password:
 *           type: string
 *           description: password which user will use
 *           default: 3322
 *       example:
 *         userName: ExampleLogin-77
 *         email: example@gmail.com
 *         password: "1234567"
 *     User-sign-in:
 *       type: object
 *       required:
 *         - login
 *         - password
 *       properties:
 *         login:
 *           type: string
 *           description: Users login
 *         password:
 *           type: string
 *           description: Users password
 *       example:
 *         userName: ExampleLogin-77
 *         password: "1234567"
 *     Content:
 *       type: object
 *       required:
 *         - title
 *         - userId
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the test which will be created
 *         userId:
 *           type: string
 *           description: userId of user who will create the test
 *         description:
 *           type: string
 *           description: description and details of the test which  which will be created
 *       example:
 *         title: First test
 *         userId: "65c1e72797a12db957269b35"
 *         description: "There are first test"
 */

router.use("/auth", authRouter);

router.get("/refreshToken", Authorization.refreshToken);

// ****************************** AUTH ******************************************

router.use(Authorization.requiredAuth);

router.use("/user", userRouter);

router.use("/content", contentRouter);

router.use(Middlewares.notFound);

router.use(Middlewares.errorHandler);

module.exports = router;
