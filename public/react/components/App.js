import React, {useEffect} from "react";
import { Footer } from "./Footer";
import { Documentation } from "./Documentation";
import { Main } from "./Main";
import { About } from "./About";
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

    const goBack = async() => {
		try {
			const response = await fetch(`${apiURL}/wiki/`);
			const allData = await response.json();
			setPages(allData);
			setIsAddingArticle();
		} catch (err) {
			console.log("Oh no an error! ", err)
		}

	}

    const handleSubmit = async (e) => {
		console.log('this is handle submit', e)
		const response = await fetch(`${apiURL}/wiki`, {
			method : "GET",
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				name: name,
				platform: platform,
				instructor: instructor,
                duration: duration

			})
		})
		const data = await response.json();
	}

    return (
        <main>
            <div class="upperdiv">
                <h1 class="Edu">EduTech API</h1>
            </div>
            <Main/>
            <br/>
            <Documentation/>
            <About/>
            <Footer/>
        </main>
    )
}