import { getVehicleTypes, setType } from "./database.js"

const types = getVehicleTypes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "typeResource"){
            setType(parseInt(changeEvent.target.value))
        }

    }
)

export const Types = () => {
    let html = `<select id="typeResource">
                <option value="0">Select a vehicle type</option>`
    for (const type of types){
        html += `<option value="${type.id}">${type.name}</option>`
    }

    html += "</select>"
    return html
}