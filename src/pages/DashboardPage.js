import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

import NavAdmin from '../components/organisms/NavAdmin'
import NavAdminSide from '../components/organisms/NavAdminSide'

function DashboardPage() {
    return (
        <Container fluid>
            <Row>
                <div className="d-flex flex-row p-0">
                    <NavAdminSide />
                    <div className="w-100 text-center test">Body</div>
                </div>
            </Row>
        </Container>
    )
}

export default DashboardPage
