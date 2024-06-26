import React, {FC} from 'react';
import {usersService} from "@/services/fetch.api.service";
import UserComponent from "@/components/UserComponent";

const Page: FC = async () => {
    const users = await usersService.getAll()

    return (
        <div>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Page;