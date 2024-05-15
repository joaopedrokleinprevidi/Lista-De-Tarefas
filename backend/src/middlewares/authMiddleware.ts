// Importação de recurso necessário
import admin from 'firebase-admin'
import { Request, Response, NextFunction } from 'express' 

const VerifyUserMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  // Pegando TOKEN enviado no "HEADER" da requisição.
  const authHeader = request.headers.authorization;

  // Verificando se existe algum TOKEN informado.
  if (!authHeader) {
    response.status(401).json("Token não informado");
  }

  // Caso exista o TOKEN, prossegue a função:
  else {

    // Separando TOKEN do padrão de escrita: " Bearer `${token}` "
    // No caso aqui, tirando o "Bearer", e pegando apenas o TOKEN.
    const idToken = authHeader.split(" ")[1];

    await admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      // Roda este bloco em caso de sucesso (token VÁLIDO)

      console.log("token decodificado: ", decodedToken);
      console.log("Usuário autenticado com sucesso");
      next(); 
    })
    .catch((error) => {
      // Roda este bloco em caso de erro (token INVÁLIDO)
      console.error("Erro ao verificar token: ", error);
      return response.status(401).json("Token de autenticação inválido");
    });

  }
};

export const AuthMiddleware = {
    VerifyUser: VerifyUserMiddleware   
}