import crypto from 'crypto'

const fakeDB: { id: string, email: string; name: string }[] = []


interface UserDTO {
    name: string
    email: string
    id?: string
}

export class UserService {
    async createUser({email, name}: UserDTO) {

        const user = {
            id: crypto.randomUUID(),
            email,
            name
        }
        
        fakeDB.push(user)
    }

    async getAllUsers() {
        return fakeDB
    }

    async deleteUser(user_id: string) {
        const users = fakeDB

        const userIndex = users.findIndex(user => user.id === user_id)

        users.splice(userIndex, 1)
    }

    async updateUser({email ,name, id}: UserDTO) {
        const users = fakeDB

        const userIndex = users.findIndex(user => user.id === id)

        users[userIndex] = {
            ...users[userIndex],
            name,
            email
        }
    }
}
