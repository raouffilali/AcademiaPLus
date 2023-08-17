/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface IMessage {
  user: any;
  chatRoom: any;
  content: string;
  timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  chatRoom: { type: Schema.Types.ObjectId, ref: "ChatRoom", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model<IMessage>("Message", MessageSchema);
