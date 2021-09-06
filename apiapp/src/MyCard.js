import React from "react";
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img width="150" height="150" className="rounded-circle" src={details.picture?.large}/>
            </CardBody>
            <CardTitle>
                <h1>
                    <span className="pr-2">{details.name?.title}</span>
                    <span className="pr-2">{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                </h1>
            </CardTitle>
            <CardText>
                <FaMapMarkedAlt/>
                {details.location?.city}
            </CardText>
        </Card>
    );
}
export default MyCard;