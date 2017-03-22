
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
 * Ligne Schema
 */
var LigneSchema = new Schema({

    title : {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    stations  : [Station]
});

mongoose.model('Ligne', LigneSchema);
