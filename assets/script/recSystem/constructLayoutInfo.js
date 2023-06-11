function returnRecContainer(rec){
    const rec_container = document.createElement("div"),
    rec_image = document.createElement("img"),
    rec_text_container = document.createElement("div"),
    rec_title = document.createElement("h1"),
    rec_text = document.createElement("p");

    rec_container.addEventListener("click", () => {
        window.location = rec.url;
    })
    rec_container.className = "rec-container";
    
    rec_image.className = "rec-image";
    rec_image.src = rec.image
    rec_image.alt = "imagem"

    rec_text_container.className = "rec-text"

    rec_title.className = "rec-title"
    rec_title.textContent = rec.title

    rec_text.className = "rec-desc"
    rec_text.textContent = rec.description

    rec_container.appendChild(rec_image)
    rec_text_container.appendChild(rec_title)
    rec_text_container.appendChild(rec_text)
    rec_container.appendChild(rec_text_container)

    return rec_container;
}

function returnSomeRecs(){
    return [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            description: "peixe",
            title: "peixe"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            description: "peixe",
            title: "peixe"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            description: "peixe ".repeat(Math.pow(10, 4)),
            title: "peixe"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeF1Mpwy77DGtXM-THe9EKL5nLoYR8aEWdJWVTwzY&s",
            description: "peixe",
            title: "peixe"
        }
    ]
}

(() => {
    const data = new DataHandler({
        recs : returnSomeRecs()
    }),
    section_element = document.querySelector("section");
    data.getRecs().forEach((rec) => {
        section_element.appendChild(returnRecContainer(rec));
    })
})();