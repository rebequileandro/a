export const persistMiddleware = (whitelist) => (store) => (next) => (action) => {
    next(action);
    const stateToPersist = {};
    Object.keys(store.getState()).forEach((key) => {
        if (whitelist.includes(key)) {
            stateToPersist[key] = store.getState()[key];
        }
    });

    localStorage.setItem('appState', JSON.stringify(stateToPersist));

};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined; // Si no hay estado guardado, devuelve undefined
        }
        return JSON.parse(serializedState); // Si hay estado guardado, lo parsea y lo devuelve
    } catch (error) {
        console.error(error);
        return undefined;
    }
};