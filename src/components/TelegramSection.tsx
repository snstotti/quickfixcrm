import { Card, CardContent } from "./ui/card";
import { Shield, Clock, Users } from "lucide-react";

export function TelegramSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Клиенты доверяют",
      description: "95% автовладельцев используют Telegram ежедневно. Никакой регистрации и скачивания приложений."
    },
    {
      icon: Clock,
      title: "Моментальные ответы",
      description: "Средний ответ клиента на согласование через Telegram — 3 минуты против 2 часов по телефону."
    },
    {
      icon: Users,
      title: "Высокая конверсия",
      description: "Конверсия допработ через Telegram в 3 раза выше, чем при устном согласовании."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Почему именно Telegram?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Telegram — это быстро, безопасно и удобно для ваших клиентов
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Interactive Telegram preview */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white">СТО</span>
              </div>
              <div>
                <div className="font-medium">АвтоСервис Премиум</div>
                <div className="text-sm text-gray-500">онлайн</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                <p className="text-sm">Добрый день! Необходимо заменить тормозные колодки (+3500₽). Согласовать?</p>
              </div>
              
              <div className="flex gap-2 justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  ✅ Одобрить
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  ❌ Отказать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}