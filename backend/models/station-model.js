/**
 * Created by GMI-PC on 19/03/2017.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Station Schema
 */
var StationSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    profileImageURL: {
        type: String,
        default: ''
    },
    pos: {
        latitude : {
            type: number,
            default: '',
            trim: true
        },
        longitude: {
            type: number,
            default: ''
        }

    }
});

mongoose.model('Station', StationSchema);
