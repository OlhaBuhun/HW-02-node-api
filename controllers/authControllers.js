import bcrypt from "bcryptjs";

import User from "../models/User.js";

import HttpError from "../helpers/HttpError.js";

import { ctrlWrapper } from "../decorators/index.js";

const signup = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		throw HttpError(409);
	}
	const hashPassword = await bcrypt.hash(password, 10);
	const newUser = await User.create({ ...req.body, password: hashPassword });

	res.status(201).json({
		email: newUser.email,
	});
};

const signin = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw HttpError(401);
	}
	const passwwordCompare = await bcrypt.compare(password, user.password);
	if (!passwwordCompare) {
		throw HttpError(401);
	}

	const token = "sjdjd.23nd.345";

	res.json({
		token,
	});
};

export default {
	signup: ctrlWrapper(signup),
	signin: ctrlWrapper(signin),
};
