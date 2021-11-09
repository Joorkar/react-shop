import React from 'react';
import '@styles/PasswordRecovery.scss';

import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/send-email" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" placeholder="platzi@example.com" />
					<input type="submit" value="Submit" className="primary-button login-button" />
				</form>
				<input type="button" value="Back to log in" className="secondary-button input" />
			</div>
		</div>
	);
}

export default PasswordRecovery;