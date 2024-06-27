// services/courseService.ts
import { connectToDatabase } from '../lib/mongodb';

export async function createCourse(courseData) {
  const { db } = await connectToDatabase();
  const result = await db.collection('courses').insertOne(courseData);
  return result.ops[0];
}

// Implement other CRUD operations
// services/courseService.ts
export const saveCourse = async (course: Course) => {
    // Implementation of saveCourse
  };