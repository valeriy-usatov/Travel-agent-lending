
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import autoCompleteFunc from "./modules/autoComlete.js";

autoCompleteFunc()

import { easepick } from '@easepick/bundle';

import swiper from "./modules/swiper-popular.js";
swiper();

// import swiperTestimonials from "./modules/swiper-testimonials.js";

// swiperTestimonials()

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
  });







// Scrollreveal

import scrollReveal from './modules/scrollReveal.js';
scrollReveal();