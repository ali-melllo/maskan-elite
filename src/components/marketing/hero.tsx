import Container from "../global/container";
import Icons from "../global/icons";
import { OrbitingCircles } from "../ui/orbiting-circles";
import { GlobalDatabase } from "./GlobalDatabase";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full ">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col pt-5 w-full items-center justify-center gap-y-8 relative">
                <Container className="hidden -mt-12 lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    <OrbitingCircles
                        speed={0.5}
                        radius={200}
                    >
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={300}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center  w-full justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden  lg:block overflow-hidden">
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-[9px] font-medium mr-2 text-white">
                                    BY INVITATION ONLY
                                </span>
                                The Maskan Seal of Protection
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-2xl md:text-4xl text-nowrap lg:text-6xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                            The Gated {" "}
                            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                                Ecosystem {" "}
                            </span>
                            of Trust
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-2xl  mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            The global connector between High-Performance Athletes and Institutional Wealth. Where due diligence is not just a process, but a personal guarantee.
                        </p>
                    </Container>

                    <Container delay={0.3} className="relative px-0">
                        <GlobalDatabase />
                    </Container>

                </div>
            </div>
        </div>
    )
};

export default Hero;