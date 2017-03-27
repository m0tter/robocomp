import { Model, Schema, Document, model } from 'mongoose';
import { SchoolBase } from 'robocomp';

let TeamsSchema = new Schema ({
  name: String,
  isCurrent: Boolean,
  id: Schema.Types.ObjectId
});

let SchoolSchema = new Schema({
  name: String,
  contactName: String,
  contactEmail: String,
  contactNumber: String,
  address: String,
  teams: [TeamsSchema],
  isCurrent: Boolean
});

export interface SchoolDocument extends SchoolBase, Document { }
export var SchoolModel = model<SchoolDocument>('Schools', SchoolSchema);

export interface TeamsDocument extends SchoolBase, Document { }
export var TeamsModel = model<TeamsDocument>('Teams', TeamsSchema);