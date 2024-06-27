// pages/courses/[id].ts
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCourse } from '../../services/courseService';

const CoursePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      getCourse(id).then(setCourse);
    }
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    // Render course content
  );
};

export default CoursePage;