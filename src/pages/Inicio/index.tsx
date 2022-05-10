import { Link } from "react-router-dom";
import "./inicio.css"
import Repositorios from "./Repositorios";

export default function Inicio() {
    return (
        <main className="inicio">
            <section className="inicio__repositorios">
                <h2>
                    <Link className="inicio__repositorios__titulo" to="/repositorios">Repositórios:</Link>
                </h2>
                <Repositorios />
            </section>
        </main>
    );
}