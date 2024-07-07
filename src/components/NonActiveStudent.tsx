import { Student } from "../data/types";

interface IProps {
    student: Student;    
}

export default function NonActiveStudent({ student }: IProps) {
    return (
        <div>
            <span>{student.name}</span>            
            <button>Set as Active</button>
        </div>
    )
}