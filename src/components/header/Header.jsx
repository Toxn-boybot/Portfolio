import React from 'react';
import ME from '../../assets/me3.png';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

function Header() {
	return (
		<header>
			<div className='container header-container'>
				<h5>Hello I'm</h5>
				<h1>Mahmoud Saad</h1>
				<h5 className='text-light'>Front-End Web Developer</h5>
				<CTA />
        <HeaderSocials/>
				<div className='me'>
					<img src={ME} alt='' />
				</div>
				<a href='#contact' className='scroll-down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
