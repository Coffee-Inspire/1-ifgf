import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Button, Form, ProgressBar, Card, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';
import FormGroupImage from '../molecules/FormGroupImage';
import FormGroupImageRequired from '../molecules/FormGroupImageRequired';
import FormSelect from '../molecules/FormSelect';

import { postAboutAction, editAboutAction, deleteAboutAction, getAboutAction } from '../../redux/actions/about.actions';

function DashAbout() {
    const dispatch = useDispatch();
    const aboutData = useSelector(state => state.about);
    const editRef = useRef(null);

    const [formAboutList, setFormAboutList] = useState([])

    const [formCurrent, setFormCurrent] = useState({
        yearStart : "",
        yearEnd : "",
        title : "",
        text : "",
    });

    const [formEdit, setFormEdit] = useState({
        id : "",
        yearStart : "",
        yearEnd : "",
        title : "",
        text : "",
        image : "",
        hash : 1,
    });

    const [progressBar, setProgressBar] = useState(0);
    const [editDisabled, setEditDisabled] = useState(true);

    const valueChange = (e) => {
        setFormCurrent({
            ...formCurrent,
            [e.target.name] : e.target.value
        })
    }

    const valueChangeEdit = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }

    // For Error Warning and Success
    const [editStatus, setEditStatus] = useState({
        current : false,
        edit : false,
    });

    const [showProgressBar, setShowProgressBar] = useState({
        showCurrent : false,
        showEdit : false,
    });

    const [imageCurrent, setImageCurrent] = useState({
        file: null,
        status: "",
        disable: false,
        name: "about"
    })

    const [imageEdit, setImageEdit] = useState({
        file: null,
        status: "",
        disable: false,
        name: "about"
    })

    useEffect(() => {
        dispatch(getAboutAction(setFormAboutList, true));
    }, [dispatch])

    const [yearError, setYearError] = useState(false);

    const yearCheck = (yearStart, yearEnd) => {
        if(yearStart === "" || yearEnd === ""){
            setYearError(true);
            return false;
        }
        else if(yearStart > yearEnd && yearEnd !== "Present"){
            setYearError(true);
            return false;
        }
        setYearError(false);
        return true;
    }


    // let sortData = formAboutList;
    // sortData.sort(function(a, b){
    //     if(a.updated_at < b.updated_at){
    //         return 1
    //     }
    //     else{
    //         return -1
    //     }}
    // );


    // console.log("list ", formAboutList);
    // console.log(formEdit);
    // console.log(formCurrent);
    // console.log(sortData);

    return (
        <>
        {
        aboutData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"About Post and Details"} />
                    <hr></hr>

                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"Create New About Post"} />                        
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            if(yearCheck(formCurrent.yearStart, formCurrent.yearEnd)){
                                dispatch(postAboutAction(e, imageCurrent, setProgressBar, setShowProgressBar, 
                                    formCurrent, setFormCurrent, setImageCurrent, setEditDisabled, formAboutList, setFormAboutList))
                            }
                            }}>
                            <div className="d-flex flex-column flex-lg-row">
                                <FormSelect 
                                    id={"formBasicSelectStart"}
                                    label={"Year Start :"}
                                    name={"yearStart"}
                                    value={formCurrent.yearStart}
                                    onChange={(e) => valueChange(e)}
                                    valueStart={1900}
                                    valueEnd={new Date().getFullYear()}
                                />

                                <FormSelect 
                                    id={"formBasicSelectStart"}
                                    label={"Year End :"}
                                    name={"yearEnd"}
                                    value={formCurrent.yearEnd}
                                    onChange={(e) => valueChange(e)}
                                    valueStart={1900}
                                    valueEnd={new Date().getFullYear()}
                                    present={"Present"}
                                />

                            </div>

                            <FormGroupImageRequired 
                                label={"About Image"}
                                image={imageCurrent}
                                setImage={setImageCurrent}
                                
                            />
                            <FormGroup 
                                id={"formBasicAbout"}
                                label={"About Title"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"title"}
                                value={formCurrent.title}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicAbout2"}
                                label={"About Text"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"text"}
                                value={formCurrent.text}
                                onChange={(e) => valueChange(e)}
                            />
                            <Button onClick={() => {
                                setShowProgressBar({...showProgressBar, showCurrent : true});
                                setEditStatus({current : true, edit : false});
                                }} type="submit" variant="primary" disabled={(aboutData.isLoading)}>
                                {(aboutData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                            {aboutData.isLoading && showProgressBar.showCurrent &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {aboutData.editSuccess && editStatus.current &&
                                <div className="mt-3 text-success">
                                    Post Success !
                                </div>
                            }
                            {yearError && editStatus.current &&
                                <div className="mt-3 text-danger">
                                    Year Start cant exceed Year End or Empty !
                                </div>
                            }
                            {aboutData.error && editStatus.current &&
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>
                    {/* END POST */}


                    {/* EDIT START */}
                    <div ref={editRef}></div>
                    <hr></hr>

                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"Edit About Post"} /> 
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.image}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="/uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image About</Card.Title>
                        </Card.Header>
                        </Card>                       
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            if(yearCheck(formEdit.yearStart, formEdit.yearEnd)){
                                dispatch(editAboutAction(e, imageEdit, setProgressBar, setShowProgressBar, 
                                    formEdit, setFormEdit, setImageEdit, setEditDisabled, formAboutList, setFormAboutList))
                            }
                            }}>
                            <div className="d-flex flex-column flex-lg-row">
                                <FormSelect 
                                    id={"formBasicSelectStart"}
                                    label={"Year Start :"}
                                    name={"yearStart"}
                                    value={formEdit.yearStart}
                                    onChange={(e) => valueChangeEdit(e)}
                                    valueStart={1900}
                                    valueEnd={new Date().getFullYear()}
                                    disabled={editDisabled}
                                />

                                <FormSelect 
                                    id={"formBasicSelectStart"}
                                    label={"Year End :"}
                                    name={"yearEnd"}
                                    value={formEdit.yearEnd}
                                    onChange={(e) => valueChangeEdit(e)}
                                    valueStart={1900}
                                    valueEnd={new Date().getFullYear()}
                                    present={"Present"}
                                    disabled={editDisabled}
                                />

                            </div>
                            <FormGroupImage
                                label={"About Image"}
                                image={imageEdit}
                                setImage={setImageEdit}
                                disabled={editDisabled}
                                
                            />
                            <FormGroup 
                                id={"formBasicAboutEdit"}
                                label={"Event Title"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"title"}
                                value={formEdit.title}
                                onChange={(e) => valueChangeEdit(e)}
                                disabled={editDisabled}
                            />
                            <FormGroupArea 
                                id={"formBasicAbout2Edit"}
                                label={"Event Text"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"text"}
                                value={formEdit.text}
                                onChange={(e) => valueChangeEdit(e)}
                                disabled={editDisabled}
                            />
                            <Button onClick={() => {
                                setShowProgressBar({...showProgressBar, showEdit : true});
                                setEditStatus({current : false, edit : true});
                                }} type="submit" variant="primary" disabled={(aboutData.isLoading || editDisabled)}>
                                {(aboutData.isLoading) ? "Saving..." : "Save"}
                            </Button>
                            {aboutData.isLoading && showProgressBar.showEdit &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {aboutData.editSuccess && editStatus.edit &&
                                <div className="mt-3 text-success">
                                    Edit Success !
                                </div>
                            }
                            {yearError && editStatus.edit &&
                                <div className="mt-3 text-danger">
                                    Year Start cant exceed Year End or Empty !
                                </div>
                            }
                            {aboutData.error && editStatus.edit &&
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                    {/* EDIT END */}

                    {/* <Button onClick={() => editRef.current.scrollIntoView()}>asdad</Button> */}
                    
                    {/* LIST POST START */}
                    <hr></hr>
                    <Col xs={11} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"About Post List"} />   

                        <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Year</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            formAboutList.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.yearStart + " - " + item.yearEnd}</td>
                                    <td>{item.title}</td>
                                    <td className="text-center">
                                        <Button onClick={() => {
                                            setFormEdit({
                                                id : item.id,
                                                yearStart : item.yearStart,
                                                yearEnd : item.yearEnd,
                                                title : item.title,
                                                text : item.text,
                                                image : item.image,
                                                hash : Date.now(),
                                            });
                                            setEditDisabled(false);
                                            editRef.current.scrollIntoView();
                                        }} className="mx-2" variant={"primary"}>Edit</Button> 
                                        <Button onClick={() => {
                                            dispatch(deleteAboutAction(item.id, index, formAboutList, setFormAboutList, setEditDisabled))
                                        }} className="mx-2" variant={"danger"}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        </Table>

                    </Col>
                </div>
            </Col>
        </Row>
        }
        </>
    )
}

export default DashAbout
