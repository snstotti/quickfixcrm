import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Заявка отправлена! Мы свяжемся с вами в течение 30 минут.");
    setFormData({ name: "", phone: "", email: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Начните бесплатный тест-драйв
            </h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку и получите полный доступ к CRM системе на 14 дней
            </p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Получить демо-доступ</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Trust indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <p className="text-sm text-gray-600">Настройка за 1 день</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🛡️</div>
              <p className="text-sm text-gray-600">Безопасность данных</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">📞</div>
              <p className="text-sm text-gray-600">Поддержка 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}