import React, {FC} from 'react';
import {usersService} from "@/services/fetch.api.service";

const UserIdPage: FC<{params: { id: string }}> = async ({params}) => {
    const singleUser: IUser = await usersService.getById(params.id)

    return (
        <div>
            {
                singleUser && <h1>{singleUser.id}: {singleUser.email}</h1>

            }

        </div>
    );
};

export default UserIdPage;