const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      rquired: true
    },

    FirstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true
    },

    profilePicture: {
      type: Object,
      default: null
    }
    
  }
)