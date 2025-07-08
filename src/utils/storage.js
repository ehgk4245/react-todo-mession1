const storage = window.localStorage

export const save = (key, value) => {
    try {
        storage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error(e)
    }
}

export const load = (key) => {
    try {
        const value = JSON.parse(storage.getItem(key))
        if (!value) return []
        return value
    } catch (e) {
        console.error(e)
        return []
    }
}
