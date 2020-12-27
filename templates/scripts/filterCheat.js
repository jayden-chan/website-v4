function filterBySearchText() {
  const input = document.getElementById("cheatPageInputID");
  const text = input.value.toLowerCase();
  const ul = document.getElementById("cheatPageListID");
  const li = ul.getElementsByTagName("li");

  let a, txtValue;
  outer: for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toLowerCase().indexOf(text) > -1) {
      li[i].style.display = "";
    } else {
      const tags = li[i].getElementsByTagName("small")[0];
      const tagsSpans = tags.getElementsByTagName("span");
      let tag;

      for (let j = 0; j < tagsSpans.length; j++) {
        tag = tagsSpans[j];
        txtValue = tag.textContent || tag.innerText;
        if (txtValue.toLowerCase().indexOf(text) > -1) {
          li[i].style.display = "";
          continue outer;
        }
      }

      li[i].style.display = "none";
    }
  }
}
