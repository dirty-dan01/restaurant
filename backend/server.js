import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import restaurantModel from '../models/restaurantModel'
//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("Your mongodb connection string", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const restaurantSchema = new mongoose.Schema({
	name: String,
	image: String,
	menu: [
		{
			name: String,
			price: Number,
			image: String,
		},
	],
	rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

const seedDatabase = async () => {
	try {
		await Restaurant.deleteMany(); // Clear existing data
		await Restaurant.insertMany(seedData);
		console.log("Database seeded successfully.");
	} catch (error) {
		console.error("Error seeding the database:", error.message);
	}
};

// Seed data when the server starts
seedDatabase();

app.get("/restaurants", async (req, res) => {
	try {
		// Use the 'find' method of the 'Restaurant' model to retrieve all restaurants
		const restaurants = await Restaurant.find({});

		// Send the retrieved restaurants as a JSON response
		res.json(restaurants);
	} catch (error) {
		// Handle any errors that may occur during the process and send a 500 Internal Server Error response
		res.status(500).json({ error: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
