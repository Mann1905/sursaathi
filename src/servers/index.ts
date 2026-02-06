import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mailerRoutes from "./mailer.js"; // note the .js extension in import for ESM

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mailerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
