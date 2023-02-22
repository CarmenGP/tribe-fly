import React, {useState} from "react";

const Form = ({newLocation}) => {
    const [city,setCity] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === '' || !city) return;

        newLocation(city);
    }

    return(
        <div className="container">
            <h2 className="tiempoh2">¿Vas a viajar, Quieres saber qué tiempo hará?</h2>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}></input>
                    <button className="btn btn-success input-group-text" type="submit">Buscar</button>
                </div>

            </form>
        </div>
    );
}

export default Form;