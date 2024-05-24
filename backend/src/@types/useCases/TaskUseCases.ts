export interface IUpdateTaskCheckedStatusUseCase {
    ( userID: string, checked: boolean ): Promise<void>
}