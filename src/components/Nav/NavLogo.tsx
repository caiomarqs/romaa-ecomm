import Link from "next/link"
import { renderClassNames } from "../../theme"

import { RomaLogo } from "../Icons"
import { logoContainer } from "./styles"

const NavLogo = () => (
    <Link href="/" passHref>
        <a
            className={renderClassNames(logoContainer)}
            style={{
                right: 'calc(50% - (4.5831rem / 2))'
            }}
        >
            <RomaLogo
                height="24"
            />
        </a>
    </Link>
)

export { NavLogo }