import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { HardwarePage } from "@/pages/HardwarePage";
import { InteriorsPage } from "@/pages/InteriorsPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ContactPage } from "@/pages/ContactPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { StudioPage } from "@/pages/StudioPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rb-enterprises" element={<HardwarePage />} />
        <Route path="/rb-interiors" element={<InteriorsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
