import { Document } from "mongoose";

export interface Permissions extends Document {
    readonly id?: string | number;
    readonly title: string
}