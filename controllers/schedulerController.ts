import { Request, Response } from "express";
import EmailSchedulerModel from "../modals/schedulerModal";
import mongoose from "mongoose";

export const createScheduler = async (req: Request, res: Response) => {
  try {
    if (typeof req.body !== "object" || req.body === null) {
      return res
        .status(400)
        .json({ msg: "Invalid request body, must be an object" });
    }
    const { title, description, subject, frequency, time } = req.body;
    if (!title || !description || !subject || !frequency || !time) {
      return res
        .status(400)
        .json({ msg: "Missing required fields in the request body" });
    }
    const scheduleData = new EmailSchedulerModel({
      title,
      description,
      subject,
      frequency,
      time,
      repeat: req.body.repeat,
    });
    console.log("Schedule Data:", scheduleData);
    const saveData = await scheduleData.save();
    res.status(200).json(saveData);
  } catch (err) {
    console.error("Error:", err);
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).send({ message: `Internal server error.\n\n${err}` });
  }
};

export const updateScheduler = async (req: Request, res: Response) => {
  try {
    const { title, description, subject, frequency, time, repeat } = req.body;
    const schedulerId = req.params.id;
    // Checking if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(schedulerId)) {
      return res.status(400).json({ msg: "Invalid scheduler ID" });
    }
    const updatedScheduler = await EmailSchedulerModel.findByIdAndUpdate(
      schedulerId,
      {
        title,
        description,
        subject,
        frequency,
        time,
        repeat,
      },
      { new: true }
    );

    // Checking if the scheduler with the provided ID exists
    if (!updatedScheduler) {
      return res.status(404).json({ msg: "Scheduler not found" });
    }
    res.status(200).json(updatedScheduler);
  } catch (err) {
    console.error("Error:", err);
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: err.message });
    }

    res.status(500).send({ message: `Internal server error.\n\n${err}` });
  }
};

export const allSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await EmailSchedulerModel.find();
    // console.log("Schedules:", schedules);
    res.status(200).json(schedules);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: `Internal server error.\n\n${err}` });
  }
};

export const searchSchedules = async (req: Request, res: Response) => {
  try {
    const { id, title } = req.query;
    if (!id && !title) {
      return res
        .status(400)
        .json({ msg: "Provide either 'id' or 'searchText' parameter" });
    }
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id as string)) {
        return res.status(400).json({ msg: "Invalid ID format" });
      }
      const scheduleById = await EmailSchedulerModel.findById(id);
      return res.status(200).json(scheduleById || {});
    }
    if (title) {
      const filteredSchedules = await EmailSchedulerModel.find({
        title: { $regex: new RegExp(title as string, "i") },
      });

      return res.status(200).json(filteredSchedules);
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: `Internal server error.\n\n${err}` });
  }
};

export const deleteSchedules = async (req: Request, res: Response) => {
  try {
    const scheduleId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(scheduleId)) {
      return res.status(400).json({ msg: "Invalid schedule ID" });
    }
    const deletedSchedule = await EmailSchedulerModel.findByIdAndDelete(
      scheduleId
    );
    if (!deletedSchedule) {
      return res.status(404).json({ msg: "Schedule not found" });
    }
    res.status(200).json({ msg: "Schedule deleted successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: `Internal server error.\n\n${err}` });
  }
};
