import mongoose from "mongoose";
// define the person schema

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  work: {
    type: String,
    enum: ['chef', 'manager', 'waiter'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// Create a model from the schema
const Person = mongoose.model("Person", personSchema);
// Export the model
export default Person;