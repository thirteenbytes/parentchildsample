import { Student } from "../data/types";
import NonActiveStudent from "./NonActiveStudent";

interface IProps {
    students: Student[];
    toggleStatus: (id: number) => void;
}

export default function NonActiveStudents({ students, toggleStatus }: IProps) {
    return (
        <div>
            {students.map((student) => (
                <NonActiveStudent key={student.id} student={student} toggleStatus={toggleStatus} />
            ))}
        </div>)
}