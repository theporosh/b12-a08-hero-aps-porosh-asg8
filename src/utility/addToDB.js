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


const removeFromStoreDB = (id) => {
  const storedAppData = getStoredApp();
//   console.log(storedAppData)
  const convertedStoredApps = storedAppData.map(id => parseInt(id))
    // console.log(id)
    // console.log(convertedStoredApps)
  const updated = convertedStoredApps.filter(appId => appId !== id);
//   console.log(updated)
  const newUpdated = JSON.stringify(updated);
//   console.log(newUpdated)
  localStorage.setItem("checkList", newUpdated);
};

export { addToStoreDB, getStoredApp, removeFromStoreDB };