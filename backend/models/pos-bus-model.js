/**
 * Created by GMI-PC on 19/03/2017.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * PosBus Schema
 */
var PosBusSchema = new Schema({

    latitude : {
        type: number,
        default: '',
        index: true,
        trim: true
    },
    longitude: {
        type: number,
        index: true,
        default: ''
    },
    bus: {
        type: Schema.ObjectId,
        index: true,
        ref: 'Bus'
    }
});

module.exports = mongoose.model('PosBu', PosBusSchema);
