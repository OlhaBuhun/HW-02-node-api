import Joi from "joi";
import { ListContacts, getContactById, addContact } from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import { createContactSchema } from "../schemas/contactsSchemas.js"

export const getAllContacts = async(req, res, next) => {
  try {
    const result = await ListContacts();
    res.json(result);
  }
  catch(error) {
    next(error);
  }
};

export const getOneContact = async(req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
  }
    res.json(result);
  }
  catch(error) {
    next(error);
  }
  
};

export const deleteContact = (req, res) => {};

export const createContact = async(req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    console.log(createContactSchema.validate(req.body));
    if(error){
      throw HttpError(400, error.message);
    }
    const result = await addContact(req.body);

    res.status(201).json(result);
  }
  catch(error){
    next(error); 
  }
};

export const updateContact = (req, res) => {};
