import React, { useState } from "react";

const AddNewUser = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        });
    };

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <div>
                <div>
                    <span>
                        My name is {name}, I'm {age}
                    </span>
                </div>
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input
                        type="text"
                        onChange={(event) => handleOnChangeInput(event)}
                    />
                    <label>Age: </label>
                    <input
                        type="text"
                        onChange={(event) => handleOnChangeAge(event)}
                    />
                    <button>Click Me</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;
