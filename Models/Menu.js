import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({

        // Define the schema for menu items
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        taste: {
            type: String,
            enum: ["spicy", "sweet", "sour", "bitter", "salty"],
            required: true,
        },
        is_drink: {
            type: Boolean,
                  default:false
        },
        ingredients: {
            type: [String],
            default: [],
      
        },
        num_sales: {
            type: Number,
            default: 0,
        },
    });

    const menuItem = mongoose.model("MenuItem", menuItemSchema);
    export default menuItem;