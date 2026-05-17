import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import NotFound from '../NotFound'
import Slideshow from '../../components/Slideshow'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <NotFound />
  }

  return (
    <div>
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
    </div>
  )
}

export default Logement
