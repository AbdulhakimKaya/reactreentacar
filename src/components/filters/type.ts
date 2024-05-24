export type FilterType = {
    id: number,
    label: string,
    options: FilterOption[]
}

type FilterOption = {
    id: number,
    title: string
    isSelected: boolean
}