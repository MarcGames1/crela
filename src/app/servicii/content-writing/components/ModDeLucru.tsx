import { AlternateTimeline, FlexibleColumnSection } from '@/components';
import React, { ReactPropTypes } from 'react'
import { IModDeLucruData } from '../pageConstants';



interface ModDeLucruProps extends IModDeLucruData {
reversed: boolean;
}


const ModDeLucru = (props  : ModDeLucruProps) => {
  return (
    <FlexibleColumnSection {...props}>
      <AlternateTimeline items={props.timeLineData} />
    </FlexibleColumnSection>
  );
}

export default ModDeLucru