export interface IAssignCategoryToTaskUseCase {
    ( userID: string, categoryID: string, taskID: string ): Promise<void>
}

export interface IRemoveTaskFromCategoryUseCase {
    ( userID: string, categoryID: string, taskID: string ): Promise<void>
}