import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
  Alert,
  Spinner
} from 'reactstrap'
import './App.css'

const API_URL = 'http://localhost:3000'

function App() {
  const [health, setHealth] = useState(null)
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch(() => setError('No se pudo conectar con el API'))

    fetch(`${API_URL}/api/info`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch(() => setError('No se pudo conectar con el API'))
  }, [])

  return (
    <Container className="py-4">
      <h1 className="titulo text-center">Taller IV</h1>

      {error && <Alert color="danger">{error}</Alert>}

      {/* Punto 4: h4, p, div, section y CSS */}
      <section className="health-section">
        <div className="health-box">
          <h4>Estado del API</h4>
          <p>{health ? health.message : 'Verificando...'}</p>
        </div>
      </section>

      {/* Punto 5: componentes de Reactstrap */}
      <section className="mt-4">
        {!info ? (
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        ) : (
          <>
            <Alert color="success" className="text-center">
              {info.message}
            </Alert>
            <Row>
              {info.integrantes.map((i) => (
                <Col md="6" key={i.carnet} className="mb-3">
                  <Card>
                    <CardHeader tag="h5">{i.nombre}</CardHeader>
                    <CardBody className="p-0">
                      <ListGroup flush>
                        <ListGroupItem>
                          <strong>Carnet:</strong> {i.carnet}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Ciudad de origen:</strong> {i.ciudad}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Carrera:</strong> {i.carrera}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Proyectos realizados:</strong>{' '}
                          <Badge color="primary">{i.proyectos}</Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </section>
    </Container>
  )
}

export default App