import { Student } from "../data/types";
import ActiveStudent from "./ActiveStudent";

interface IProps {
    students: Student[];
    toggleStatus: (id: number) => void;
}

export default function ActiveStudents({ students, toggleStatus }: IProps) {
    return (
        <div>
            {students.map((student) => (
                <ActiveStudent key={student.id} student={student} toggleStatus={toggleStatus} />
            ))}
        </div>)
}