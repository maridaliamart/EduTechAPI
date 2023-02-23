import React, {useEffect} from "react";
import { Footer } from "./Footer";
import apiURL from './api';

import { Documentation } from "./Documentation";


export const App = () => {

    async function fetchUsers(){
		try {
			const response = await fetch(`${apiURL}/users`);
			const usersData = await response.json();
			setUsers(usersData);
            console.log(usersData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    useEffect(() => {
		fetchUsers();
	}, []);

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