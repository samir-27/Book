import { createContext, useContext } from "react";
import { useState } from "react";



const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        console.error();
    }
    return context
}

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const AddToFavorites = (book) => {
        const oldBooks = [...favorites];
        const newBooks = oldBooks.concat(book);

        setFavorites(newBooks);
    };

    const RemoveFromFavorites = (id) => {
        const oldBooks = [...favorites];
        const newBooks = oldBooks.filter((book) => book.id !== id);
        setFavorites(newBooks);
    };

    return (
        <AppContext.Provider value={{ favorites, AddToFavorites, RemoveFromFavorites }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
