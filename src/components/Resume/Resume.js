import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Resume.module.css";
import { AtSign, Linkedin, GitHub, Phone, Paperclip, Calendar, MapPin } from "@aw-web-design/react-feather";

const Resume = forwardRef((props, ref) => {
    const information = props.information;
    const sections = props.sections;

    const [columns, setColumns] = useState([[], []]);
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");

    const containerRef = useRef();

    const info = {
        basicInfo: information[sections.basicInfo],
        workExp: information[sections.workExp],
        education: information[sections.education],
        achievement: information[sections.achievement],
        summary: information[sections.summary],
        other: information[sections.other],
        project: information[sections.project],
    }

    const getFormattedDate = (value) => {
        if (!value) return ("");
        const date = new Date(value);

        return (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    }

    const sectionDiv = {
        [sections.workExp]: (<div key={"workExp"}
            draggable onDragOver={() => setTarget(info.workExp.id)} onDragEnd={() => setSource(info.workExp.id)}
            className={`${styles.section} ${(info.workExp.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.workExp.details.map((item, index) => (
                        <div className={styles.item} key={item + index}>
                            {
                                item.title ?
                                <p className={styles.title}>{item.title}</p> : <div />
                            }
                            {
                                item.companyName ?
                                <p className={styles.subTitle}>{item.companyName}</p> : <div />
                            }
                            {
                                item.certificateLink ?
                                <a className={styles.link} href={item.certificationLink}><Paperclip /> {item.certificateLink}</a> : <div />
                            }

                            {
                                (item.startDate && item.endDate) ?
                                    <div className={styles.date}>
                                        <Calendar />{" "} {getFormattedDate(item.startDate)} {" - "} {getFormattedDate(item.endDate)}
                                    </div> : null
                            }

                            {
                                item.location ?
                                <p className={styles.date}><MapPin /> {item.location}</p> : <div />
                            }

                            {
                                (item.points && item.points.length > 0) ?
                                <ul className={styles.points}>
                                    {item.points.map((elem, index) => (<li className={styles.point} key={elem + index}>{elem}</li>))}
                                </ul> 
                                : <div />
                            }
                        </div>
                    ))
                }

            </div>
        </div>),
        [sections.project]: (<div key={"project"}
            draggable onDragOver={() => setTarget(info.project.id)} onDragEnd={() => setSource(info.project.id)}
            className={`${styles.section} ${(info.project.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.project.details.map((item, index) => (
                        <div className={styles.item} key={item.title + index}>
                            {
                                item.title ?
                                <p className={styles.title}>{item.title}</p> : <div />
                            }
                            {
                                item.deployedLink ?
                                <a className={styles.link}><Paperclip />{" "}{item.deployedLink}</a> : <div />
                            }
                            {
                                item.githubLink ?
                                <a className={styles.link}><GitHub />{" "}{item.githubLink}</a> : <div />
                            }
                            {
                                item.overview ?
                                <p className={styles.overview}>{item.overview}</p> : <div />
                            }
                            {
                                (item.points && item.points.length > 0) ?
                                (
                                    <ul className={styles.points}>
                                        {item.points.map((elem, index) => (<li className={styles.point} key={index + elem}>{elem}</li>))}
                                    </ul>
                                ) : <div />
                            }

                        </div>
                    ))
                }
            </div>
        </div>),
        [sections.education]: (<div key={"education"}
            draggable onDragOver={() => setTarget(info.education.id)} onDragEnd={() => setSource(info.education.id)}
            className={`${styles.section} ${(info.education.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.education.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.education.details.map((item, index) => (
                        <div className={styles.item} key={item.title + index}>
                            {
                                item.title ?
                                <p className={styles.title}>{item.title}</p> : <div />
                            }
                            {
                                item.collegeName ?
                                <p className={styles.subTitle}>{item.collegeName}</p> : <div />
                            }
                            {
                                (item.startDate && item.endDate) ?
                                <div className={styles.date}>
                                    <Calendar />{" "} {getFormattedDate(item.startDate)} {" - "} {getFormattedDate(item.endDate)}
                                </div>
                                : <div />
                            }
                        </div>
                    ))
                }
            </div>
        </div>),
        [sections.achievement]: (<div key={"achievement"}
            draggable onDragOver={() => setTarget(info.achievement.id)} onDragEnd={() => setSource(info.achievement.id)}
            className={`${styles.section} ${(info.achievement.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.achievement.sectionTitle}</div>
            <div className={styles.content}>
                {
                    (info.achievement.points && info.achievement.points.length > 0) ?
                    (
                        <ul className={styles.points}>
                            {info.achievement.points.map((elem, index) => (<li className={styles.point} key={index + elem}>{elem}</li>))}
                        </ul>
                    ) : <div />
                }
            </div>
        </div>),
        [sections.summary]: (<div key={"summary"}
            draggable onDragOver={() => setTarget(info.summary.id)} onDragEnd={() => setSource(info.summary.id)}
            className={`${styles.section} ${(info.summary.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.summary.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.summary.detail ?
                    <p className={styles.overview}>{info.summary.detail}</p>
                    : <div />
                }
            </div>
        </div>),
        [sections.other]: (<div key={"other"}
            draggable onDragOver={() => setTarget(info.other.id)} onDragEnd={() => setSource(info.other.id)}
            className={`${styles.section} ${(info.other.sectionTitle) ? null : styles.hidden}`}>
            <div className={styles.sectionTitle}>{info.other.sectionTitle}</div>
            <div className={styles.content}>
                {
                    info.other.detail ?
                    <p className={styles.overview}>{info.other.detail}</p>
                    : <div />
                }
            </div>
        </div>)
    }

    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;

        const tempColumns = [[...columns[0]], [...columns[1]]];

        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
            sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
            sourceColumnIndex = 1;
        }

        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
            targetRowIndex = tempColumns[1].findIndex((item) => item === target);
            targetColumnIndex = 1;
        }

        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex];
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

        setColumns(tempColumns);
    }

    useEffect(() => {
        setColumns([
            [sections.project, sections.education, sections.summary],
            [sections.workExp, sections.achievement, sections.other]
        ])
    }
        , [])
    useEffect(() => {
        swapSourceTarget(source, target);
    }, [source])
    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;

        container.style.setProperty('--color', props.activeColor);
    }, [props.activeColor])

    return (
        <div ref={ref}>
            <div ref={containerRef} className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.heading}>{info.basicInfo.detail.name}</p>
                    <p className={styles.subHeading}>{info.basicInfo.detail.title}</p>

                    <div className={styles.links}>
                        {
                            info.basicInfo.detail.email ?
                            <a className={styles.link} type="email">
                                <AtSign /> {info.basicInfo.detail.email}
                            </a>
                            : <div />
                        }
                        {
                            info.basicInfo.detail.phone ?
                            <a className={styles.link}>
                                <Phone /> {info.basicInfo.detail.phone}
                            </a>
                            : <div />
                        }
                        {
                            info.basicInfo.detail.linkedinLink ?
                            <a className={styles.link}>
                                <Linkedin /> {info.basicInfo.detail.linkedinLink}
                            </a>
                            : <div />
                        }
                        {
                            info.basicInfo.detail.githubLink ?
                            <a className={styles.link}>
                                <GitHub /> {info.basicInfo.detail.githubLink}
                            </a>
                            : <div />
                        }
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.col1}>{columns[0].map((item) => (sectionDiv[item]))}</div>
                    <div className={styles.col2}>{columns[1].map((item) => (sectionDiv[item]))}</div>
                </div>
            </div>
        </div>
    );
});

export default Resume;