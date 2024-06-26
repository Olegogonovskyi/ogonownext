import React, {FC} from 'react';
import Link from "next/link";
import {urls} from "@/costants/urls";

const UserComponent: FC<{user: IUser}> = ({user}) => {
    return (
        <div>
            <Link href={`${urls.usersUrls.allUsers}/${user.id}`}>{user.id}: {user.name}</Link>
        </div>
    );
};

export default UserComponent;