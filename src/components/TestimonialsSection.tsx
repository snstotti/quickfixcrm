import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Андрей Морозов",
      role: "Владелец «СТО Премиум»",
      content: "Внедрили CRM 3 месяца назад. Выручка от допработ выросла на 40%. Клиенты быстрее соглашаются через Telegram, чем по телефону. Рекомендую!",
      avatar: "АМ",
      rating: 5
    },
    {
      name: "Елена Васильева", 
      role: "Директор «АвтоГард»",
      content: "Больше не тратим время на звонки клиентам. Telegram-бот всё делает сам: напоминает о записи, согласовывает работы. Мастера довольны, клиенты тоже.",
      avatar: "ЕВ",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      role: "Главный механик «Гараж+»",
      content: "Простая и понятная система. Освоили за неделю. Особенно нравится, что все заказы и история клиента всегда под рукой на телефоне.",
      avatar: "ДП", 
      rating: 5
    }
  ];

  const partners = [
    "Bosch Service",
    "Автомир",
    "СТО Лидер",
    "ТехЦентр",
    "АвтоДок"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Что говорят владельцы автосервисов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 500 СТО уже увеличили прибыль с нашей CRM
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trusted by section */}
        <div className="text-center">
          <h3 className="text-xl mb-8 text-gray-600">
            Нам доверяют ведущие автосервисы
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-lg text-gray-500 px-6 py-3 border border-gray-200 rounded-lg"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}