const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="fa-solid fa-edit edit"></button>
                <button class="fa-solid fa-trash-alt delete"></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea style="resize: none; padding: 10px;" class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");

        if(editBtn.classList.contains("fa-edit")){
            editBtn.classList.remove("fa-edit")
            editBtn.classList.add("fa-floppy-disk")
        }else{
            editBtn.classList.add("fa-edit")
            editBtn.classList.remove("fa-floppy-disk")
        }
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}