
// importing contact model
const Contact = require("../models/contactModel");

const asyncHandler = require("express-async-handler");


// @desc Get all Contacts
// @route Get /api/contacts
// @access public  

const getContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.json({contacts});
});

// @desc Post Contact
// @route post /api/contact
// @access public 

const createContact = asyncHandler(async (req,res)=>{
    // console.log(req.body);
    const{name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);

        // Throwing an error in js
        throw new Error('All fields required');
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    console.log(req.body);
    res.json({contact});
});

// @desc Get Contact by id
// @route Get /api/contact/id
// @access public 

const getContactbyid = asyncHandler(async (req,res)=>{
    // res.json({message:`get id contact ${req.params.id}`});
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not Found!');
    }
    res.status(200).json(contact);    
});


// @desc Del Contact by id
// @route Del /api/contact/id
// @access public 

const deleteContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not Found!');
    }
    // console.log(contact);
    await Contact.remove();
    res.status(200).json(contact);
});




// @desc Update Contact by id
// @route Update /api/contact/id
// @access public 

const updateContact= asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not Found!');
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});


module.exports = {getContacts,updateContact,createContact,deleteContact,getContactbyid};