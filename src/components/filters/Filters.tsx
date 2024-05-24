import React, { useState } from 'react';
import './Filters.scss';
import { Select } from "antd";
import classNames from "classnames";
import Each from "../../helpers/Each";
import { FilterType } from "./type";
import {FiltersMockData} from "../../mock/filtersMockData";


interface FilterOption {
    id: number;
    title: string;
    isSelected: boolean;
}

const Filters: React.FC = () => {
    const classes = classNames("db-filters")
    const filters = FiltersMockData
    const [updatedFilters, setUpdatedFilters] = useState<FilterType[]>(filters);

    const handleSelectChange = (selectedId: number, filterId: number) => {
        const updatedFiltersCopy: FilterType[] = updatedFilters.map(filter => {
            if (filter.id === filterId) {
                const updatedOptions: FilterOption[] = filter.options.map(option => {
                    return {
                        ...option,
                        isSelected: option.id === selectedId
                    };
                });
                return {
                    ...filter,
                    options: updatedOptions
                };
            }
            return filter;
        });
        setUpdatedFilters(updatedFiltersCopy);
    };

    return (
        <div className={classes}>
            <Each of={updatedFilters} render={(item, index) => (
                <Select
                    key={item.id}
                    value={item.options.find(filter => filter.isSelected)?.title || ''}
                    onChange={(value) => handleSelectChange(parseInt(value), item.id)}
                >
                    {item.options.map((option, index) => (
                        <Select.Option key={option.id}>
                            {option.title}
                        </Select.Option>
                    ))}
                </Select>
            )}/>
        </div>
    );
};

export default Filters;
