import { DownloadIcon, FilterIcon, TrendingUpIcon, ShieldCheck, Award, Crown, Briefcase, Zap, Cpu, Landmark, Tag } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        The Athlete-Institution  <br /><span className="font-subheading italic">Bridge</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        We connect high-performance athletes to institutional real estate and off-market assets under the Maskan Seal of Protection.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Award className="size-5 text-primary" />
                                    <h3 className="text-xl font-semibold">
                                        Elite Athlete Network
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    High-performance talent vetted for integrity and legacy-building potential.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                86
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <ShieldCheck className="w-4 h-4" />
                                                Active Members | 8 Nationalities
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Athlete</div>
                                            <div>Sport</div>
                                            <div>Asset Type</div>
                                            <div>Deployed</div>
                                        </div>
                                        {[
                                            { name: "van Dijk", sport: "Football", asset: "Real Estate", deployed: "€4.2M" },
                                            { name: "F. Klaassen", sport: "Football", asset: "Tech Startup", deployed: "€1.8M" },
                                            { name: "S. de Vries", sport: "Kickboxing", asset: "Brand Equity", deployed: "€850K" },
                                            { name: "L. Nmecha", sport: "Football", asset: "Energy Venture", deployed: "€2.3M" },
                                        ].map((athlete) => (
                                            <div key={athlete.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div className="font-medium">{athlete.name}</div>
                                                <div className="text-muted-foreground">{athlete.sport}</div>
                                                <div>
                                                    {athlete.asset === "Real Estate" && <Landmark className="w-3 h-3 inline mr-1" />}
                                                    {athlete.asset === "Tech Startup" && <Cpu className="w-3 h-3 inline mr-1" />}
                                                    {athlete.asset === "Brand Equity" && <Tag className="w-3 h-3 inline mr-1" />}
                                                    {athlete.asset === "Energy Venture" && <Zap className="w-3 h-3 inline mr-1" />}
                                                    {athlete.asset}
                                                </div>
                                                <div className="text-primary">{athlete.deployed}</div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground border-t border-border/50">
                                        <Crown className="w-3 h-3" />
                                        <span>Total Capital Deployed: <span className="text-primary font-semibold">€18.7M</span></span>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="size-5 text-primary" />
                                    <h3 className="text-xl font-semibold">
                                        Institutional Portfolio
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Off-market assets vetted for long-term wealth preservation.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">€22.4M</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                AUM | 17 Assets | 2 Hubs
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Assets Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Asset</div>
                                            <div>Type</div>
                                            <div>Value</div>
                                            <div>Projected ROI</div>
                                        </div>
                                        {[
                                            { name: "Zuidas Office", type: "Real Estate", value: "€8.2M", roi: "43%" },
                                            { name: "Solar Farm", type: "Energy", value: "€5.7M", roi: "47%" },
                                            { name: "FinTech App", type: "Technology", value: "€3.4M", roi: "51%" },
                                            { name: "Sportswear Label", type: "Brand", value: "€2.1M", roi: "44%" },
                                            { name: "Warehouse Complex", type: "Real Estate", value: "€6.8M", roi: "39%" },
                                            { name: "Battery Storage", type: "Energy", value: "€4.2M", roi: "48%" },
                                        ].map((asset, i) => (
                                            <div key={i} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div className="font-medium">{asset.name}</div>
                                                <div className="text-muted-foreground">{asset.type}</div>
                                                <div>{asset.value}</div>
                                                <div className="text-green-500 font-semibold">{asset.roi}</div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground border-t border-border/50">
                                        <TrendingUpIcon className="w-3 h-3" />
                                        <span>Weighted Avg. ROI: <span className="text-green-500 font-semibold">46.2%</span> | Holdings: Amsterdam · Frankfurt</span>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;