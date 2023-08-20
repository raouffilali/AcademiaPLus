/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';

export interface IMessage {
    sender: string;
    content: string;
    timestamp: Date;
}

export interface IChatRoom {
    course: any;
    participants: Array<string>;
    messages: Array<IMessage>;
}

const ChatRoomSchema = new Schema<IChatRoom>({
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{
        sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }]
});

export default model<IChatRoom>('ChatRoom', ChatRoomSchema);
