import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Start",
      price: "2 990",
      period: "в месяц",
      description: "Для небольших СТО до 3 постов",
      features: [
        "До 100 заказов в месяц",
        "Telegram-уведомления",
        "Базовая аналитика",
        "1 пользователь",
        "Техподдержка в рабочее время"
      ],
      popular: false,
      ctaText: "Выбрать Start"
    },
    {
      name: "Pro", 
      price: "4 990",
      period: "в месяц",
      description: "Для средних автосервисов до 10 постов",
      features: [
        "Безлимитные заказы",
        "Расширенная Telegram-интеграция", 
        "Полная аналитика + отчёты",
        "До 5 пользователей",
        "Интеграция с 1С",
        "Приоритетная поддержка 24/7",
        "Настройка под ваши процессы"
      ],
      popular: true,
      ctaText: "Выбрать Pro"
    },
    {
      name: "Free 14 дней",
      price: "0",
      period: "бесплатно",
      description: "Полный доступ ко всем функциям",
      features: [
        "Все функции Pro",
        "Безлимитные заказы",
        "Помощь в настройке",
        "Импорт данных",
        "Персональный менеджер"
      ],
      popular: false,
      ctaText: "Начать бесплатно",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Прозрачные тарифы без скрытых комиссий
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий план. Без setup-fees, без комиссий с продаж, без скрытых платежей.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? "ring-2 ring-primary scale-105" 
                  : plan.highlight 
                    ? "ring-2 ring-[#FF6B00] bg-gradient-to-br from-orange-50 to-amber-50"
                    : "hover:-translate-y-1 transform"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl">{plan.price}</span>
                    <span className="text-lg">₽</span>
                  </div>
                  <p className="text-gray-500">{plan.period}</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full h-12 ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : plan.highlight
                        ? "bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  variant={plan.popular || plan.highlight ? "default" : "outline"}
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужен корпоративный тариф для сети автосервисов?
          </p>
          <Button variant="outline" size="lg">
            Обсудить индивидуальные условия
          </Button>
        </div>
      </div>
    </section>
  );
}