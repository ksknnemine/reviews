import React, { useState } from "react";
import Person from "./Person";
import './person.css'


function App(){

    return(
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviews</h2>
                    <div className="underline"></div>
                </div>
                <Person />
            </section>
        </main>
        
    )
}

export default App;