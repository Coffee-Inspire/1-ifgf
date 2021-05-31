import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import NavAdminSide from '../components/organisms/NavAdminSide';
import DashHomePage from '../components/organisms/DashHomePage';
import DashIcare from '../components/organisms/DashIcare';

function DashboardPage() {
    return (
        <Container fluid className="d-flex flex-row ">
            <Row>
                <Col className="ps-0">
                    <NavAdminSide />
                </Col>
            </Row>
            {/* <Row className="w-100"> */}
            <Switch>
                <Route exact path="/dashboard/">
                    <DashHomePage />
                </Route>
                <Route path="/dashboard/DashIcare/">
                    <DashIcare />
                </Route>
                <Route path="/dashboard/DashEvent/">
                    {/* <DashHomePage /> */}
                </Route>
                <Route path="/dashboard/DashAbout/">
                    {/* <DashHomePage /> */}
                </Route>
                <Route path="/dashboard/DashProfile/">
                    {/* <DashHomePage /> */}
                </Route>
            </Switch>
                {/* <Col xs={12} className="w-100 ">
                    <div className="w-100 text-center test p-0">Body</div>
                </Col> */}
            {/* </Row> */}
        </Container>
    )
}

export default DashboardPage
