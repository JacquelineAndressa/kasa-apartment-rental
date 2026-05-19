import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import './Logement.scss'
import Collapse from '../../components/Collapse'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>

        <div className="logement__side">
          <div className="logement__host">
            <span className="logement__host-name">{logement.host.name}</span>
            <img
              className="logement__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating score={logement.rating} />
        </div>
      </div>

      <section className="logement__collapses">
        <Collapse title="Description">{logement.description}</Collapse>

        <Collapse title="Equipments">
          <ul className="logement__equipments-list">
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </div>
  )
}

export default Logement
