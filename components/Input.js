import React from "react";


function Input({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" />
            <button>Add</button>
        </form>

    )
}

export default Input;