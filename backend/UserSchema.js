const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    orders: [{
        id: {
            type: Number,
            required: true
        },
        products: [{
            id: {
                type: Number,
            },
            name: {
                type: String,
        
            },
            price: {
                type: Number,

            },
            image: {
                type: String,
     
            }
        }],
        price: {
            type: Number,
    
        },
        status: {
            type: String,

        },
        date:
        {
            type: Date,
            default: Date.now
        }
    }]
});

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User=mongoose.model('User',UserSchema);

module.exports=User;
