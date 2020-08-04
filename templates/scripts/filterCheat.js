function filterBySearchText() {
  const input = document.getElementById("cheatPageInputID");
  const text = input.value.toUpperCase();
  const ul = document.getElementById("cheatPageListID");
  const li = ul.getElementsByTagName("li");

  let a, txtValue;
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(text) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
