import express from "express";
import 'dotenv/config';
import userRoutes from "./controller/user.controller";
export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes)


//404 handling
app.use((req, res) => {
    res.status(404);
        res.json({ error: "Page not found" });
        return;
});


export const server = app.listen(PORT, () => {
    console.warn(`Express is running on port ${PORT}`);
});


