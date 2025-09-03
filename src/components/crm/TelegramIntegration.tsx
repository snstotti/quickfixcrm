import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, MessageSquare, Send, Check, X } from "lucide-react";
import { toast } from "sonner@2.0.3";


interface TelegramIntegrationProps {
  onBack: () => void;
}

export function TelegramIntegration({ onBack }: TelegramIntegrationProps) {
const chatContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "🚗 Здравствуйте, Алексей! Для вашего Toyota Camry рекомендуем выполнить дополнительные работы:",
      timestamp: "14:35"
    },
    {
      id: 2,
      type: "bot", 
      text: "🔧 Замена тормозных колодок - 3 500₽\n🔍 Диагностика подвески - 1 500₽\n\nИтого: 5 000₽",
      timestamp: "14:35"
    }
  ]);

  const [clientStatus, setClientStatus] = useState("typing");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Имитация активности клиента
    const timer = setTimeout(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: 3,
          type: "client",
          text: "Тормозные колодки точно нужно менять?",
          timestamp: "14:37"
        }]);
        setIsTyping(false);
        
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: 4,
            type: "bot",
            text: "Да, износ критический - осталось 1-2мм. Рекомендуем заменить для безопасности.",
            timestamp: "14:38"
          }]);
          
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: 5,
              type: "client", 
              text: "Хорошо, согласен на колодки. Диагностику пока отложим.",
              timestamp: "14:39"
            }]);
            setClientStatus("partial_approved");
            toast.success("Клиент частично согласовал работы!");
          }, 2000);
        }, 1500);
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleApproveAll = () => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: "client",
      text: "Согласен на все работы",
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }]);
    setClientStatus("approved");
    toast.success("Клиент согласовал все работы!");
  };

  const handleRejectAll = () => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: "client", 
      text: "Спасибо, дополнительные работы пока не нужны",
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }]);
    setClientStatus("rejected");
    toast.error("Клиент отклонил дополнительные работы");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
        <div>
          <h1 className="text-3xl">Telegram-интеграция</h1>
          <p className="text-gray-600">Живая переписка с клиентом Ивановым А.А.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 ">
        {/* Chat Interface */}
        <Card className="lg:col-span-2 border-0 shadow-lg h-96 flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0088CC]" />
                Чат с клиентом
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">онлайн</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 space-y-3 overflow-y-auto mb-4 pr-2"
              style={{ maxHeight: "220px" }}>
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.type === 'client' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'client' 
                        ? 'bg-[#0088CC] text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'client' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-br-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Quick Actions for Client */}
            {clientStatus === "typing" && !isTyping && (
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="bg-green-500 hover:bg-green-600"
                  onClick={handleApproveAll}
                >
                  <Check className="w-4 h-4 mr-1" />
                  Согласовать всё
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={handleRejectAll}
                >
                  <X className="w-4 h-4 mr-1" />
                  Отказаться
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Status Panel */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Статус согласования</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Замена тормозных колодок</span>
                <Badge className={
                  clientStatus === "approved" || clientStatus === "partial_approved"
                    ? "bg-green-500" 
                    : clientStatus === "rejected" 
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }>
                  {clientStatus === "approved" || clientStatus === "partial_approved" ? "✅" : 
                   clientStatus === "rejected" ? "❌" : "⏳"}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Диагностика подвески</span>
                <Badge className={
                  clientStatus === "approved" 
                    ? "bg-green-500" 
                    : clientStatus === "rejected" || clientStatus === "partial_approved"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }>
                  {clientStatus === "approved" ? "✅" : 
                   clientStatus === "rejected" || clientStatus === "partial_approved" ? "❌" : "⏳"}
                </Badge>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-2">
                <span>К доплате:</span>
                <span className="font-medium">
                  {clientStatus === "approved" ? "5 000₽" :
                   clientStatus === "partial_approved" ? "3 500₽" :
                   clientStatus === "rejected" ? "0₽" : "5 000₽"}
                </span>
              </div>
              
              <div className="text-sm text-gray-600">
                Последняя активность: только что
              </div>
            </div>
            
            {/* Analytics */}
            <div className="pt-4 border-t space-y-2">
              <h4 className="font-medium">Статистика</h4>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Среднее время ответа:</span>
                  <span>2.5 мин</span>
                </div>
                <div className="flex justify-between">
                  <span>Конверсия допработ:</span>
                  <span className="text-green-600">87%</span>
                </div>
                <div className="flex justify-between">
                  <span>Всего уведомлений:</span>
                  <span>247</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Настройки Telegram-бота</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Уведомления</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ Согласование допработ</li>
                <li>✅ Напоминания о записи</li>
                <li>✅ Готовность автомобиля</li>
                <li>✅ Плановое ТО</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Автоматизация</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ Автоответы</li>
                <li>✅ Умные предложения</li>
                <li>✅ Напоминания</li>
                <li>✅ Отчёты клиентам</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Интеграция</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ Синхронизация с CRM</li>
                <li>✅ Webhook события</li>
                <li>✅ API для допработ</li>
                <li>✅ Аналитика переходов</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}