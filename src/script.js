function addItem(categoryId) {
    const input = document.getElementById(categoryId);
    const value = input.value.trim();
    if (!value) return;

    const table = document.getElementById("data").getElementsByTagName("tbody")[0];
    const row = document.createElement("tr");

    const categories = ["dairy", "meat", "produce", "grains", "other"];
    categories.forEach((cat) => {
        const cell = document.createElement("td");
        cell.textContent = cat === categoryId ? value : "";
        row.appendChild(cell);
    });

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => row.remove();
    deleteBtn.classList.add("add-icon-btn");
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    table.appendChild(row);
    input.value = "";
}
