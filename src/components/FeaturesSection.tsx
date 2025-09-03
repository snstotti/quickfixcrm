import { Card, CardContent } from "./ui/card";
import { MessageSquare, Bell, Smartphone, BarChart3 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Telegram-согласования",
      description: "Отправляйте запросы на допработы прямо в Telegram клиента. Получайте ответы моментально."
    },
    {
      icon: Bell,
      title: "Авто-напоминания",
      description: "Автоматические уведомления о записи, готовности авто и необходимости техобслуживания."
    },
    {
      icon: Smartphone,
      title: "Мобильная версия",
      description: "Полноценная работа с телефона и планшета. Управляйте СТО из любой точки мира."
    },
    {
      icon: BarChart3,
      title: "Простая аналитика",
      description: "Отчёты по выручке, конверсии допработ и эффективности мастеров в понятных графиках."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Всё что нужно для современного автосервиса
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Увеличьте выручку и клиентский сервис с помощью автоматизации процессов
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}