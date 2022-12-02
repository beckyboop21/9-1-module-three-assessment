import React, {useState, useEffect} from "react"

export default function Movies(){

    const [data, setData] = useState([]);
    const [film, setFilm] = useState({})

    const handleChoice = (event) => {
        const picks = event.target.value;
        console.log(picks);
        const find = data.find((films) => films.id === picks);
        setFilm(find || {});
    }
    //log(data);
    useEffect(() => {
        fetch("./films.json")
        .then((resp) => resp.json())
        .then((data) => {
       
          setData(data);
        })
        .catch((err) => console.log(err));
    }, [])

    return(
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleChoice}>
              <option value=""></option>
              {data.map((choice) => (
                <option key={choice.id} value={choice.id}>{choice.title}</option>
              ))}  
            </select>
            {film.id && (
          <div>
            <p>Title: {film.title}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Description: {film.description}</p>
          </div>
        )}
        </div>
    )
}