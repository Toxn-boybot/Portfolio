import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_vb0pt0d',
				'template_u01u9yr',
				form.current,
				'Xn4UToDDURhV78o1V'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		toast.success('Message Has Been Sent!', {
			position: 'top-right',
			autoClose: 2500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact-container'>
				<div className='contact-options'>
					<article className='contact-option'>
						<MdOutlineEmail className='contact-option-icon' />
						<h4>Email</h4>
						<h5>mahmoud.saad3911@gmail.com</h5>
						<a href='mailto:mahmoud.saad3911@gmail.com'>Send a message</a>
					</article>
					<article className='contact-option'>
						<RiMessengerLine className='contact-option-icon' />
						<h4>Messenger</h4>
						<h5>Mahmoud Saad</h5>
						<a
							href='https://m.me/surplus.killer'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact-option'>
						<BsWhatsapp className='contact-option-icon' />
						<h4>WhatsApp</h4>
						<h5>+201016236987</h5>
						<a
							href='https://api.whatsapp.com/send?phone=201016236987'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article>
				</div>
				{/* End of Contact Options */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' />
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
					<ToastContainer
						position='top-right'
						autoClose={2500}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
						transition={Slide}
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
