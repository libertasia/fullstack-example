import { Router } from "express";
import { createUser } from "../controllers/users";

const router = Router();

// create user
router.post("/", createUser);

export default router;
