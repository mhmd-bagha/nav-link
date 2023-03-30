import Link from "next/link";
import {useRouter} from "next/router";
import {useCallback, useEffect, useState} from "react";

const NavLink = ({className, href, activeClass, ...label}) => {
    const router = useRouter()
    const [active, setActive] = useState(false)

    const ChangeActiveStatus = useCallback(() => {
        if (router.pathname === href) {
            return setActive(true)
        }
    }, [])

    useEffect(() => {
        ChangeActiveStatus()
    }, [])

    return (
        <Link href={href}
              className={() => (active) ? `${className} ${(activeClass !== '') ? activeClass : 'active'}` : className}>{label}</Link>
    )
}

export default NavLink