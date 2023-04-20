import { getInteriorPackages, setInterior } from "./database.js"

const interiors = getInteriorPackages()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiorResource"){
            setInterior(parseInt(changeEvent.target.value))
        }

    }
)

export const Interiors = () => {
    let html = `<select id="interiorResource">
                <option value="0">Select an interior material</option>`
    for (const interior of interiors){
        html += `<option value="${interior.id}">${interior.name}</option>`
    }

    html += "</select>"
    return html
}