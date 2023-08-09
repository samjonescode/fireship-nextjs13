import Link from "next/link";
import Image from "next/image";
import styles from './Nav.module.css'
import AuthCheck from "../components/AuthCheck";
import SignInButton from "@/components/signinbutton";
import { SignOutButton } from "@/components/signoutbutton";

export default function Nav() {
    return(
        <nav className={styles.nav}>
            <Link href={"/"}>

            <Image src="./logo.svg"
                alt="NextSpace Logo"
                width={216}
                height={30}
            />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/"}>Main</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <li>
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>
            </ul>

        </nav>
    )
}