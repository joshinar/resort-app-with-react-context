import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<Hero>
			<Banner title="404" subTitle="Page Not Found">
				<Link to="/" className="btn-primary">
					Return Home
				</Link>
			</Banner>
		</Hero>
	);
};

export default Error;
