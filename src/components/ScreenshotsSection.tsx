import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ScreenshotsSectionProps {
  onViewCRM: () => void;
}

export function ScreenshotsSection({ onViewCRM }: ScreenshotsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const screenshots = [
    {
      title: "Главный дашборд",
      description: "Полная статистика работы СТО в реальном времени",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzU2Mzk5MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Карточка заказ-наряда",
      description: "Вся информация о заказе и клиенте в одном месте",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzU2Mzk5MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Telegram интеграция",
      description: "Согласование работ прямо из интерфейса СТО",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzU2Mzk5MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Интерфейс, который понравится вашим мастерам
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Интуитивно понятная CRM система, адаптированная специально для автосервисов
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {screenshots.map((screenshot, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "default" : "outline"}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 ${
                activeTab === index 
                  ? "bg-primary text-white" 
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {screenshot.title}
            </Button>
          ))}
        </div>
        
        {/* Active Screenshot */}
        <Card className="max-w-4xl mx-auto shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <ImageWithFallback
                src={screenshots[activeTab].image}
                alt={screenshots[activeTab].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <Badge className="mb-2 bg-primary">
                  {screenshots[activeTab].title}
                </Badge>
                <p className="text-white text-lg">
                  {screenshots[activeTab].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* CTA to view actual CRM */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={onViewCRM}
            className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4"
          >
            Посмотреть живую демо-версию CRM
          </Button>
        </div>
      </div>
    </section>
  );
}