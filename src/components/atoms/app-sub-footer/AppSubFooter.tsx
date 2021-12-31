
import { Container } from 'react-bootstrap'
import "./AppSubFooter.css"

const AppSubFooter = () => {
    return (
        <Container className="app-sub-footer" fluid>
            <p>Copyright © {new Date().getFullYear()} Salem Academy</p>
        </Container>
    )
}

export default AppSubFooter
