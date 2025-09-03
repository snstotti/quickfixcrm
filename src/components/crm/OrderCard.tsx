import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { ArrowLeft, Car, User, Phone, MessageSquare, Check, X, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface OrderCardProps {
  onBack: () => void;
  onViewTelegram: () => void;
}

export function OrderCard({ onBack, onViewTelegram }: OrderCardProps) {
  const [works, setWorks] = useState([
    { id: 1, name: "Замена масла", price: 2500, approved: true, required: true },
    { id: 2, name: "Замена воздушного фильтра", price: 800, approved: true, required: true },
    { id: 3, name: "Замена тормозных колодок", price: 3500, approved: null, required: false },
    { id: 4, name: "Диагностика подвески", price: 1500, approved: null, required: false },
    { id: 5, name: "Замена амортизаторов", price: 8500, approved: false, required: false }
  ]);

  const [isSending, setIsSending] = useState(false);

  const handleSendTelegram = async () => {
    setIsSending(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Запрос отправлен в Telegram клиенту!");
    setIsSending(false);
    
    // Имитация ответа клиента через 3 секунды
    setTimeout(() => {
      setWorks(prev => prev.map(work => 
        work.id === 3 ? { ...work, approved: true } : work
      ));
      toast.success("Клиент согласовал замену тормозных колодок!");
    }, 3000);
  };

  const getStatusBadge = (approved: boolean | null, required: boolean) => {
    if (required) return <Badge className="bg-blue-500">Основные работы</Badge>;
    if (approved === true) return <Badge className="bg-green-500">✅ Согласовано</Badge>;
    if (approved === false) return <Badge variant="destructive">❌ Отклонено</Badge>;
    return <Badge variant="outline">⏳ Ожидает согласования</Badge>;
  };

  const totalAmount = works.reduce((sum, work) => 
    (work.approved === true || work.required) ? sum + work.price : sum, 0
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к дашборду
        </Button>
        <div>
          <h1 className="text-3xl">Заказ-наряд ЗН-2024-001</h1>
          <p className="text-gray-600">Создан 29.08.2024 в 14:30</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Client Info */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Информация о клиенте
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">ФИО</p>
              <p className="font-medium">Иванов Алексей Анатольевич</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Телефон</p>
              <p className="font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +7 (999) 123-45-67
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Telegram</p>
              <p className="font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#0088CC]" />
                @alexei_ivanov
                <Badge className="bg-green-500 text-white text-xs">Активен</Badge>
              </p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-gray-600">Автомобиль</p>
              <p className="font-medium flex items-center gap-2">
                <Car className="w-4 h-4" />
                Toyota Camry 2019
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">VIN</p>
              <p className="font-mono text-sm">JTDKB20U693123456</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Пробег</p>
              <p>85 240 км</p>
            </div>
          </CardContent>
        </Card>

        {/* Works List */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Список работ</CardTitle>
              <Button 
                onClick={handleSendTelegram}
                disabled={isSending}
                className="bg-[#0088CC] hover:bg-[#0088CC]/90"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {isSending ? "Отправляем..." : "Отправить в Telegram"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {works.map((work) => (
                <div 
                  key={work.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Switch 
                      checked={work.approved === true || work.required}
                      disabled={work.required || work.approved === null}
                    />
                    <div>
                      <p className="font-medium">{work.name}</p>
                      <p className="text-sm text-gray-600">{work.price.toLocaleString()} ₽</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(work.approved, work.required)}
                    {work.approved === null && !work.required && (
                      <Clock className="w-4 h-4 text-gray-400 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex justify-between items-center">
              <p className="text-lg">Итого к оплате:</p>
              <p className="text-2xl">{totalAmount.toLocaleString()} ₽</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Telegram Preview */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#0088CC]" />
            Превью уведомления в Telegram
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-md bg-[#0088CC] text-white p-4 rounded-lg">
            <div className="bg-white/10 p-3 rounded mb-3">
              <p className="text-sm mb-2">🚗 <strong>АвтоСервис Премиум</strong></p>
              <p className="text-sm">
                Здравствуйте, Алексей! Для вашего Toyota Camry рекомендуем выполнить дополнительные работы:
              </p>
            </div>
            
            <div className="bg-white/10 p-3 rounded mb-3">
              <p className="text-sm">🔧 Замена тормозных колодок - 3 500₽</p>
              <p className="text-sm">🔍 Диагностика подвески - 1 500₽</p>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={onViewTelegram}
              >
                ✅ Согласовать всё
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={onViewTelegram}
              >
                📋 Выборочно
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}