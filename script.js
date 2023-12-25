const parenItem = [...document.querySelectorAll(".main-title-paragraph")];
const childItem = [...document.querySelectorAll(".paragraph-child")];
const box = [...document.querySelectorAll(".main-title-box")];
box.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (childItem[index].style.display === "none") {
      if ((childItem[index].style.display = "block")) {
        parenItem[index].style.fontWeight = "700";
      }
    } else {
      childItem[index].style.display = "none";
      parenItem[index].style.fontWeight = "400";
    }
  });
});
