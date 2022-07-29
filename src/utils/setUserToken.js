import jwt from 'jsonwebtoken';

export const setUserToken = (user, res) => {
	const { nickname, email, provider } = user;
	const token = jwt.sign({ nickname, email, provider }, process.env.JWT_SECRET);
	res.cookie('jwtToken', token, { httpOnly: true });
	res.redirect(`http://localhost:3000/EmptyPage/`);
};
