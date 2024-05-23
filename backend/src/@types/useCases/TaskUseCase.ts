export interface ITaskUseCase {
    UpdateTaskCheckedStatusUseCase: ( userID: string, checked: boolean ) => Promise<void>
}