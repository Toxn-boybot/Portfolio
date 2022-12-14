import React from 'react';
import './portfolio.css';
import HIMS from '../../assets/hims.png';
import Fiverr from '../../assets/fiverr.png';
import WeatherApp from '../../assets/weatherapp.png';
import Dashboard from '../../assets/dashboard.png'


function portfolio() {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio-container'>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={HIMS} alt='' />
					</div>
					<h3>HIMS</h3>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/HIMS'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/HIMS/'
							className='btn btn-primary'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Fiverr} alt='' />
					</div>
					<h3>Fiverr</h3>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Fiverr'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Fiverr/'
							className='btn btn-primary'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={WeatherApp} alt='' />
					</div>
					<h3>Weather App</h3>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Weather-App'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Weather-App/'
							className='btn btn-primary'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Dashboard} alt='' />
					</div>
					<h3>Admin Dashboard</h3>
					<div className='portfolio-item-cta'>
						<a
							href='https://github.com/Toxn-boybot/Dashboard'
							className='btn'
							target='_blank'
						>
							Github
						</a>
						<a
							href='https://toxn-boybot.github.io/Dashboard/'
							className='btn btn-primary'
							target='_blank'
						>
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default portfolio;
