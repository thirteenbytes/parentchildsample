import { Student } from "../data/types";

interface IProps {
    student: Student;
    toggleStatus: (id: number) => void;
}

export default function ActiveStudent({ student, toggleStatus }: IProps) {
    return (
        <div>
            <span>{student.name}</span>
            <button onClick={() => toggleStatus(student.id)}>Set as Non-Active</button>
        </div>
    )
}