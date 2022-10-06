/*
MIT License @zzzzych
2022-10-26
Option => tab, tabMenu, active Class Name
*/

class Tabmenu {
    constructor(_parameter) {
        let tabName;
        let tabMenuName;
        let tabContainer;
        let activeMenuClass;
        let activeContentClass;
        if (_parameter === undefined) {
            tabName = ".tab-wrapper";
            tabMenuName = ".tab-menu";
            tabContainer = ".tab-container";
            activeMenuClass = "active";
            activeContentClass = "visible";
        } else {
            this.tab = _parameter.wrapper;
            tabName = this.tab;

            this.tabMenu = _parameter.menu;
            tabMenuName = this.tabMenu;

            this.tabContainer = _parameter.container;
            tabContainer = this.tabContainer;

            this.activeName = _parameter.menuClass;
            activeMenuClass = this.activeName;

            this.visibleName = _parameter.contentClass;
            activeContentClass = this.visibleName;
        }
        let tab = document.querySelector(`${tabName}`);
        let tabMenu = tab.querySelectorAll(`${tabMenuName} > *`);
        let tabContent = tab.querySelectorAll(`${tabContainer} > *`);

        tabMenu.forEach((menu, idx) => {
            menu.addEventListener("click", () => {
                for (let i = 0; i < tabMenu.length; i++) {
                    tabMenu[i].classList.remove(activeMenuClass);
                    tabContent[i].classList.remove(activeContentClass);
                }
                menu.classList.add(activeMenuClass);
                tabContent[idx].classList.add(activeContentClass);
            });
        });
    }
}
