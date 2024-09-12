import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [get, setGet] = useState("");
    const [post, setPost] = useState("");
    useEffect(() => {
            fetch("https://localhost:7059/Test").then(async (res) => setGet(await res.text()), (error) => setGet("Connection to the server could not be established"));
            let request = new Request("https://localhost:7059/Test", {
                method: "POST", body: JSON.stringify({name: "Julian"}), headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request).then(async (res) => setPost(await res.text()), (error) => setPost("Connection to the server could not be established"));
            ;
        },
        []
    )
    ;
    return (
        <>
            <div>
                {get}
            </div>
            <div>
                {post}
            </div>
        </>
    );
}

export default App;
