import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
