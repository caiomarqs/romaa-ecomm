import Link from "next/link"

import { RomaLogo } from "../Icons"

const NavLogo = () => (
    <Link href="/" passHref>
        <a className="cursor-pointer">
            <RomaLogo
                height="24"
            />
        </a>
    </Link>
)

export { NavLogo }