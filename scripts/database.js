const database = {
    paintPackages: [
        { id: 1, name: "Silver", price: 9.99 },
        { id: 2, name: "Midnight Blue", price: 11.99 },
        { id: 3, name: "Firebrick Red", price: 12.99 },
        { id: 4, name: "Spring Green", price: 8.99 }
    ],
    interiorPackages: [
        { id: 1, name: "Beige Fabric", price: 12.99 },
        { id: 2, name: "Charcoal Fabric", price: 12.99 },
        { id: 3, name: "White Leather", price: 15.99 },
        { id: 4, name: "Black Leather", price: 16.99 }
    ],
    techPackages: [
        { id: 1, name: "Basic Package", price: 7.99 },
        { id: 2, name: "Navigation Package", price: 12.99 },
        { id: 3, name: "Visibility Package", price: 9.01 },
        { id: 4, name: "Ultra Package", price: 22.00 }
    ],
    wheelPackages: [
        { id: 1, name: "17-inch Pair Radial", price: 13.99 },
        { id: 2, name: "17-inch Pair Radial Black", price: 14.99 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 15.99 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 16.99 }
    ],
    vehicleTypes: [
        {id: 1, name: "Car", priceMultiplier: 1},
        {id: 2, name: "Truck", priceMultiplier: 1.5},
        {id: 3, name: "SUV", priceMultiplier: 2.25}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            techId: 1,
            wheelId: 1,
            typeId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

//getters (retrieve copy of state)
export const getPaintPackages = () => {
    return database.paintPackages.map(paintPackage => ({...paintPackage}))
}

export const getInteriorPackages = () => {
    return database.interiorPackages.map(interiorPackage => ({...interiorPackage}))
}

export const getTechPackages = () => {
    return database.techPackages.map(techPackage => ({...techPackage}))
}

export const getWheelPackages = () => {
    return database.wheelPackages.map(wheelPackage => ({...wheelPackage}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getVehicleTypes = () => {
    return database.vehicleTypes.map(type => ({...type}))
}

//setters (temporarily change state)
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}

//permanently change state
export const addCustomOrder = () => {
    //copy state of user choices
    const newOrder = {...database.orderBuilder}

    //adds id to object that is ++
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //give order a timestamp
    newOrder.timestamp = Date.now()

    //add newOrder object to custom orders state
    database.customOrders.push(newOrder)

    //reset the temporary state for user choices
    database.orderBuilder = {}

    //notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}