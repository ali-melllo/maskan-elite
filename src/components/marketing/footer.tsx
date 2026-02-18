import Link from "next/link";
import Container from "../global/container";
import Image from "next/image";
import { Building, Shield, Award, Users, Landmark, TrendingUp, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-primary/10 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            {/* Background Texture */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[8rem]"></div>
            </div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full relative">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[280px]">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Image
                                    className="size-8 relative z-10"
                                    src={"/images/logo.webp"}
                                    alt={"Maskan Elite"}
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
                            </div>
                            <span className="text-base md:text-xl font-heading font-medium text-foreground">
                                maskan<span className="text-primary font-light"> elite</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start leading-relaxed">
                            Bridging high-performance athletes with institutional real estate and off-market assets under the Maskan Seal of Protection.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Building className="w-3 h-3 text-primary" />
                                <span>€22.4M AUM</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-3 h-3 text-primary" />
                                <span>86 Athletes</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-primary" />
                                <span>2 Hubs</span>
                            </div>
                        </div>
                        
                        {/* Seal of Protection */}
                        <div className="flex items-center gap-2 mt-4 border border-primary/20 rounded-full px-3 py-1.5 bg-primary/5">
                            <Shield className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-medium">Maskan Seal of Protection™</span>
                        </div>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground flex items-center gap-2">
                                <Award className="w-4 h-4 text-primary" />
                                For Athletes
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Investment Opportunities
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Portfolio Diversification
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Legacy Building
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Athlete Network
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Success Stories
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground flex items-center gap-2">
                                    <Landmark className="w-4 h-4 text-primary" />
                                    Asset Classes
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Real Estate
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Technology Ventures
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Energy Projects
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Brand Equity
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Off-Market Deals
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                Locations
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Amsterdam HQ
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Frankfurt Office
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Berlin Desk
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                        Hamburg Satellite
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    Performance
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Q2 2024 Report
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Investor Relations
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300">
                                            Portfolio Dashboard
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-primary/10">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary/60" />
                        <span className="text-xs text-muted-foreground">FINRA Regulated</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary/60" />
                        <span className="text-xs text-muted-foreground">Athlete Trust Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary/60" />
                        <span className="text-xs text-muted-foreground">Institutional Grade</span>
                    </div>
                </div>
                
                <div className="mt-8 md:flex md:items-center justify-between footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Maskan Elite. All rights reserved. Amsterdam · Frankfurt
                    </p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Imprint
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;