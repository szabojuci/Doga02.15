import { useNavigate } from 'react-router-dom';

export function SzallasPost() {
const navigate = useNavigate();

return (
    <div className='p-5 content bg-whitesmoke text-center'>
        <h2>Új szállás</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch("https://nodejs.sulla.hu/data", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    name: e.target.elements.name.value,
                    location: e.target.elements.location.value,
                    price: e.target.elements.price.value,
                    minimum_nights: e.target.elements.minimum_nights.value
                }),
            })
            .then(() => {
                navigate("/admin");
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