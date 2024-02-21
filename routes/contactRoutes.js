const express=require('express');
const router=express.Router();

const {updateContact,
    deleteContact,
    getContactbyid,
    createContact,
    getContacts
    } = require("../controllers/contactControllers");


router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContactbyid);

router.route('/delete/:id').delete(deleteContact);

router.route('/:id').put(updateContact);

module.exports = router;