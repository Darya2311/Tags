const parent = document.querySelector(".chips");
  function add() {
    const meaning = document.querySelector("input").value;
    document.querySelector("input").value = "";
    const chip = document.createElement("div");
    chip.classList.add("chips__item");
    chip.innerHTML = ` 
        <div class="text">${meaning}</div>
        <i class="far fa-trash-alt"></i>
      `
    if (meaning !== "") {
      parent.append(chip);
    }
    localStorage.getItem("meaning");
    localStorage.setItem("meaning", meaning.toString());
};

function remove (e) {
  if (e.target.classList.contains("fa-trash-alt")) {
    parent.removeChild(e.target.parentElement)
  }
};

document.addEventListener("click", remove);

document.querySelector(".add").addEventListener("click", add);

window.addEventListener("unload", () => {document.removeEventListener("click", add);
document.removeEventListener("click", remove);
});


