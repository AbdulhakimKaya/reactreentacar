import {FilterType} from "../components/filters/type";

export const FiltersMockData: FilterType[] = [
    {
        id: 1,
        label: "color",
        options: [
            {
                id: 11,
                title: "beyaz",
                isSelected: true
            },
            {
                id: 12,
                title: "siyah",
                isSelected: false
            },
            {
                id: 13,
                title: "mavi",
                isSelected: false
            },
        ]
    },
    {
        id: 2,
        label: "brand",
        options: [
            {
                id: 21,
                title: "Volvo",
                isSelected: true
            },
            {
                id: 22,
                title: "BMW",
                isSelected: false
            },
            {
                id: 23,
                title: "Mercedes",
                isSelected: false
            },
        ]
    },
    {
        id: 3,
        label: "fuel",
        options: [
            {
                id: 31,
                title: "Benzin",
                isSelected: true
            },
            {
                id: 32,
                title: "Gaz",
                isSelected: false
            },
            {
                id: 33,
                title: "Elektrik",
                isSelected: false
            },
        ]
    },
    {
        id: 4,
        label: "price",
        options: [
            {
                id: 41,
                title: "0₺ -1000₺",
                isSelected: true
            },
            {
                id: 42,
                title: "1000₺ -1500₺",
                isSelected: false
            },
            {
                id: 43,
                title: "1500₺ -3000₺",
                isSelected: false
            },
        ]
    },
]