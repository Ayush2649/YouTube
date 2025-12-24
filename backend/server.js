import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { YOUTUBE_SEARCH_API } from "../src/utils/constants.js";

const app = express();
app.use(cors());

app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.json([]);

    const response = await fetch(
      YOUTUBE_SEARCH_API + encodeURIComponent(q)
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
