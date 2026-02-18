import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";

const HomePage = () => {
    return (
        <Wrapper className="py-20 pt-0 relative overflow-hidden">
            <Hero />

            <Features />
            <Analysis />
            <Integration />

            <LanguageSupport />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
