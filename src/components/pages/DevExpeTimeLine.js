import React, { useState,useEffect  } from "react";
import { devEdu } from "../../constants/Details";
import { Typography } from "@mui/material";
import {Slide} from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
} from "@mui/lab";
function DevExpeTimeLine() {
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
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 1}99ms` : "0ms",
          }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined">
                <SchoolRounded color="warning" />
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

export default DevExpeTimeLine;
