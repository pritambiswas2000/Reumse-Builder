import React, { useEffect, useState, useRef } from "react";
import styles from "./Body.module.css";
import { Download } from "@aw-web-design/react-feather";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";

function Body() {
    const colors = ["#B762C1", "#83BD75", "#EEB0B0", "#E5CB9F", "#239ce2"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };

    const resumeRef = useRef();

    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        }
    });

    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item) =>
                        <span key={item} className={`${styles.color} ${(activeColor === item) ? styles.active : null}`}
                            style={{ backgroundColor: item }}
                            onClick={() => setActiveColor(item)}
                        />
                    )}
                </div>
                <ReactToPrint
                    trigger={() => {
                        return <button>Download <Download /></button>;
                    }}
                    content={() => resumeRef.current}
                />
            </div>
            <div className={styles.main}>
                <Editor
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}
                />
                <Resume ref={resumeRef} information={resumeInformation} sections={sections} activeColor={activeColor} />
            </div>
            <p className={styles.footer}>Made with 🖤 by Pritam Biswas</p>
        </div>
    );
}

export default Body;
