const mongoose = require("mongoose");
const { isEmail } = require('validator');

const Regex = {
  city: /^[a-zA-Z ]*$/,
  web: /(http|https)?:\/\/(\S+)/,
  zip: /\d{5}-\d{4}/,
}

const addressSchema = mongoose.Schema({
  city: {
    type: String,
    trim: true,
    validate: {
      validator: Regex.city,
      message: "Heyyy wrong city name"
    },
    required:  [true, "city required"],
  },
  zipcode: {
    type: String,
    trim: true,
    validate: {
      validator: Regex.zip,
      message: "Heyyyyyyy wrong zip"
    },
    required: [true, "zip is required"]
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username required"],
    trim: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: [true, "email required"],
    trim: true,
    validate:{
      validator: isEmail,
      message: 'Heyyy: {VALUE} is not a valid email',
      isAsync: false
    }
  },
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        return /\d{1}-\d{3}-\d{3}-\d{3}/.test(value);
      },
      message: 'Heyyy: {VALUE} is not a valid phone number!'
    },
    required: [true, "phone required"],
  },
  website: {
    type: String,
    trim: true,
    validate: {
      validator: Regex.web,
      message: "Heyyyyyyy wrong web link"
    },
    required: [true, "web link is required"]
  },
  address: addressSchema,
  // gender: {
  //   type: String,
  //   required: [true, "Category required"],
  //   enum: ["Men", "Woman", "Others"],
  // },
  // code: {
  //   type: String,
  //   required: [true, "Code required"],
  //   minlength: [5, "Minimun code length 5 characters"],
  // },
  // quantity: {
  //   type: Number,
  //   required: [true, "Quantity required"],
  //   min: [0, "Minimun quantity is zero"],
  // },
}, {timestamp: true});

userSchema.pre("save", doc => console.log(`pre save: ${doc._id}`));

userSchema.post("init", doc => console.log(`init: ${doc._id}`));
userSchema.post("validate", doc => console.log(`validate: ${doc._id}`));
userSchema.post("saved", doc => console.log(`saved: ${doc._id}`));
userSchema.post("remove", doc => console.log(`remove: ${doc._id}`));

userSchema.methods.customFunction = () => {
  console.log("Custom function!!");
}

module.exports = mongoose.model("User", userSchema);
