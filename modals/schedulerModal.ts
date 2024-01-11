import  {Schema, model } from 'mongoose';

interface Scheduler {
    title: string;
    description: string;
    subject: string;
    frequency: string;
    repeat?: string;
    time: string;
}

const schedulerSchema = new Schema<Scheduler>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    subject: { type: String, required: true },
    frequency: { type: String, required: true },
    repeat: { type: String },
    time: { type: String, required: true },
}, { timestamps: true });

const EmailSchedulerModel= model('EmailScheduler', schedulerSchema);

export default EmailSchedulerModel;
