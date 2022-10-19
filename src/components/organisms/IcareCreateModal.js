import React, { useState } from "react";

import { Modal, Form, Col, Button } from "react-bootstrap";
import DashText from "../molecules/DashText";
import FormGroupImageRequired from "../molecules/FormGroupImageRequired";
import FormGroupArea from "../molecules/FormGroupArea";
import FormGroup from "../molecules/FormGroup";

function IcareCreateModal({ modalState, closeModal, postIcare }) {
  const [imageCurrent, setImageCurrent] = useState({
    file: null,
    status: "",
    disable: false,
    name: "",
  });

  const [paramData, setParamData] = useState({
    category: "",
    name: "",
    text: "",
    number: "",
  });

  const valueChange = (e) => {
    setParamData({ ...paramData, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={modalState} onHide={closeModal}>
      <Modal.Header>
        <Modal.Body>
          <Col className="mb-5">
            <DashText word={"Create New Icare"} />
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                postIcare(e, paramData, imageCurrent);
              }}
            >
              <FormGroup
                id={"categoty"}
                label={"Enter Category"}
                type={"text"}
                placeholder={"Ex: Youth"}
                name={"category"}
                value={paramData.title}
                onChange={(e) => {
                  valueChange(e);
                  setImageCurrent({
                    ...imageCurrent,
                    name: `icare-${e.target.value}`,
                  });
                }}
              />
              <FormGroup
                id={"leaderName"}
                label={"Enter Leader Name"}
                type={"text"}
                placeholder={"Ex: Ethan"}
                name={"name"}
                value={paramData.name}
                onChange={(e) => valueChange(e)}
              />
              <FormGroup
                id={"phoneNumber"}
                label={"Phone Number"}
                type={"number"}
                placeholder={"Ex: 0822 1234 5678"}
                name={"number"}
                value={paramData.number}
                onChange={(e) => valueChange(e)}
              />

              <FormGroupImageRequired
                id={"icareImage"}
                label={"Icare Image"}
                image={imageCurrent}
                setImage={setImageCurrent}
              />
              <FormGroupArea
                id={"description"}
                label={"About Text"}
                type={"text"}
                placeholder={
                  "Ex: Hi, I'm a leader of Icare, God bless all of us"
                }
                name={"text"}
                value={paramData.text}
                onChange={(e) => valueChange(e)}
              />
              <Button type="submit" variant="primary">
                Click
              </Button>
            </Form>
          </Col>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
}

export default IcareCreateModal;
