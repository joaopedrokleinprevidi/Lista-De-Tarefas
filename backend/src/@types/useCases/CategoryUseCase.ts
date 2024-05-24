export interface IToAssignTaskToCategoryUseCase {
    ( userID: string, categoryID: string, taskID: string ): Promise<void>
}

export interface IToRemoveTaskFromCategoryUseCase {
    ( userID: string, categoryID: string, taskID: string ): Promise<void>
}