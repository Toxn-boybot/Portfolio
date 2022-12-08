import React from 'react';
import './portfolio.css';
import HIMS from '../../assets/hims.png';
import Fiverr from '../../assets/fiverr.png';
import WeatherApp from '../../assets/weatherapp.png';
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
					<h3>This is a portfolio item title</h3>
					<div className='portfolio-item-cta'>
						<a href='#' className='btn' target='_blank'>
							Github
						</a>
						<a href='#' className='btn btn-primary' target='_blank'>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={Fiverr} alt='' />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className='portfolio-item-cta'>
						<a href='#' className='btn' target='_blank'>
							Github
						</a>
						<a href='#' className='btn btn-primary' target='_blank'>
							Live Demo
						</a>
					</div>
				</article>
				<article className='portfolio-item'>
					<div className='portfolio-item-img'>
						<img src={WeatherApp} alt='' />
					</div>
					<h3>This is a portfolio item title</h3>
					<div className='portfolio-item-cta'>
						<a href='#' className='btn' target='_blank'>
							Github
						</a>
						<a href='#' className='btn btn-primary' target='_blank'>
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</section>
	);
}

export default portfolio;
