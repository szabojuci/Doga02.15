import { useState, useEffect } from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";

export function SzallasDelete() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.hangszerId;
    const [accommodation, setAccommodation] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, { credentials: "include" });
            const accommodations = await res.json();
            setAccommodation(accommodations);
        } catch (error) {
            console.log(error);   
        }
        finally {
            setPending(false);
        }
    })();
    }, [id]);
    return (
             <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !accommodation.id ? ( <div className='spinner-border'></div>) : (       
                <div>
                <h2>Szállás törlése</h2>
                <div className='card p-3'>
                    <div className='card-body'>
                    <h5 className='card-title'>{accommodation.name}</h5>
                    <div className='lead'>{accommodation.price}.- HUF</div>
                    <p>Minimum night: {accommodation.minimum_night} db</p>
                        </div>
                        <form onSubmit={async (e) => {
                            try{
                            e.preventDefault();
                            await fetch(`https://nodejs.sulla.hu/data/${id}`, {
                                method: "DELETE",
                                credentials: "include",
                                
                            });
                            navigate("/admin");}
                        catch(error) {
                            console.log(error);
                        };
                        }}>
                        <div>
                            <NavLink  to={"/admin"}>
                                <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                            </NavLink>
                            <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                        </div>
                        </form>
                    </div>
                </div>
            )} </div>
    );
}