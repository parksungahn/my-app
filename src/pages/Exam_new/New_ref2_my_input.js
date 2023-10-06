import React from "react";

const New_ref2_my_input = (props, refInput) => {


    return(
        <div>
            <input ref={refInput} type="number"/>
        </div>
    );
};

export default React.forwardRef(New_ref2_my_input);
