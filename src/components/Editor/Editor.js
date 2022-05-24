import React, { useEffect, useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./Editor.module.css";
import { X } from "@aw-web-design/react-feather";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Editor(props) {
    const sections = props.sections;
    const information = props.information;

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    );
    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [values, setValues] = useState({
        name: activeInformation.detail ? activeInformation.detail.name : "",
        title: activeInformation.detail ? activeInformation.detail.tile : "",
        linkedinLink: activeInformation.detail ? activeInformation.detail.linkedin : "",
        githubLink: activeInformation.detail ? activeInformation.detail.github : "",
        email: activeInformation.detail ? activeInformation.detail.email : "",
        phone: activeInformation.detail ? activeInformation.detail.phone : "",
    });

    const handlePoints = (value, index) => {
        const tempValues = { ...values };
        if (tempValues.points) tempValues.points[index] = value;
        else {
            tempValues.points = [];
            if (tempValues.points.length <= index) tempValues.points.push(value);
            else tempValues.points[index] = value;
        }
        setValues(tempValues);
    }

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. Frontend developer"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter company name eg. Samsung"
                    value={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, companyName: event.target.value }))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificateLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, certificateLink: event.target.value }))
                    }
                />
                <InputControl
                    label="Location"
                    placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, location: event.target.value }))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePoints(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePoints(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePoints(event.target.value, 2)}
                />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. Resume Builder"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="Overview"
                placeholder="Enter basic overview of project"
                value={values.overview}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, overview: event.target.value }))
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter deployed link of project"
                    value={values.deployedLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, deployedLink: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter github link of project"
                    value={values.githubLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, githubLink: event.target.value }))
                    }
                />
            </div>
            <div className={styles.column}>
                <label>Enter project description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePoints(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePoints(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePoints(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePoints(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. B.E"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/school"
                value={values.collegeName}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, collegeName: event.target.value }))
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Pritam Biswas"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg. Full Stack developer"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    placeholder="Enter your linkedin profile link"
                    value={values.linkedinLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, linkedinLink: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter your github profile link"
                    value={values.githubLink}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, githubLink: event.target.value }))
                    }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl
                    label="Enter phone"
                    placeholder="Enter your phone number"
                    value={values.phone}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, phone: event.target.value }))
                    }
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePoints(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePoints(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePoints(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePoints(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(event) => (
                    setValues((prev) => ({ ...prev, summary: event.target.value }))
                )}
            />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                placeholder="Enter something"
                value={values.something}
                onChange={(event) => (
                    setValues((prev) => ({ ...prev, something: event.target.value }))
                )}
            />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievement: return achievementsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;
            default: return null;
        }
    }

    const handleSubmission = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedinLink: values.linkedinLink,
                    githubLink: values.githubLink,
                    email: values.email,
                    phone: values.phone
                };
                props.setInformation((prev) => ({
                    ...prev, [sections.basicInfo]:
                    {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle: sectionTitle
                    }
                }));
                break;
            }

            case sections.workExp: {
                const tempDetail = {
                    title: values.title,
                    companyName: values.companyName,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    location: values.location,
                    certificateLink: values.certificateLink,
                    points: values.points,
                };

                const tempDetails = [...information[sections.workExp].details];
                tempDetails[activeDetailIndex] = tempDetail;


                props.setInformation((prev) => ({
                    ...prev, [sections.workExp]:
                    {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle: sectionTitle
                    },
                }));
                break;
            }

            case sections.project: {
                const tempDetail = {
                    title: values.title,
                    githubLink: values.githubLink,
                    deployedLink: values.deployedLink,
                    overview: values.overview,
                    points: values.points
                };

                const tempDetails = [...information[sections.project].details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev, [sections.project]:
                    {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle: sectionTitle
                    },
                }));
                break;
            }

            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    collegeName: values.collegeName,
                    startDate: values.startDate,
                    endDate: values.endDate
                };

                const tempDetails = [...information[sections.education].details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev, [sections.education]:
                    {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle: sectionTitle,
                    },
                }));
                break;
            }

            case sections.achievement: {
                const tempDetail = values.points;

                props.setInformation((prev) => ({
                    ...prev, [sections.achievement]:
                    {
                        ...prev[sections.achievement],
                        points: tempDetail,
                        sectionTitle: sectionTitle,
                    },
                }));
                break;
            }

            case sections.summary: {
                const tempDetail = values.summary;

                props.setInformation((prev) => ({
                    ...prev, [sections.summary]:
                    {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle: sectionTitle,
                    },
                }));
                break;
            }

            case sections.other: {
                const tempDetail = values.something;

                props.setInformation((prev) => ({
                    ...prev, [sections.other]:
                    {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle: sectionTitle,
                    },
                }));
                break;
            }
        }
    }

    const handleAddNew = () => {
        const details = activeInformation.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details.push({});

        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSection]]: {
                ...information[sections[activeSection]],
                details: details,
            },
        }));
        
        setActiveDetailIndex(details.length-1);
    };

    const handleDeleteDetail = (index) => {
        const details = (activeInformation.details) ? [...activeInformation.details] : "";
        if (!details) return;
        details.splice(index, 1);

        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSection]]: {
                ...information[sections[activeSection]],
                details: details,
            },
        }));

        setActiveDetailIndex((prev) => (prev === index) ? 0 : prev - 1);
    }

    useEffect(() => {
        const activeInfo = information[sections[activeSection]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSection]);
        setActiveDetailIndex(0);
        setValues({
            name: (activeInfo.detail) ? activeInfo.detail.name : "",

            title: (activeInfo.detail) ?
                (activeInfo.detail.tile)
                :
                ((activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].title : ""),

            linkedinLink: (activeInfo.detail) ? activeInfo.detail.linkedinLink : "",

            githubLink: (activeInfo.details) ?
                ((activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].githubLink : "")
                :
                (activeInfo.detail ? activeInfo.detail.githubLink : ""),

            email: activeInfo.detail ? activeInfo.detail.email : "",

            phone: activeInfo.detail ? activeInfo.detail.phone : "",

            overview: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].overview : "",

            deployedLink: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].deployedLink : "",

            companyName: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].companyName : "",

            certificateLink: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].certificateLink : "",

            location: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].location : "",

            startDate: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].startDate : "",

            endDate: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].endDate : "",

            collegeName: (activeInfo.details && activeInfo.details[0]) ? activeInfo.details[0].collegeName : "",

            summary: activeInfo.detail ? activeInfo.detail : "",

            something: activeInfo.detail ? activeInfo.detail : "",

            points: (activeInfo.details) ?
                ((activeInfo.details[0] && activeInfo.details[0].points) ? [...activeInfo.details[0].points] : "")
                :
                (activeInfo.points ? [...activeInfo.points] : ""),
        });
    }, [activeSection])

    useEffect(() => {
        setActiveInformation(information[sections[activeSection]])
    }, [information])

    useEffect(() => {
        const details = activeInformation.details;
        if (!details) return;

        const activeInfo = information[sections[activeSection]];

        setValues({
            title: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].title) ? activeInfo.details[activeDetailIndex].title : "",

            linkedinLink: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].linkedinLink) ? activeInfo.details[activeDetailIndex].linkedinLink : "",

            githubLink: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].githubLink) ? activeInfo.details[activeDetailIndex].githubLink : "",

            overview: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].overview) ? activeInfo.details[activeDetailIndex].overview : "",

            deployedLink: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].deployedLink) ? activeInfo.details[activeDetailIndex].deployedLink : "",

            companyName: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].companyName) ? activeInfo.details[activeDetailIndex].companyName : "",

            certificateLink: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].certificateLink) ? activeInfo.details[activeDetailIndex].certificateLink : "",

            location: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].location) ? activeInfo.details[activeDetailIndex].location : "",

            startDate: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].startDate) ? activeInfo.details[activeDetailIndex].startDate : "",

            endDate: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].endDate) ? activeInfo.details[activeDetailIndex].endDate : "",

            collegeName: (activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].collegeName) ? activeInfo.details[activeDetailIndex].collegeName : "",
            
            points: (activeInfo.details) ?
                ((activeInfo.details[activeDetailIndex] && activeInfo.details[activeDetailIndex].points) ? [...activeInfo.details[activeDetailIndex].points] : "")
                :
                (activeInfo.points ? [...activeInfo.points] : ""),
        });
    }, [activeDetailIndex])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections).map((singleKey) =>(
                    <div
                        key={singleKey}
                        className={`${styles.section} ${activeSection === singleKey ? styles.active : ""}`}
                        onClick={() => setActiveSection(singleKey)}
                    >
                        {sections[singleKey]}
                    </div>
                ))}
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter section title"
                    value={sectionTitle} onChange={(event) => setSectionTitle(event.target.value)} />
                <div className={styles.chips}>
                    {
                        activeInformation.details ?
                            activeInformation.details.map((item, index) => (
                                <div className={`${styles.chip} ${(activeDetailIndex === index) ? styles.active : null
                                    }`}
                                    key={item.tile + index}
                                    onClick={() => setActiveDetailIndex(index)}>
                                    <p>{sections[activeSection]} {index + 1}</p>
                                    <X onClick={(event) => {event.stopPropagation(); handleDeleteDetail(index) }} />
                                </div>
                            )) : ""
                    }

                    {
                        (activeInformation.details && activeInformation.details.length > 0) ?
                            <div className={styles.new} onClick={handleAddNew}><AddCircleIcon /> New</div>
                            : null
                    }

                </div>

                {generateBody()}

                <button onClick={handleSubmission}>Save</button>
            </div>
        </div>
    );
}

export default Editor;