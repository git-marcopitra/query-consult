const toggleMenu = () => {
  const button = document.querySelector("#menu_button");
  const menu = document.querySelector("#mobile_menu");

  if (button.innerHTML === "Menu") {
    button.innerHTML = "Fechar";
    menu.style.display = null;
    return;
  }
  button.innerHTML = "Menu";
  menu.style.display = "none";
};

const dropdown = () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", ({ target }) => {
      const dropdownMenu = target.querySelector(".dropdown-menu");

      dropdownMenu.style.display = null;
    });

    dropdown.addEventListener("mouseleave", ({ target }) => {
      const dropdownMenu = target.querySelector(".dropdown-menu");

      dropdownMenu.style.display = "none";
    });
  });
};

document.addEventListener('DOMContentLoaded', dropdown);
