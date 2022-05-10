import axios from "axios";
import { useEffect, useState } from "react"
import "./repositorios.css"

export default function Repositorios() {
    const [ repositorios, setRepositorios ] = useState<any[]>([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/natcardozo/repos")
            .then(resposta => setRepositorios(resposta.data))
    }, [])

    return (
        <div className="inicio__repositorio">
            {repositorios?.map(repositorio => (
                <img className="inicio__repositorio__imagem" key={repositorio.id} src={`/assets/imagens_repositorios/${repositorio.id}.png`} alt={repositorio.nome} />
            ))}
        </div>
    )
}