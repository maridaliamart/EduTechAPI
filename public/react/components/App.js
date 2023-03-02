import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Documentation } from "./Documentation";
import { Main } from "./Main";
import { About } from "./About";
import apiURL from "./api";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

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

  const goBack = async () => {
    try {
      const response = await fetch(`${apiURL}//`);
      const allData = await response.json();
      setMain(allData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
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

  return (
    <main>
      <div className="upperdiv">
        <h1 className="Edu">EduTech API</h1>
		</div>
        <Menu menuButton={<MenuButton className="menutoggle">Open menu</MenuButton>} transition>
          <MenuItem onClick={()=>{goBack()}} className="menustyle">Home</MenuItem>
          <MenuItem className="menustyle">About</MenuItem>
          <MenuItem className="menustyle">Documentation</MenuItem>
        </Menu>
      <Main />
      <Footer />
    </main>
  );
};
