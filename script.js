const toggleMenu = () => {
  const button = document.querySelector("#menu_button");
  const menu = document.querySelector("#mobile_menu");

  if (button.innerHTML === "Menu") {
    button.innerHTML = "Fechar";
    menu.style.transform = "translate(0vw)";
    return;
  }
  button.innerHTML = "Menu";
  menu.style.transform = null;
};
