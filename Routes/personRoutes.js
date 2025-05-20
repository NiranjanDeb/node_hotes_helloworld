import express from "express";
const router = express.Router();
import Person from "../Models/Person.js";

// POST route to create a new person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new person document using the Person model
    const newPerson = new Person(data);

    // Save the new person document to the database
    const response = await newPerson.save();
    console.log("data saved successfully");
    res.status(201).json({
      message: "Person created successfully",
      person: response,
    });
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET route to fetch all persons
router.get("/", async (req, res) => {
  try {
    // Fetch all persons from the database
    const persons = await Person.find();
    res.status(200).json({
      message: "Persons fetched successfully",
      persons: persons,
    });
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// parameterized route to get a person by worktype
router.get("/:work", async (req, res) => {
  try {
    const workType = req.params.work; // Get the work type from the request parameters
    if (workType == "chef" || workType === "manager" || workType === "waiter") {
      // Fetch persons with the specified work type from the database
      const response = await Person.find({ work: workType });
      console.log("data fetched successfully");
      res.status(200).json({
        message: "Persons fetched successfully",
        persons: response,
      });
    } else {
      res.status(400).json({ message: "Invalid work type" });
    }
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT route to update a person by ID
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Get the person ID from the request body
    const updatedData = req.body; // Get the updated data from the request body

    const response = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated data against the schema
    });

    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }
    console.log("data updated successfully");
    res.status(200).json({
      message: "Person updated successfully",
      person: response,
    });
    
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE route to delete a person by ID
router.delete("/:id", async(req, res)=>{
  try {
    const personId = req.params.id; // Get the person ID from the request parameters
    const response = await Person.findByIdAndDelete(personId); // Delete the person by ID
    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }
      console.log("data deleted successfully");
    res.status(200).json({
      message: "Person deleted successfully",
      person: response,});



  } catch (error) {
    console.error("Error deleting person:", error);
    res.status(500).json({ message: "Internal server error" });
    
  }
})

export default router;
