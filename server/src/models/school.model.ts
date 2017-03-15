import { Model, Schema, Document, model } from 'mongoose';
import { SchoolBase } from 'robocomp';

let SchoolSchema = new Schema({
  name: String,
  contactName: String,
  contactEmail: String,
  contactNumber: String,
  address: String,
  isCurrent: Boolean
});

export interface SchoolDocument extends SchoolBase, Document { }
export var SchoolModel = model<SchoolDocument>('Schools', SchoolSchema);