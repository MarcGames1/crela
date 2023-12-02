'use client'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ReactNode } from 'react';



export default function AlternateTimeline({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <Timeline position="alternate">
      {items.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: ' hsl(var(--a) / 1);' }} />
              <TimelineConnector  />
            </TimelineSeparator>
            <TimelineContent>
              <div className=" bg-red-300 px-5 rounded-2xl">
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
