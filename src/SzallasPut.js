import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

 export  function SzallasPut() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.szallasId;
    
    const [modname, setModname] = useState("");
    const [modprice, setModprice] = useState("");
    const [modlocation, setModlocation] = useState("");
    const [modminimumnights, setModMinimumnights] = useState("");
   

    useEffect(() => {

        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, { credentials: "include" });
            const accommodationData = await res.json();
            
            setModname(modname.name);
            setModprice(modprice.price);
            setModlocation(modlocation.location);
            modMinimumnights(modminimumnights.minimin_nights);

        } catch (error) {
            console.log(error);   
        } 
    })();
}, [id, modname, modprice, modlocation, modminimumnights]);

const modName = (e) => {
    setModname(e.target.value);
}
const modPrice = (e) => {
    setModprice(e.target.value);
}
const modLocation = (e) => {
    setModlocation(e.target.value);
}
const modMinimumnights = (e) => {
    setModMinimumnights(e.target.value);  
}

return(
    <div className='p-5 content bg-lavender text-center'>
        <h2>Szállás módosítás</h2>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            fetch(`https://nodejs.sulla.hu/data/${id}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify({
                    name: e.target.elements.name.value,
                    location: e.target.elements.location.value,
                    price: e.target.elements.price.value,
                    minimum_nights: e.target.elements.minimum_nights.value
                }),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='form-group row pb-3'>
                <label htmlFor="name" className='col-sm-3 col-form-label'> Name: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" autoComplete='name' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="price" className='col-sm-3 col-form-label'> Location: </label>
                    <div>
                        <input type="number" id="location" name="location" className="form-control" autoComplete='location' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="quantity" className='col-sm-3 col-form-label'> Price: </label>
                    <div>
                        <input type="number" id="price" name="price" className="form-control" autoComplete='price' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="imageURL" className='col-sm-3 col-form-label'> Minimum nights: </label>
                    <div>
                        <input type="text" id="minimum_nights" name="minimum_nights" className="form-control" autoComplete='minimum_nights' />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}

