import React, { useState, useEffect } from "react";
import { SchoolRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
} from "@mui/lab";
import Slide from "@mui/material/Slide";
import { devEdu } from "../../constants/Details";
import { Typography } from "@mui/material";
function DevEduTimeLine() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 1}99ms` : "0ms",
          }}
        >
          {/*devEdu* */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="gray">
                {item.year}
              </Typography>
              <Typography variant="body1" color="black">
                {item.cert}
              </Typography>
              <Typography variant="body1" color="black">
                {item.major}
              </Typography>
              <Typography variant="body1" color="black">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
}

export default DevEduTimeLine;
