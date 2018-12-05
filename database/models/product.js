import mongoose from 'mongoose';
import validator from 'validator';

let productSchema = new mongoose.Schema({
    store: {
        type: String,
        required: true,
        trim: true,
        enum: ['Curated', 'Amazon', 'Macys', 'Sephora']
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    item_url: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: {
        type: String,
        required: true,
        trim: true
    },
    picture_urls: {
        type: Array,
        of: String,
        required: true,
        validate: (value) => {
            for (let entry in value) {
                if(!validator.isURL(entry)) {
                    return false;
                }
            }
            return true;
        }
    },
    price: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    weight: {
        quantity: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    },
    custom_attributes: {
        type: Map,
        of: String
    },
    details_html: {
        type: String,
        required: true,
        trim: true
    }
});

// The first param is the collection name this model represents
module.exports = mongoose.model('veniqa_curated_products', productSchema);