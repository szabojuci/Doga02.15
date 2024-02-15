import { useState } from "react";
import { useNavigate} from "react-router-dom";


export function Bejelentkezes(){
    const [isLoginPending, setLoginPending] = useState(false);
    const navigate = useNavigate();
    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFormSubmit = () => {
        if (email === "Admin@admin.hu" && password === "password"){
            navigate("get-all")
            console.log(email)
        }
        else{
            alert("Nem jó")
        }
    }

  
    
    if (isLoginPending) {
        return (
            <div className="center-item">
                <div className="spinner-border text-danger"></div>
            </div>
        );
    }
    return (
        <div className="container-fluid d-flex justify-content-center h-100 login-container">
            <div className="card login-card">
                <div className="card-header login-card-header">
                    <h3>Bejelentkezés</h3>
                </div>
                <div className="card-body">
                    
                        <div className="input-group form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <input type="password" name="password" className="form-control" placeholder="Jelszó" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div> 
                        <div className="form-group">
                            <button onClick={loginFormSubmit} className="btn float-right btn-warning">
                                Küldés
                            </button>
                        </div>                    
               
                </div>
            </div>
        </div>
    );
}