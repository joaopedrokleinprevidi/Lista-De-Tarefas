import { ICategoryDto } from "../../@types"
import { UnhandledError } from "../../errors/ApplicationError"

type ICategoryDoc = FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>

interface IRetrieveCategoryData {
    ( categoryDoc: ICategoryDoc ): Promise<ICategoryDto>
}

export const retrieveCategoryData: IRetrieveCategoryData = async ( categoryDoc ) => {

    const categoryData = categoryDoc.data()

    if( !categoryData ) throw new UnhandledError("Error retrieving category data.")

    return {
        id: categoryDoc.id,
        name: categoryData.name,
        color: categoryData.color,
        tasksIDs: categoryData.tasksIDs
    }
}