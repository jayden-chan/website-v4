const getCellValue = (tr, idx) =>
  tr.children[idx].innerText || tr.children[idx].textContent;
const isTeamMate = (tr, idx) => tr.children[idx].classList.contains("sbd-team");

const teamSorts = {};
const lastSortIndexes = {};

const comparer = (idx, asc, teamSort) => (a, b) =>
  ((v1, v2) => {
    if (teamSort) {
      if (isTeamMate(a, 1) && !isTeamMate(b, 1)) {
        return -1;
      }
      if (isTeamMate(b, 1) && !isTeamMate(a, 1)) {
        return 1;
      }
    }

    return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
      ? v1 - v2
      : v1.toString().localeCompare(v2);
  })(getCellValue(!asc ? a : b, idx), getCellValue(!asc ? b : a, idx));

document.querySelectorAll(".sbd-head").forEach((th) => {
  th.addEventListener("click", function () {
    const table = th.closest("table");
    const sortIndex = Array.from(th.parentNode.children).indexOf(th);
    lastSortIndexes[table.id] = sortIndex;
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(comparer(sortIndex, (this.asc = !this.asc), teamSorts[table.id]))
      .forEach((tr) => table.appendChild(tr));
  });
});

document.querySelectorAll(".sbd-h-name").forEach((th) => {
  th.addEventListener("click", function () {
    const table = th.closest("table");
    const sortIndex = lastSortIndexes[table.id] || 2;
    teamSorts[table.id] = teamSorts[table.id] ? !teamSorts[table.id] : true;
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(comparer(sortIndex, true, teamSorts[table.id]))
      .forEach((tr) => table.appendChild(tr));
  });
});
