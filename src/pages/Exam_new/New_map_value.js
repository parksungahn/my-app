import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {queries} from "@testing-library/react";

//----배열오브젝트 for 문으로...값변경
//--{앞엔..기본값가져와서 초기값변경가능}
//--{두번째는 리턴값 변형.}
const New_map_value = () =>{

    const [number, setNumber] = useState(0);

    let person = [
        {carr: "KE", fltnum: "01"},
        {carr: "", fltnum: "0002"},
    ];

    const flightScheduleList = useMemo(() =>
                person?.map(
                    ({
                         carr: carr = 'KE' ,   //--api에서. carr: code 형태일떈   =>  carr:{value: carr = 'KE'} ,
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

export default New_map_value;
