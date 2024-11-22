import express from "express";

const app = express();
app.use(express.json());
app.set("json spaces", 3);
export default app;
