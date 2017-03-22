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
 * PosBus Schema
 */
var PosBusSchema = new Schema({

    latitude : {
        type: number,
        default: '',
        trim: true
    },
    longitude: {
        type: number,
        default: ''
    },
    bus: {
        type: Schema.ObjectId,
        ref: 'Bus'
    }
});

mongoose.model('PosBus', PosBusSchema);
