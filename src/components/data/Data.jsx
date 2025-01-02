import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

export default function Data({ search }) {
    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        fetch('users.json')
            .then((res) => res.json())
            .then((data) => {
                setPerson(data);
                setLoading(false);  
            })
            .catch((err) => {
                console.log("There is an error:", err);
                setLoading(false);  
            });
    }, []);

    const filteredPersons = person.filter((data) => {
        return data.email.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <h2>User List</h2>
            {loading ? (  
                <div className="d-flex justify-content-center">
                   <Spinner animation="grow" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {filteredPersons.map((data, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body>
                                    <Card.Title>{data.firstName}</Card.Title>
                                    <Card.Text>
                                        <strong>Email:</strong> {data.email}
                                        <br />
                                        <strong>Phone:</strong> {data.phone}
                                    </Card.Text>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{
                                            color: data.eyeColor==="Green" ? "green" : "red",
                                            fontSize: '1.5rem',
                                        }}
                                    ></i>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}
