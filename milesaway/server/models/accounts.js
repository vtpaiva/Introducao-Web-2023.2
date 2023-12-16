import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    slug: {
        type: String,
        required: [true, 'A slug is required'],
        trim: true,
        index: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    cartFlights: [
        [
            {
                type: String, // ex. "new-york-los-angeles_1"
                required: true
            },
            {
                type: Number, // ex. 2
                required: true
            }
        ]
    ],
    cartStays: [
        [
            {
                type: String, // ex. "los-angeles-hotel-1"
                required: true
            },
            {
                type: Number, // ex. 2
                required: true
            }
        ]
    ]
});

export default mongoose.model('Account', schema);
