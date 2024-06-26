import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UsersLayout",
};

const UserIDLayout = ({children}: {children: React.ReactNode; }) => {
    return (
        <div>
            UserIDLayout
            {children}
            UserIDLayout
        </div>
    );
}

export default UserIDLayout;