import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

// Hash the password before saving the person document
personSchema.pre("save", async function (next) {
  const person = this;
  // hash the password only if it has been modified (or is new)
  // This prevents re-hashing the password if it hasn't changed
  if(!person.isModified("password")) return next();
  try {
    // Generate a salt 
    // The salt is a random value added to the password before hashing
    const salt = await bcrypt.genSalt(10);
    // hash the password
    const hashedPassword = await bcrypt.hash(person.password, salt);
    // Set the hashed password to the password field
    person.password = hashedPassword;
    // Call the next middleware function
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare the provided password with the hashed password
personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};


// The compare function automatically extracts the salt from the storedHashPassword and uses it to hash the entered password. It then compares the resulting hash with the stored hash to determine if they match.
// The compare function is asynchronous and returns a promise, so you can use await or .then() to handle the result.

// Create a model from the schema
const Person = mongoose.model("Person", personSchema);
// Export the model
export default Person;