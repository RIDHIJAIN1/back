import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique emails
    validate: {
      validator: function(v) {
        // Basic email validation
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  blocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive:{
    type: Boolean,
    default:true
  },
  whatsapp: {
    type: String,
    validate: {
      validator: function(v) {
        // Indian WhatsApp number validation (10 digits starting with 7, 8, or 9)
        return /^(\+91[-\s]?)?[789]\d{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid Indian WhatsApp number!`
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        // Indian phone number validation (10 digits starting with 7, 8, or 9)
        return /^(\+91[-\s]?)?[789]\d{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid Indian phone number!`
    }
  },
  state: {
    type: String,
  },
  referralCode: {
    type: String,
    validate: {
      validator: function(v) {
        // Ensure the referral code is alphanumeric
        return /^[a-zA-Z0-9]*$/.test(v);
      },
      message: props => `${props.value} is not a valid referral code!`
    }
  }
});

export const User = mongoose.model("User", schema);