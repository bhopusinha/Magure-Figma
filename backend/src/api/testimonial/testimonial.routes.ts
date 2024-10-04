
import {Router} from 'express';
import { createtestimonial, getTestimonial } from './testimonial.controller';

const testiRouter=Router();


testiRouter.route('/').get(getTestimonial);
testiRouter.route('/add').post(createtestimonial);


export default testiRouter;