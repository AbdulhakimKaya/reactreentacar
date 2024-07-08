import React from 'react';
import './HomeVehicleList.scss'
import {VehiclesMockData} from "../../../../mock/vehiclesMockData";
import classNames from "classnames";
import RandomVehicleList from "./random-vehicle-list/RandomVehicleList";

interface ProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    isAvailable: boolean,
}

const items: ProductProps[] = VehiclesMockData

const HomeVehicleList = () => {
    const classes = classNames("db-home-vehicle-list")

    return (
        <div className={classes}>
            <div className="text-3xl font-semibold pl-5 pb-5 deneme">
                En Fazla Tercih Edilenler
            </div>
            <RandomVehicleList/>

            <div className="text-3xl font-semibold pl-5 py-5">
                Önerilenler
            </div>

            <RandomVehicleList/>
        </div>
    );
};

export default HomeVehicleList;