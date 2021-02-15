const mongoose = require("mongoose");
const { isEmail } = require('validator');

const Regex = {
  city: /^[a-zA-Z ]*$/,
  website: /(http|https)?:\/\/(\S+)/,
  zipcode: /\d{5}-\d{4}/,
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
  phone: /\d{1}-\d{3}-\d{3}-\d{3}/
}

const addressSchema = mongoose.Schema({
  street: {
      type: String,
      required: [true, 'Street must be provided']
    },
    suite: {
      type: String,
      required: [true, 'Suite must be provided']
    },
    city: {
      type: String,
      required: [true, 'Street must be provided'],
      validate: {
        validator: Regex.city,
        message: 'Not valid city provided',
        isAsync: false,
      }
    },
    zipcode: {
      type: String,
      required: [true, 'Zipcode must be provided'],
      validate: {
        validator: Regex.zipcode,
        message: 'Not valid zipcode provided',
        isAsync: false,
      }
    },
    geo: {
      lat: {
        type: String,
        required: [true, 'Lat must be provided']
      },
      lng: {
        type: String,
        required: [true, 'Lng must be provided']
      }
    }
})

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name must be provided']
  },
  username: {
    type: String,
    trim: true,
    required: [true, 'Username must be provided'],
    min: [4, '']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Name must be provided'],
    validate: {
      validator: Regex.email,
      message: 'Not valid email provided',
      isAsync: false,
    }
  },
  address: addressSchema,
  phone: {
    type: String,
    trim: true,
    required: [true, 'Phone must be provided'],
    validate: {
      validator: Regex.phone,
      message: 'Not valid phone',
      isAsync: false,
    }
  },
  website: {
    type: String,
    trim: true,
    required: [true, 'Website must be provided'],
    validate: {
      validator: Regex.website,
      message: 'Not valid website',
      isAsync: false,
    }
  },
  company: {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name must be provided']
    },
    catchPhrase: {
      type: String,
      trim: true,
      required: [true, 'Catch phrase must be provided']
    },
    bs: {
      type: String,
      trim: true,
      required: [true, 'BS must be provided']
    },
  }
})
module.exports = mongoose.model("User", userSchema);
