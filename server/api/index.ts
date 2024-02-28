// @ts-nocheck
import express, { Request, Response } from "express";

const app = express();

app.get("/customers");
app.get("/customers/:customerId");
app.post("/customers");
app.patch("/customers/:customerId");
app.delete("/customers/:customerId");
app.post("/customers/:customerId/link-number");
app.delete("/customers/:customerId/unlink-number");

app.get("/phone-numbers");
app.get("/phone-numbers/:phoneNumberId");
app.patch("/phone-numbers/:phoneNumberId");
app.delete("/phone-numbers/:phoneNumberId");

app.get("/customers/search"); // req.query.searchQuery
app.get("/phone-numbers/search"); // req.query.searchQuery
