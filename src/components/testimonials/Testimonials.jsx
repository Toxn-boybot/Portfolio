import React from 'react';
import './testimonials.css';
import Av1 from '../../assets/avatar1.jpg';
import Av2 from '../../assets/avatar2.jpg';
import Av3 from '../../assets/avatar3.jpg';
import Av4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
	return (
		<section id='testimonials'>
			<h5>Reviews From Clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className='container testimonials-container'
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className='testimonial'>
					<div className='client-avatar'>
						<img src={Av1} alt='' />
					</div>
					<h5 className='client-name'>Tina Snow</h5>
					<small className='client-review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
						eligendi sed voluptatibus fugiat vel ad, consequuntur voluptas
						molestiae impedit quis animi sint omnis delectus iure natus, in
						sequi dolorem at?
					</small>
				</SwiperSlide>
				<SwiperSlide className='testimonial'>
					<div className='client-avatar'>
						<img src={Av2} alt='' />
					</div>
					<h5 className='client-name'>Shatta Wale</h5>
					<small className='client-review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
						eligendi sed voluptatibus fugiat vel ad, consequuntur voluptas
						molestiae impedit quis animi sint omnis delectus iure natus, in
						sequi dolorem at?
					</small>
				</SwiperSlide>
				<SwiperSlide className='testimonial'>
					<div className='client-avatar'>
						<img src={Av3} alt='' />
					</div>
					<h5 className='client-name'>Kwame Despite</h5>
					<small className='client-review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
						eligendi sed voluptatibus fugiat vel ad, consequuntur voluptas
						molestiae impedit quis animi sint omnis delectus iure natus, in
						sequi dolorem at?
					</small>
				</SwiperSlide>
				<SwiperSlide className='testimonial'>
					<div className='client-avatar'>
						<img src={Av4} alt='' />
					</div>
					<h5 className='client-name'>Nana Ama McBrown</h5>
					<small className='client-review'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
						eligendi sed voluptatibus fugiat vel ad, consequuntur voluptas
						molestiae impedit quis animi sint omnis delectus iure natus, in
						sequi dolorem at?
					</small>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Testimonials;
