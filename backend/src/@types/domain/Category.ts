export interface ICategoryCreate {
    name: string
    color: string
}

export interface ICategoryUpdate {
    name: string
    color: string
    tasksIDs: string[]
}

export interface ICategoryDto {
    id: string
    name: string
    color: string
    tasksIDs: string[]
}