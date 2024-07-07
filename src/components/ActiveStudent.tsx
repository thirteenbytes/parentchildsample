import { Student } from "../data/types";

interface IProps {
    student: Student;    
}

export default function ActiveStudent({ student }: IProps) {
    return (
        <div>
            <span>{student.name}</span>
            <button>Set as Non-Active</button>
        </div>
    )
}