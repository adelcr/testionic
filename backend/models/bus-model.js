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
 * Bus Schema
 */
var BusSchema = new Schema({

    Description: {
        type: String,
        default: '',
        index: true,
        required: 'Descrition cannot be blank'
    },
    Dispo: {
        type: Boolean,
        index: true
    },
    NbPassager: {
        type: Number,
        index: true
    }
});

module.exports = mongoose.model('Bu', BusSchema);
