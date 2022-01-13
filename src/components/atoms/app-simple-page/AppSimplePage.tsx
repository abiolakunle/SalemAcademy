import "./AppSimplePage.css"
import { Container } from 'react-bootstrap'

const AppSimplePage = ({ children, fluid = false }: any) => {
    return (
        <Container fluid={fluid} className='app-simple-page'>
            {children}
        </Container>
    )
}

export default AppSimplePage
