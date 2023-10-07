import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {queries} from "@testing-library/react";

const New_Test = () =>{

    const [number, setNumber] = useState(0);

    let person = [
        {carr: "KE", fltnum: "01"},
        {carr: "", fltnum: "0002"},
    ];

    const flightScheduleList = useMemo(() =>
                person?.map(
                    ({
                         carr:{ carr = 'KE' },
                         fltnum ,
                     }) => ({
                        carr: carr,
                        fltnum: `${fltnum.padStart(4, '0')}`,
                        date:'09SEP73'
                    }),
            ) ?? [],
        [number],
    );

    console.log(flightScheduleList);

    return(
        <div>
            <input type="number" onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        </div>
    );
};

export default New_Test;
