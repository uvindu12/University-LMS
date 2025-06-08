import React from 'react';
import { useRouter } from 'next/router';

const CoursePage = () => {
    const router = useRouter();
    const { courseId } = router.query;

    return (
        <div>
            <h1>Course Details for Course ID: {courseId}</h1>
            <p>Here you can find all the information related to the course.</p>
            {/* Additional course details and components can be added here */}
        </div>
    );
};

export default CoursePage;