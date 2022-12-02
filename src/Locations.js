import React, {useState, useEffect} from "react"

export default function Locations(){

    const [detail, setDetail] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const url = "./locations.json";
        fetch(url)
          .then((resp) => resp.json())
          .then((detail) => {
            
            setDetail(detail);
          })
          //log err
          .catch((err) => console.log(err));
      }, []);

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={() => setShow(!show)}>{show ? "Hide Locations" : "Show Locations"}</button>
            <ul>
                {show && detail && detail.map((item) => (
                    <li key={item.id}>
                        <ul>
                            <li>Name: {item.name}</li>
                            <li>Climate: {item.climate}</li>
                            <li>Terrain: {item.terrain}</li>
                        </ul>
                    </li>
                )) }
            </ul>
        </div>
    )
}