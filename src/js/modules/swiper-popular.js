import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 32,
		navigation: {
			nextEl: '#popularNext',
			prevEl: '#popularPrev',
		},
		breakpoints: {
			425: {
				slidesPerView: 2,
				spaceBetween: 32,
			  },

			// 640: {
			//   slidesPerView: 2,
			//   spaceBetween: 32,
			// },
			768: {
			  slidesPerView: 4,
			  spaceBetween: 32,
			},
			
		  },
	});
}

export default swiperFunc; 