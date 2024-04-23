import mongoose from "mongoose";

// Seed initial data
const restaurantSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true, 
		},
		menu:{
			type: String,
			requiered: true,
		},
		rating:{
			type: Number,
			required: true
		},
	},
);

export const restaurant = mongoose.model('restaurant', restaurantSchema);


