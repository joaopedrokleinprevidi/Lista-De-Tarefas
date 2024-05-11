import database from '../../config/firebaseAccountService'

//Cria uma lista de tarefas vazia utilizando o UID do usuário. 
export const CreateNewList = async (uid: any) => {
    const root = database.collection("Listas");
    const listOfUser = uid;
    const accessListOfUser = root.doc(listOfUser).collection('Tarefas')

    const exampleTask = {
        'Name': 'Comprar boneca para o aniversário de minha filha.',
        'Color': 'Red',
        'Description': 'Não posso me esquecer do presente dela! Estou pensando em dar a ela uma boneca.',
        'Created_at': '10/05/24',
        'Conclusion_at': '11/05/24',
        'Value': '250R$'
    }

    accessListOfUser.add(exampleTask)
    console.log('Lista criada com sucesso.')
}