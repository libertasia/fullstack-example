import Express from "express";
import cors from "cors";

import productRouter from "./routes/products";
import apiErrorHandler from "./middlewares/apiErrorHandler";

const app = Express();

app.use(Express.json());
app.use(cors());

// routes
app.use("/products", productRouter);

// handler error here
app.use(apiErrorHandler);

export default app;
