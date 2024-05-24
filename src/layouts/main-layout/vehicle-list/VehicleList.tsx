import React from 'react';
import car from "../../../assets/images/xc90.avif";
import car2 from "../../../assets/images/xc90-2.avif";
import VehicleListItem from "./vehicle-list-item/VehicleListItem";
import Each from "../../../helpers/Each";
import {VehiclesMockData} from "../../../mock/vehiclesMockData";
import Filters from "../../../components/filters/Filters";
import {Col, Row} from "antd";


interface ProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    isAvailable: boolean,
}

const items: ProductProps[] = VehiclesMockData

function VehicleList() {
    return (
        <>
            <Filters/>
            <Row gutter={[64, 64]} className="pt-10 pb-20">
                <Each of={items} render={(item, index) => (
                    <Col key={index}>
                        <VehicleListItem
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            images={item.images}
                            price={item.price}
                            isAvailable={item.isAvailable}
                        />
                    </Col>
                )}/>
            </Row>

            {/*<div className="flex flex-wrap gap-16 pt-10 pb-20">*/}
            {/*    <Each of={items} render={(item, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <VehicleListItem*/}
            {/*                id={item.id}*/}
            {/*                title={item.title}*/}
            {/*                description={item.description}*/}
            {/*                images={item.images}*/}
            {/*                price={item.price}*/}
            {/*                isAvailable={item.isAvailable}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    )}/>*/}
            {/*</div>*/}
        </>
    );
}

export default VehicleList;