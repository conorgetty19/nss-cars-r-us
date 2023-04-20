import { getWheelPackages, setWheel } from "./database.js"

const wheels = getWheelPackages()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheelResource"){
            setWheel(parseInt(changeEvent.target.value))
        }

    }
)

export const Wheels = () => {
    let html = `<select id="wheelResource">
                <option value="0">Select a wheel style</option>`
    for (const wheel of wheels){
        html += `<option value="${wheel.id}">${wheel.name}</option>`
    }

    html += "</select>"
    return html
}