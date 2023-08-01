import { number, date, object, string } from 'zod';
import validator from 'validator';

export const reservationSchema = object({
  firstName: string().min(1),
  lastName: string().min(1),
  email: string().email().min(1),
  // time: string({ required_error: 'The Time is required' }).min(1),
  partySize: string(),
  phoneNumber: string({}).min(1),
  // .refine(validator.isMobilePhone),
  // date: date({
  //   required_error: 'Please select a date',
  //   invalid_type_error: "That's not a date!",
  // }),
  // allergies: string()
  //   .refine(i => i.length <= 255, {
  //     message: 'Your allergies cannot be more than 255 characters',
  //   })
  //   .optional(),
});
