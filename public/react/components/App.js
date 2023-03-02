import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Documentation } from "./Documentation";
import { Main } from "./Main";
import { About } from "./About";
import apiURL from "./api";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";

export const App = () => {

	const [main, setMain] = useState('');
	const [documentation, setDocumentation] = useState('');
	const [about, setAbout] = useState('');

  // async function fetchUsers(){
  // 	try {
  // 		const response = await fetch(`${apiURL}/users`);
  // 		const usersData = await response.json();
  // 		setUsers(usersData);
  //         console.log(usersData)
  // 	} catch (err) {
  // 		console.log("Oh no an error! ", err)
  // 	}
  // }

  // useEffect(() => {
  // 	fetchUsers();
  // }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate()

  const goBack = async () => {
   navigate("/")
  };

  const handleSubmit = async (e) => {
    console.log("this is handle submit", e);
    const response = await fetch(`${apiURL}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        platform: platform,
        instructor: instructor,
        duration: duration,
      }),
    });
    const data = await response.json();
  };

  

  const goToAboutPage = () => {
    navigate("/about")
  }

  const goToDocumentation = () => {
    navigate("/documentation")
  }

  return (
    <main>
      <div className="upperdiv">
        <h1 className="Edu">EduTech API</h1>
		</div>
        <Menu menuButton={<MenuButton className="menutoggle">Open menu</MenuButton>} transition>
          <MenuItem onClick={()=>{goBack()}} className="menustyle">Home</MenuItem>
          <MenuItem onClick={()=>{goToAboutPage()}}className="menustyle">About</MenuItem>
          <MenuItem onClick={()=>{goToDocumentation()}} className="menustyle">Documentation</MenuItem>
        </Menu>
      <Routes>
          <Route path="about" element={<About />} />
          <Route path="documentation" element={<Documentation/>}/>
          <Route index element={<Main />}>
        </Route>
      </Routes>
    <Footer />
    </main>
  );
};
