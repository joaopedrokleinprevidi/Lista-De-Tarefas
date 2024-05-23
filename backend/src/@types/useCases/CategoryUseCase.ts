export interface ICategoryUseCase {
    ToAssignTaskToCategory: ( userID: string, categoryID: string, taskID: string ) => Promise<void>
    ToRemoveTaskFromCategory: ( userID: string, categoryID: string, taskID: string ) => Promise<void>
}