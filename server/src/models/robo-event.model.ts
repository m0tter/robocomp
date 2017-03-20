// file:    models/robo-event.model.ts
// author:  sjosephs
// date:    19/03/17

import { Model, Schema, Document, model } from 'mongoose';
import { RoboEventBase, Competition } from 'robocomp';

let CompetitionSchema = new Schema({
  name: String,
  type: Number,
  id: Schema.Types.ObjectId
});

let RoboEventSchema = new Schema({
  name: String,
  date: String,
  competitions: [CompetitionSchema],
  isCurrent: Boolean
});

export interface CompetitionDocument extends Competition, Document { }
export interface RoboEventDocument extends RoboEventBase, Document { }
export const RoboEventModel = model<RoboEventDocument>('Events', RoboEventSchema);
