import express from "express";

const app = express();
app.use(express.json());

// MCP metadata endpoint
app.get("/.well-known/mcp/server-card.json", (req, res) => {
  res.json({
    name: "mpc-server",
    version: "1.0.0",
    description: "Un serveur MCP simple pour Mael",
    tools: [
      {
        name: "hello",
        description: "Renvoie un message de bienvenue",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string" }
          },
          required: ["name"]
        }
      }
    ]
  });
});

// MCP tool endpoint
app.post("/mcp/hello", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Salut ${name}, ton MCP fonctionne parfaitement !`
  });
});

// Start server
app.listen(3000, () => {
  console.log("MCP server running on port 3000");
});