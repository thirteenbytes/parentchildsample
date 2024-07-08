import { useState } from "react";
import { initialStudents } from "../data/initialData";
import { Student, StudentType } from "../data/types";
import ActiveStudents from "./ActiveStudents";
import NonActiveStudents from "./NonActiveStudents";
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { JSX } from "react/jsx-runtime";

export default function ParentComponent() {
    const [selectedTab, setSelectedTab] = useState<number>(0);    

    const handleTabsChange = (index: number) => {
        setSelectedTab(index);
    };

    const studentTypeKeys = Object.keys(StudentType)
        .filter((key) => isNaN(Number(key)))
        .map((name) => name as keyof typeof StudentType);

    const addTabPanels = () => {
        const tabs: JSX.Element[] = [];
        studentTypeKeys.forEach(enumKey => {
            tabs.push(
                <TabPanel key={enumKey}>
                    <HStack w="100%" spacing="20px">
                        <Box flex="1" w="49%">
                            <ActiveStudents studentType={StudentType[enumKey]} />
                        </Box>
                        <Box flex="1" w="49%">
                            <NonActiveStudents studentType={StudentType[enumKey]} />
                        </Box>
                    </HStack>
                </TabPanel>
            );
        });
        return tabs
    };

    const addTabs = () => {
        const tabs: JSX.Element[] = [];

        studentTypeKeys.map(enumKey => {
            tabs.push(<Tab key={enumKey}>{enumKey}</Tab>);
        });
        return tabs;
    }

    return (
        <Tabs
            isLazy
            onChange={(index) => handleTabsChange(index)}
            index={selectedTab}
            size="lg"
            isFitted
            style={{ borderRadius: 0 }}
            variant="unstyled">
            <TabList>
                {addTabs()}
            </TabList>
            <TabPanels>{addTabPanels()}</TabPanels>
        </Tabs>
    );
}

