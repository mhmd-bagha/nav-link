import Link from "next/link";
import {useRouter} from "next/router";

const NavLink = ({className, href, activeClass = '', label}) => {
    const router = useRouter()

    return (
        <Link href={href}
              className={`${className} ${(router.pathname === href) ?? (activeClass !== '') ? activeClass : 'active'}`}>{label}</Link>
    )
}

export default NavLink