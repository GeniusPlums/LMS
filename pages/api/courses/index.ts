// pages/api/courses/index.ts
import { getCourses, createCourse } from '../../../services/courseService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const courses = await getCourses();
    res.status(200).json(courses);
  } else if (req.method === 'POST') {
    const newCourse = await createCourse(req.body);
    res.status(201).json(newCourse);
  }
}