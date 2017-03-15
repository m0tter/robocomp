import { Model, Schema, Document, model } from 'mongoose';
import { CompBase } from 'robocomp';

let CompSchema = new Schema ({
    name: String,
    type: String,
    teams: Array,
    date: String
});

export interface CompDocument extends CompBase, Document { }
export var CompModel = model<CompDocument>('Comps', CompSchema);