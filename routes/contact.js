let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create the reference to the db schema
let contact = require('../models/contact');

/*Get Contact List page - READ Operation */
router.get('/',(req, res, next) =>{
    contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else{
            console.log(contactList);

            /*
            res.render('contact/index', {
                title: 'ContactList',
                contactList: contactList
            });
            */
        }
    })
})

module.exports = router;