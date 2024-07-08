import { HStack, Button, Text } from "@chakra-ui/react";
import { Student } from "../data/types";

interface IProps {
    student: Student;    
}

export default function NonActiveStudent({ student }: IProps) {
    return (
        <HStack>
            <Text>{student.name}</Text>
            <Button>Set as Active</Button>
        </HStack>            
    )
}