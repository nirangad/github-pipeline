import express from "express";
import { add, sub, mul, div } from "./calculator";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const usage = {
    endpoints: [
      {
        method: "GET",
        resource: "/add",
        params: ["number", "number"],
        description: "Add 2 numbers",
      },
      {
        method: "GET",
        resource: "/sub",
        params: ["number", "number"],
        description: "Subtract 2 numbers",
      },
      {
        method: "GET",
        resource: "/mul",
        params: ["number", "number"],
        description: "Multiply 2 numbers",
      },
      {
        method: "GET",
        resource: "/div",
        params: ["number", "number"],
        description: "Divide 2 numbers",
      },
    ],
  };
  res.send(usage);
});

app.get("/add/:x/:y", (req, res) => {
  const result = add(parseFloat(req.params.x), parseFloat(req.params.y));
  res.send({ result });
});

app.get("/sub/:x/:y", (req, res) => {
  const result = sub(parseFloat(req.params.x), parseFloat(req.params.y));
  res.send({ result });
});

app.get("/mul/:x/:y", (req, res) => {
  const result = mul(parseFloat(req.params.x), parseFloat(req.params.y));
  res.send({ result });
});

app.get("/div/:x/:y", (req, res) => {
  const result = div(parseFloat(req.params.x), parseFloat(req.params.y));
  res.send({ result });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
