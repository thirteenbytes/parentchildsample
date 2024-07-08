import { HStack, Text, Button } from "@chakra-ui/react";
import { Student } from "../data/types";

interface IProps {
    student: Student;    
}

export default function ActiveStudent({ student }: IProps) {
    return (
        <HStack>
            <Text>{student.name}</Text>
            <Button>Set as Active</Button>
        </HStack>            
    )
}