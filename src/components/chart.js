import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avg(data){
  return _.round(_.sum(data) / data.length);
}

const Chart = (props) => {
  return(
    <div>
    <Sparklines
      height={200}
      data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div><h4>{avg(props.data)}{props.units}</h4></div>
    </div>
  )
}
export default Chart;
