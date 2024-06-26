const baseUrl = 'https://jsonplaceholder.typicode.com/'

const urls = {
    usersUrls: {
        allUsers: '/users',
        allUsersBase: () => baseUrl + urls.usersUrls.allUsers,
        userById: (id: string) => baseUrl + urls.usersUrls.allUsers + '/' + id
    }
}

export {baseUrl, urls}