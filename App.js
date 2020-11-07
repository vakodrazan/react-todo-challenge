import React from "react";
import Input from "./components/Input";

function App() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Hello");
    }
    return (
        <main>
            <Input handleSubmit={handleSubmit} />
        </main>
    )
}

export default App;