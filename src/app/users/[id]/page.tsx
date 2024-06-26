import React from 'react';
import {usersService} from "@/services/fetch.api.service";

const UserIdPage = async ({params}: { params: { id: string } }) => {
    const singleUser = await usersService.getById(params.id)
    return (
        <div>
            {
                singleUser && <h1>{singleUser.id}: {singleUser.email}</h1>
            }
        </div>
    );
};

export default UserIdPage;