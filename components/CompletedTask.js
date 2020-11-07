import React from "react";

function CompletedTask({completed}) {
    return (
        <div>
            {completed}
            <button>Delete all</button>
        </div>
    )
}

export default CompletedTask;