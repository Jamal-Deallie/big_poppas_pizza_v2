import { getModelForClass, prop } from '@typegoose/typegoose';

export class Reservations {
  @prop()
  date: Date;
  @prop({ required: true })
  time: string;
  @prop({ required: true })
  firstName: string;
  @prop({ required: true })
  lastName: string;
  @prop({ required: true })
  email: string;
  @prop({ required: true })
  partySize: number;
}

const ReservationModel = getModelForClass(Reservations);
export default ReservationModel;
