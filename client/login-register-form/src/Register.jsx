import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [ddn, setDdn] = useState('');
    const [nomClass, setNomClass] = useState('');
    const [numCartEtu, setNumCartEtu] = useState('');

    const handleSubmit = (e) => {

        let errorStatus = ''
        const url = "http://localhost:3300/api/register"

        e.preventDefault();
        console.log(email);
        const data = {
            nom: nom,
            prenom: prenom,
            ddn: ddn,
            nomclass: nomClass,
            numCartEtu: numCartEtu,
            login: email,
            password: pass
        }
        axios.post(url, data).then(res => {
            console.log("res data", res.data)
            navigate("/home")
        }).catch(error => {
            if (!error.response) {
                // network error
                errorStatus = 'Error: Network Error';
            } else {
                errorStatus = error.response.data.message;

            }
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit} >

                <label htmlFor="nom">nom</label>
                <input value={nom} name="nom" onChange={(e) => setNom(e.target.value)} id="Nom" placeholder="Nom" />

                <label htmlFor="name">prenom</label>
                <input value={prenom} name="prenom" onChange={(e) => setPrenom(e.target.value)} id="prenom" placeholder="Prenom" />

                <label htmlFor="ddn">Date de naissance</label>
                <input value={ddn} name="ddn" onChange={(e) => setDdn(e.target.value)} id="ddn" placeholder="Date de naissance" type="date" />

                <label htmlFor="nomClass">nom de la classe </label>
                <input value={nomClass} name="nomClass" onChange={(e) => setNomClass(e.target.value)} id="nomClass" placeholder="nom de la classe" type="text" />

                <label htmlFor="numCartEtu">numero carte etudiant</label>
                <input value={numCartEtu} name="numCartEtu" onChange={(e) => setNumCartEtu(e.target.value)} id="numCartEtu" placeholder="numero carte etudiant" type="text" />

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********************************************" id="password" name="password" />

                <button type="submit">Log In</button>
            </form>
            <Link className="link-btn" to={"/"}>Already have an account? Login here.</Link>
        </div>
    )
}
