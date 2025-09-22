import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SensorDataDocument = HydratedDocument<SensorData>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
@Schema({ timestamps: true })
export class SensorData {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Prop({ required: true })
  deviceId: string;

  @Prop({ required: true })
  siteId: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Prop({ required: true })
  ts: Date;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Prop({ type: Object, required: true })
  metrics: {
    temperature: number;
    humidity: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const SensorDataSchema = SchemaFactory.createForClass(SensorData);
