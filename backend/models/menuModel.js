import mongoose, { mongo } from "mongoose";

// Seed initial data
const menuSchema = mongoose.Schema(
	{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
	},
);

export const Menu = mongoose.model(menu, menuSchema);