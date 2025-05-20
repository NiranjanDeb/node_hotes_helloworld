import express from 'express';
const router = express.Router();
import menuItem from '../Models/Menu.js';

// :-------------------------------CRUD for MENU----------------------------------------:

router.get('/', async (req, res) => {
  try {
    const menuItems = await menuItem.find();
    res.status(200).json({
      message: "Menu items fetched successfully",
      menuItems: menuItems,
    });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/', async(req,res)=>{
  try {
      const data = req.body; // Assuming the request body contains the menu item data
      const newMenuItem = new menuItem(data);
      // Save the new menu item document to the database
      const response = await newMenuItem.save();
      console.log("menuItem saved successfully");
    res.status(201).json({
      message: "MenuItem created successfully",
      person: response,
    });

  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})


export default router;
