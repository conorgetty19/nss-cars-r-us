import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
import { Types } from "./vehicleType.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const htmlStructure = () =>{
    let html = `
<h1> Cars 'R Us: Personal Car Builder</h1>
<article class="optionBoxes">
    <div class="topOptionBoxes">
        <section class="optionBox">
            <h2 class="optionTitle">Paints</h2>
            ${Paints()}
        </section>
        <section class="optionBox">
            <h2 class="optionTitle">Interior</h2>
            ${Interiors()}
        </section>
    </div>
    <div class="bottomOptionBoxes">
        <section class="optionBox">
        <h2 class="optionTitle">Vehicle Type</h2>
            ${Types()}
        </section>
        <section class="optionBox">
            <h2 class="optionTitle">Wheels</h2>
            ${Wheels()}
        </section>
        <section class="optionBox">
            <h2 class="optionTitle">Technologies</h2>
            ${Technologies()}
        </section>
    </div>
</article>
<div class="pageBottom">
    <button type="button" id="orderButton">Place Car Order</button>
    <article>
        <h2>Custom Car Orders<h2>
        ${Orders()}
    </article>
<div>`

return html
}