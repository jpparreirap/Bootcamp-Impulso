import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./userController";

describe('Users Controller', () => {
    const userController = new UsersController();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    it('Deve listas os nossos usuários', () => {
        userController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(4);
    })

    it('Deve criar um novo usuário', () => {

        mockRequest.body = {
            name: 'Novo usuário'
        }

        userController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado`})
    })

    it('Não deve criar um usuário com o nome em branco', () => {
        mockRequest.body = {
            name = ''
        }

        userController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possivel criar usuários sem nome'});
    })
});