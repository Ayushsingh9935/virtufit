import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post(
  "/api/virtual-tryon",
  upload.fields([
    { name: "userImage", maxCount: 1 },
    { name: "clothImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const userImage = req.files.userImage?.[0];
      const clothImage = req.files.clothImage?.[0];

      if (!userImage || !clothImage) {
        return res.status(400).json({
          success: false,
          message: "Both images required",
        });
      }

      // DEMO RESPONSE (AI future me yaha lagega)
      return res.json({
        success: true,
        message: "Images uploaded successfully",
        userImage: userImage.filename,
        clothImage: clothImage.filename,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});