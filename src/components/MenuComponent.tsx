import React, {FC} from 'react';
import Link from "next/link";

const MenuComponent: FC = () => {
    return (
        <div>
            <Link href={'/'}>Main</Link>
            <Link href={'/'}>Main</Link>
            <hr/>
        </div>
    );
};

export default MenuComponent;