import axios from "axios";
import {  createContext, useEffect, useState } from "react"
import { options } from "../utlis/contants.jsx";

// context yapısının temelini oluşturma
export const YoutubeContext = createContext();

// contexte tutulan verileri bütün uygulamaya sağlayacak
export const ContextProvider = ({children}) => {
    
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [searchResult, setSearchResult] = useState(null);

    // SelectedCategory statei değişimini izleme
    useEffect(() => {
        // Her kategori değiştiğinde null yapsın bu sayede loading koyabiliriz.
        setSearchResult(null)
        //video verisini çek
        fetchCategory(selectedCategory);
    }, [selectedCategory]);

    // youtubedan verileri  çekmeye yarayan fonksiyon
    const fetchCategory = (category) =>{
        axios.get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, 
            options
        )
        .then((res) => setSearchResult(res.data.contents));
    };


    return (
        <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, searchResult}}>
            {children}
        </YoutubeContext.Provider>
    )
}