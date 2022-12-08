import React from 'react';
import './about.css';
import ME from '../../assets/me1.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about-container'>
				<div className='about-me'>
					<div className='about-me-img'>
						<img src={ME} alt='About Image' />
					</div>
				</div>
				<div className='about-content'>
					<div className='about-cards'>
						<article className='about-card'>
							<FaAward className='about-icon' />
							<h5>Experience</h5>
							<small>2+ years working</small>
						</article>
						<article className='about-card'>
							<FiUsers className='about-icon' />
							<h5>Clients</h5>
							<small>50+ worldwide</small>
						</article>
						<article className='about-card'>
							<VscFolderLibrary className='about-icon' />
							<h5>Projects</h5>
							<small>5 Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
						itaque tempora fugit! Voluptate, commodi veniam velit dolore
						voluptas sequi itaque ut eum ullam neque, quaerat explicabo earum
						fuga labore totam.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
