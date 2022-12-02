import React, {useState, useEffect} from "react"

export default function People(){

    const [info, setInfo] = useState([])
    const [name, setName] = useState('');
    const [input, setInput] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const opt = info.find((person) => person.name.toLowerCase() === name.toLowerCase());
        setInput(opt || {});
    }


    useEffect(() => {
        fetch("./people.json")
        .then((res) => res.json())
        .then((info) => {
        //   console.log(info);
          setInfo(info);
        })
        .catch((err) => console.log(err));
    }, [])


    return(
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}
                        type="text"
                        />
                </label>
                <button type='submit'>Submit</button>
            </form>
            {input.id && (
                <div>
                    <h2>Name: {input.name}</h2>
                    <p>Age: {input.age}</p>
                    <p>Eye Color: {input.eye_color}</p>
                    <p>Hair Color: {input.hair_color}</p>
                </div>
            )}
        </div>
    )
}