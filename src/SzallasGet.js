import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function SzallasGet(props) {
    const[accommodation, setAccommodation] = useState([]);
    const[isFetchPending, setfetchPending] = useState(false);


    const navigate = useNavigate();
    useEffect(() => {
        setfetchPending(true);
        
        axios.get("https://nodejs.sulla.hu/data")
        .then((res) => res.data)
        .then((tartalom) => {
            setfetchPending(false);
            setAccommodation(tartalom);
        })
        .catch(() => {
            setfetchPending(false);
            navigate("/");
        });
    },[navigate]);
    if(isFetchPending || !accommodation.length) {
        return (
            <div className="center-item">
                <div className="spinner-border text-danger"></div>
            </div>
        );
        }
        return(
            <div className='p-5 m-auto text-center content bg-ivory'>
            { isFetchPending ? ( <div className='spinner-border'></div>) : (
                <div>
                    <h2>Szállások</h2>
                    {accommodation.map((accommodation) => (
                        <div key={accommodation.id + 4} className='card col-sm-3 d-inline-block m-1 p-2'>
                            <h6 className='text-muted'>{accommodation.name}</h6>
                            <h5 className='text-muted'>{accommodation.location}</h5>
                            <div>{accommodation.price}.- HUF</div>
                            <div className='small'>Minimum éjszaka{accommodation.minimum_nights} db</div>
                            <NavLink key={accommodation.id} to={"/get-szallas/" + accommodation.id}>
                          </NavLink>
                          
                        </div>
                        
                    ))}
                </div>
            )}
           </div> 
        )
}