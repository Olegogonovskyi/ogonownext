import React from "react";


export const generateMetadata = ({params}: { params: { id: string } }) => {
    return {title: `User: ${params.id}` }
}

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