export interface ITask {
    UserID: string,
    Task: {
      ID: string,
      Name: string,
      Color: string,  
      Description: string,
      Created_at: string,
      Conclusion_at: string,
      Value: string,
      Checked: boolean
    }

}