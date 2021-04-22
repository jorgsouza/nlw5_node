import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", async (request, response) => {});

export { routes };
