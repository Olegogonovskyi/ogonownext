import {urls} from "@/costants/urls";

const usersService = {
    getAll: async (): Promise<IUser[]> => {
        const users = await fetch(urls.usersUrls.allUsersBase())
            .then(value => value.json())
        return users
    },
    getById: async (id: string): Promise<IUser> => {
        const user = await fetch(urls.usersUrls.userById(id))
            .then(value => value.json())
        return user
    }
}

export {
    usersService
}