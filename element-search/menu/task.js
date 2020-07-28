"use strict";
const links = Array.from(document.getElementsByClassName("menu__link"));
const mainMenu = Array.from(document.getElementsByClassName("menu_main"));
const closeMenu = (x) => {
  const itemsClose = mainMenu[x].getElementsByClassName("menu_sub");
  for (let itemClose of itemsClose) {
    itemClose.classList.remove("menu_active");
  }
};

for (let i = 0; i < mainMenu.length; i++) {
  let subMenu = mainMenu[i].getElementsByClassName("menu_sub");
  let itemMenu = mainMenu[i].getElementsByClassName("menu__link");
  for (let k = 0; k < itemMenu.length; k++) {
    const subMenu = itemMenu[k].closest("li").querySelector("ul");
    itemMenu[k].onclick = () => {
      
      if(subMenu.classList.contains("menu_active")) { 
      	 subMenu.classList.remove("menu_active");
      	return false;
  		}
	  	else {
	  	  closeMenu(i);
	      subMenu.classList.add("menu_active");
	      return false;
	  	}

	  	
    };
  }
}
