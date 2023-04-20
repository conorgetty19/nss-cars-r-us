import { getOrders, getInteriorPackages, getPaintPackages, getTechPackages, getWheelPackages, getVehicleTypes } from "./database.js";

const buildOrderListItem = (order) => {
    const interiors = getInteriorPackages()
    const paints = getPaintPackages()
    const techs = getTechPackages()
    const wheels = getWheelPackages()
    const types = getVehicleTypes()

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    const totalCost = (foundInterior.price + foundPaint.price + foundTech.price + foundWheel.price) * foundType.priceMultiplier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        ${foundPaint.name} ${foundType.name} with ${foundWheel.name} wheels, ${foundInterior.name} interior, and the ${foundTech.name} for a total cost of ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}