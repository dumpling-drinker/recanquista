const team = document.querySelector(".team");
const names = document.querySelectorAll(".name");

function getInfo(name) {
  const el = name.parentNode.querySelector(".info");
  return el;
}

function update(open) {
  for (const node of names) {
    const info = getInfo(node);
    if (open === node && info.style.marginTop !== "8px") {
      info.style.marginTop = "8px";
      info.style.marginBottom = "8px";
      info.style.height = node.scrollHeight + "px";
    } else {
      info.style.marginTop = "0px";
      info.style.marginBottom = "0px";
      info.style.height = "0px";
    }
  }
}

names.forEach(node => {
  node.addEventListener("click", function(e) {
    update(e.target);
  });
});
