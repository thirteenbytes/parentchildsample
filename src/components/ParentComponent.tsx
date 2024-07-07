import { useState } from "react";
import { initialStudents } from "../data/initialData";
import { Student, StudentType } from "../data/types";
import ActiveStudents from "./ActiveStudents";
import NonActiveStudents from "./NonActiveStudents";
import { TabPanel } from "@chakra-ui/react";

export default function ParentComponent() {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    //const [students, setStudents] = useState<Student[]>(initialStudents);

    const handleTabsChange = (index: number) => {
        setSelectedTab(index);
    };

    const studentTypeKeys = Object.keys(StudentType).filter(key => isNaN(Number(key)));

    const addTabPanels = () => {
        const tabs = [];
        studentTypeKeys.forEach(enumKey => {
            tabs.push(
                <TabPanel key = {enumKey}>
                    
                </TabPanel>
            );
        });

    };

    /* const toggleStudentStatus = (id: number) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === id ? { ...student, active: !student.active } : student
            )
        );
    };

    const activeStudentList = students.filter((student) => student.active);
    const nonActiveStudentList = students.filter((student) => !student.active); */

    return (
    );
}