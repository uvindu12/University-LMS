import React from 'react';

interface Assignment {
    id: number;
    title: string;
    dueDate: string;
    description: string;
}

interface AssignmentListProps {
    assignments: Assignment[];
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignments }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            <ul className="list-disc pl-5">
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="mb-2">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p>Due Date: {assignment.dueDate}</p>
                        <p>{assignment.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignmentList;