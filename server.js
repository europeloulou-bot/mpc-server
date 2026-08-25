import express from "express";

const app = express();
app.use(express.json());

// Endpoint MCP
app.post("/mcp", (req, res) => {
  res.json({
    mcp_version: "1.0",
    capabilities: ["example"],
    result: "Ton MCP fonctionne !"
  });
});

app.listen(3000, () => {
  console.log("MCP server running on port 3000");
});