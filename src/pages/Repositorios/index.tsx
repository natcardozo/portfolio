import axios from "axios"
import { useEffect, useState } from "react"
import "./repositorios.css"

export default function Repositorios() {
  const [repositorios, setRepositorios] = useState<any[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/natcardozo/repos')
      .then(resposta => {
        console.log(resposta)
        setRepositorios(resposta.data)
      })
  }, [])

  return (
    <div className='repositorios'>
      {repositorios?.map(repo => (
        <div key={repo.id} className='repositorio'>
          <a className='repositorio__link' href={repo.html_url}>
            <img className='repositorio__imagem' src={`/assets/imagens_repositorios/${repo.id}.png`} alt={repo.name} />
            <span className='repositorio__nome'>{repo.name.toUpperCase()}</span>
          </a>
          <p className='repositorio__descricao'>{repo.description}</p>
        </div>
      ))}
    </div>
  )
}