import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('#testimonials-col-1', {
		direction: "vertical",
		slidesPerView: 4,
		spaceBetween: 32,
	});
}

export default swiperFunc; 