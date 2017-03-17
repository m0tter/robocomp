//Author: Mason
import { Model, Schema, Document, model } from 'mongoose';
import { RoboEvent } from 'robocomp';

let RoboSchema = new Schema ({
    name: String,
    date: String,
    comps: [String],
    isCurrent: Boolean
});

export interface RoboDocument extends RoboEvent, Document { }
export var EventModel = model<RoboDocument>('RoboEvent', RoboSchema);