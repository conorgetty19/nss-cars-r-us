import { getPaintPackages, setPaint } from "./database.js"

const paints = getPaintPackages()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paintResource"){
            setPaint(parseInt(changeEvent.target.value))
        }

    }
)

export const Paints = () => {
    let html = `<select id="paintResource">
                <option value="0">Select a paint color</option>`
    for (const paint of paints){
        html += `<option value="${paint.id}">${paint.name}</option>`
    }

    html += "</select>"
    return html
}