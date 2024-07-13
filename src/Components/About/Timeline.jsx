import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
            date={"jun 2023 - july 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "left",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Ombre
            </h4>
            <p data-aos="fade-right">
            I developed features for Agora RTC live streams, including media uploads for backgrounds, an E2E payment gateway, and interactive sliders for recorded sessions.
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            date={"jun 2022 - dec 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "left",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Engineer Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              La La derive pvt ltd
            </h4>
            <p data-aos="fade-right">
            I added components to the app, including Google Maps, REST APIs, UI elements, a Firebase backend, and image support, to display restaurants along the user's route.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2019 - 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "left",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Bachelor of Technology, Computer Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Indian Institute Of Information Technology Tiruchirappalli.
            </h4>
            <p data-aos="fade-right">
              Did my Graduation from Trichy, also Learned a lot of Technologies with Practical Skills during College. 
              Won Best Final Year Project Award.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2018-2019 "}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              12th Standard (12th Grade)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Saint Paul Higher Secondary School, Indore 
            </h4>
            <p data-aos="fade-right">
              Completed my High School with Physics, Chemistry, Maths as my Major Subjects with
              Computer Science as my Optional Subject.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2016-2017 "}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "left",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              10th Standard (10th Grade)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">
              Saint Paul Higher Secondary School, Indore
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2014"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Completed Higher Secondary - Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">Jalpaiguri Zilla School, Jalpaiguri, West Bengal
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
