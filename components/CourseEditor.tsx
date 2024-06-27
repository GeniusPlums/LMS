// components/CourseEditor.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCourse } from '../services/courseService';

interface Course {
  // Define your course structure here
  id?: string;
  title: string;
  // Add other properties as needed
}

const CourseEditor: React.FC = () => {
  const [course, setCourse] = useState<Course>({ title: '' });
  const dispatch = useDispatch();

  const handleSave = async () => {
    await saveCourse(course);
    dispatch({ type: 'UPDATE_COURSE', payload: course });
  };

  return (
    <div>
      <h2>Course Editor</h2>
      <input
        type="text"
        value={course.title}
        onChange={(e) => setCourse({ ...course, title: e.target.value })}
        placeholder="Course Title"
      />
      <button onClick={handleSave}>Save Course</button>
    </div>
  );
};

export default CourseEditor;