import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UsersLayout",
};

const UserLayout = ({children}: {children: React.ReactNode; }) => {
    return (
        <div>
            usersLayout
            <hr/>
            {children}
            <hr/>
            usersLayout
        </div>
    );
}

export default UserLayout;