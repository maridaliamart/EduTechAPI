import React, {useEffect} from "react";
import { Footer } from "./Footer";
import apiURL from './api';

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
            <div>
                <h1>Hello&#123;</h1>
            </div>
            <Footer/>
        </main>
    )
}