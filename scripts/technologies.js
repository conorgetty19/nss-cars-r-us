import { getTechPackages, setTech } from "./database.js"

const technologies = getTechPackages()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "techResource"){
            setTech(parseInt(changeEvent.target.value))
        }

    }
)

export const Technologies = () => {
    let html = `<select id="techResource">
                <option value="0">Select a technology package</option>`
    for (const technology of technologies){
        html += `<option value="${technology.id}">${technology.name}</option>`
    }

    html += "</select>"
    return html
}