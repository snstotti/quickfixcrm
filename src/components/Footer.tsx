import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4">CRM для СТО</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Современная CRM система для автосервисов с Telegram-интеграцией. 
              Увеличьте выручку и улучшите клиентский сервис.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Telegram
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                YouTube
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg mb-4">Продукт</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Функции</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg mb-4">Поддержка</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Справка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Статус системы</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-lg mb-2">Телефон</h4>
            <p className="text-gray-400">+7 (495) 123-45-67</p>
          </div>
          <div>
            <h4 className="text-lg mb-2">Email</h4>
            <p className="text-gray-400">hello@crm-sto.ru</p>
          </div>
          <div>
            <h4 className="text-lg mb-2">Режим работы</h4>
            <p className="text-gray-400">Пн-Пт: 9:00-19:00 МСК</p>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-8" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 CRM для СТО. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}