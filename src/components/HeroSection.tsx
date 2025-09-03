import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onTryDemo: () => void;
}

export function HeroSection({ onTryDemo }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl leading-tight">
              CRM для СТО с <span className="text-primary">Telegram-согласованиями</span> и автоматическими напоминаниями
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Упростите работу автосервиса. Согласовывайте допработы через Telegram, 
              автоматически напоминайте клиентам о записи и увеличивайте выручку до 30%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg"
                onClick={onTryDemo}
              >
                Попробовать 14 дней бесплатно
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              >
                Смотреть демо
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                ✅ Без комиссий
              </span>
              <span className="flex items-center gap-2">
                ✅ Настройка за день
              </span>
              <span className="flex items-center gap-2">
                ✅ Техподдержка 24/7
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613214150333-53afb7561e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzZXJ2aWNlJTIwZ2FyYWdlJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzU2NDc4NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Автосервис"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm animate-bounce">
                ✅ Клиент согласился!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>
    </section>
  );
}