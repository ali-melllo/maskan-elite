import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-transparent backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                        <div className="h-14 w-16 flex">
                                <Image
                                    src={"/images/logo.webp"}
                                    alt={"maskan-elite"}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <span className="text-xl font-semibold hidden lg:block">
                                Maskan Elite
                            </span>
                        </Link>
                    </div>

                    {/* <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index} className="text-sm font-medium -1 link">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    <div className="flex items-center gap-4">
                        <Link href="#" className="hidden lg:block">
                            <Button disabled variant="blue">
                                Join Our Community
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
