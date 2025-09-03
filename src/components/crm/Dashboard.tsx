import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { BarChart3, Users, Car, TrendingUp, MessageSquare, Bell } from "lucide-react";

interface DashboardProps {
  onViewOrder: () => void;
  onViewTelegram: () => void;
}

export function Dashboard({ onViewOrder, onViewTelegram }: DashboardProps) {
  const stats = [
    {
      title: "Заказы сегодня",
      value: "12",
      change: "+3 к вчера",
      icon: Car,
      color: "text-blue-600"
    },
    {
      title: "Выручка за неделю",
      value: "285 000 ₽",
      change: "+15% к пред. неделе",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Конверсия допработ",
      value: "87%",
      change: "через Telegram",
      icon: MessageSquare,
      color: "text-purple-600"
    },
    {
      title: "Активные клиенты",
      value: "156",
      change: "+8 новых",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    {
      id: "ЗН-2024-001",
      client: "Иванов А.А.",
      car: "Toyota Camry",
      status: "Ожидает согласования",
      amount: "15 000 ₽",
      telegram: true
    },
    {
      id: "ЗН-2024-002", 
      client: "Петрова М.С.",
      car: "BMW X3",
      status: "В работе",
      amount: "42 500 ₽",
      telegram: false
    },
    {
      id: "ЗН-2024-003",
      client: "Сидоров В.П.",
      car: "Mercedes C-Class",
      status: "Готов к выдаче",
      amount: "28 700 ₽",
      telegram: true
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Главный дашборд</h1>
          <p className="text-gray-600">Добро пожаловать в CRM «АвтоСервис Премиум»</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Уведомления (3)
          </Button>
          <Button onClick={onViewTelegram} className="bg-[#0088CC] hover:bg-[#0088CC]/90">
            <MessageSquare className="w-4 h-4 mr-2" />
            Telegram
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl mb-1">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <div className={`${stat.color} bg-gray-50 p-3 rounded-full`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Выручка по дням
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>График выручки</p>
                <p className="text-sm">Данные за последние 30 дней</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Быстрые действия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={onViewOrder} className="w-full justify-start">
              <Car className="w-4 h-4 mr-2" />
              Новый заказ-наряд
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Добавить клиента
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              Отправить уведомление
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-2" />
              Отчёты
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Последние заказы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={onViewOrder}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.client} • {order.car}</p>
                  </div>
                  {order.telegram && (
                    <Badge className="bg-[#0088CC] text-white">
                      Telegram
                    </Badge>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <p className="text-sm text-gray-600">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}