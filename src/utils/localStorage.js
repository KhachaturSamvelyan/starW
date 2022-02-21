export const getLocalStorage = key => {
    const data = localStorage.getItem(key);
    if(key){
        return JSON.parse(data)
    } else {
        return []
    }

}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

