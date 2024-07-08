import { useEffect, useState } from "react";
import { Student, StudentType } from "../data/types";
import ActiveStudent from "./ActiveStudent";
import { initialStudents } from "../data/initialData";

interface IProps {
    studentType: StudentType;    
}



export default function ActiveStudents({ studentType }: IProps) {
    const [students, setStudents] = useState<Student[]>(initialStudents);

    useEffect(() => {
       const loadStudents = () => {        
        
        
        setStudents(students.filter(student => student.studentType === studentType && student.active));
       }

       loadStudents();
    }, [studentType]);

    return (
        <div>
            {students.map((student) => (
                <ActiveStudent key={student.id} student={student} />
            ))}
        </div>)
}