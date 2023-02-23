import React from "react";
import { Footer } from "./Footer";
import { Documentation } from "./Documentation";

export const App = () => {
    return (
        <main>
            <div class="upperdiv">
                <h1 class="Edu">EduTechAPI</h1>
            </div>
            <Documentation/>
            <Footer/>
        </main>
    )
}