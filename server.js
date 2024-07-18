import app from "./src/app.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./config/.env"
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`server running on port ${process.env.PORT || 8000}`)
})