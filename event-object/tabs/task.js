"use strict";
class Tabs {
	constructor(container) {
		this.container = container;
		this.navTabs = Array.from(container.getElementsByClassName("tab"));
		this.contentTabs = Array.from(container.getElementsByClassName("tab__content"));
		this.registerEvents();
	}

	 registerEvents() {
	 	const goTabContent = (e) => {
	 		let tabNavIndex = this.navTabs.findIndex(el => el.classList.contains("tab_active"));
	 		let currentTab = this.navTabs.indexOf(e.target);
	 		console.log(this.contentTabs[currentTab]);
	 		this.navTabs[tabNavIndex].classList.remove("tab_active");
	 		this.contentTabs[tabNavIndex].classList.remove("tab__content_active");
	 		e.target.classList.add("tab_active");
	 		this.contentTabs[currentTab].classList.add("tab__content_active");	 			 		
	 	}

	 	for(let navTab of this.navTabs) {
	 		navTab.addEventListener('click', goTabContent);
	 	}
	 }
}

new Tabs(document.getElementById("tabs1"));
new Tabs(document.getElementById("tabs2"));



