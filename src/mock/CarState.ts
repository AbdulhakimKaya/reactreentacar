interface CarStateType {
    id: number,
    name: string
}

export const CarState: CarStateType[] = [
    {
        id: 0,
        name: "Müsait"
    }, {
        id: 1,
        name: "Kiralandı"
    },
    {
        id: 2,
        name: "Bakımda"
    },
    {
        id: 3,
        name: "Rezerve edildi"
    },
]