import React, {useState} from "react";

const useInput = (initValue, onSubmit) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        setValue('');
        onSubmit(value);
    }

    return [value, handleChange, handleSubmit];
};

export default useInput;
