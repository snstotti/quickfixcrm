import { useState } from "react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";

// Landing components
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TelegramSection } from "./components/TelegramSection";
import { ScreenshotsSection } from "./components/ScreenshotsSection";
import { ContactForm } from "./components/ContactForm";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

// CRM components
import { Dashboard } from "./components/crm/Dashboard";
import { OrderCard } from "./components/crm/OrderCard";
import { TelegramIntegration } from "./components/crm/TelegramIntegration";

type ViewType = "landing" | "crm-dashboard" | "crm-order" | "crm-telegram";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("landing");

  const renderContent = () => {
    switch (currentView) {
      case "landing":
        return (
          <div className="min-h-screen">
            <HeroSection onTryDemo={() => setCurrentView("crm-dashboard")} />
            <FeaturesSection />
            <TelegramSection />
            <ScreenshotsSection onViewCRM={() => setCurrentView("crm-dashboard")} />
            <ContactForm />
            <PricingSection />
            <TestimonialsSection />
            <Footer />
          </div>
        );
      
      case "crm-dashboard":
        return (
          <div className="min-h-screen bg-gray-50">
            {/* CRM Header */}
            <header className="bg-white shadow-sm border-b">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl">CRM АвтоСервис</h1>
                  <span className="text-sm text-gray-500">v2.1.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView("landing")}
                  >
                    ← Вернуться на лендинг
                  </Button>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    АП
                  </div>
                </div>
              </div>
            </header>
            
            <Dashboard 
              onViewOrder={() => setCurrentView("crm-order")}
              onViewTelegram={() => setCurrentView("crm-telegram")}
            />
          </div>
        );
      
      case "crm-order":
        return (
          <div className="min-h-screen bg-gray-50">
            {/* CRM Header */}
            <header className="bg-white shadow-sm border-b">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl">CRM АвтоСервис</h1>
                  <span className="text-sm text-gray-500">v2.1.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView("landing")}
                  >
                    ← Вернуться на лендинг
                  </Button>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    АП
                  </div>
                </div>
              </div>
            </header>
            
            <OrderCard 
              onBack={() => setCurrentView("crm-dashboard")}
              onViewTelegram={() => setCurrentView("crm-telegram")}
            />
          </div>
        );
      
      case "crm-telegram":
        return (
          <div className="min-h-screen bg-gray-50">
            {/* CRM Header */}
            <header className="bg-white shadow-sm border-b">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl">CRM АвтоСервис</h1>
                  <span className="text-sm text-gray-500">v2.1.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView("landing")}
                  >
                    ← Вернуться на лендинг
                  </Button>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    АП
                  </div>
                </div>
              </div>
            </header>
            
            <TelegramIntegration 
              onBack={() => setCurrentView("crm-order")}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {renderContent()}
      <Toaster position="top-right" />
    </>
  );
}