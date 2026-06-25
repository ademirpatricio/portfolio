import { useState } from 'react'

function Estudo() {

  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div>

      <h1>{menuAberto}</h1>
        <p>{menuAberto ? 'Aberto' : 'Fechado'}</p>
      <button onClick={() => setMenuAberto(!menuAberto)}>
        Menu
      </button>

    </div>
  )
}

export default Estudo