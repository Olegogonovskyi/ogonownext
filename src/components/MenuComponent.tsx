import React, {FC} from 'react';
import Link from "next/link";
import {urls} from "@/costants/urls";

const MenuComponent: FC = () => {
    return (
        <div>
            <Link href={'/'}>Main</Link>
            <br/>
            <Link href={urls.usersUrls.allUsers}>Users</Link>
            <hr/>
        </div>
    );
};

export default MenuComponent;