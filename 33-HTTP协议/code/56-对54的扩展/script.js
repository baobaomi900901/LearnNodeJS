let tds = document.querySelectorAll("td");
tds.forEach((td) => {
    td.addEventListener("click", function () {
        this.style.backgroundColor = "red";
    });
});