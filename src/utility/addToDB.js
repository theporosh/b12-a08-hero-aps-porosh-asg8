const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("checkList")

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }

}

const addToStoreDB = (id) => {

    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        alert("This App is already exist")
    }
    else {
        storedAppData.push(id);
        // console.log(storedAppData)
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("checkList", data)
    }
}

export { addToStoreDB, getStoredApp };