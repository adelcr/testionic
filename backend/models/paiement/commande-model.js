/**
 * Created by mohamedchaar on 22/03/17.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * CommandSchema Schema
 */
var Date = new Schema({
  Date: date,
  Heure:date,

});
var CommandSchema = new Schema({
    Idguichetier:{
        type: Schema.ObjectId,
        ref: 'guichetier'
    },
    Lignes:[{
        type: Schema.ObjectId,
        ref: 'Ligne',
        index: true
    }],
    IdComptePaiement: {
        type: number,
        index: true },
    Montant:{
        type: number,
        index: true },
    IdTicket:{
        type: Schema.ObjectId,
        ref: 'Ticket',
        index: true },
    DatePaiement:{
        type:[Date],
        index:true},
    DateEcheance:{
        type:[Date],
        index:true}

});
module.exports = mongoose.model('Command', CommandSchema);
