import { useEffect, useState } from "react";
import { initialStudents } from "../data/initialData";
import { Student, StudentType } from "../data/types";
import NonActiveStudent from "./NonActiveStudent";

interface IProps {
    studentType: StudentType;
}

export default function NonActiveStudents({studentType }: IProps) {
    const [students, setStudents] = useState<Student[]>(initialStudents);
    
    useEffect(() => {
        setStudents(students.filter(student => student.studentType === studentType));
    });

    return (
        <div>
            {students.map((student) => (
                <NonActiveStudent key={student.id} student={student} />
            ))}
        </div>)
}