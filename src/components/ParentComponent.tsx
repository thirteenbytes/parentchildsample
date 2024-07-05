import { useState } from "react";
import { initialStudents } from "../data/initialData";
import { Student } from "../data/types";
import ActiveStudents from "./ActiveStudents";
import NonActiveStudents from "./NonActiveStudents";

export default function ParentComponent() {
    const [students, setStudents] = useState<Student[]>(initialStudents);

    const toggleStudentStatus = (id: number) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === id ? { ...student, active: !student.active } : student
            )
        );
    };

    const activeStudentList = students.filter((student) => student.active);
    const nonActiveStudentList = students.filter((student) => !student.active);

    return (
        <div>
            <h1>Active Students</h1>
            <ActiveStudents students={activeStudentList} toggleStatus={toggleStudentStatus} />
            <h1>Non-Active Students</h1>
            <NonActiveStudents students={nonActiveStudentList} toggleStatus={toggleStudentStatus} />
        </div>
    );
}