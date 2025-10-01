import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Баланс', value: '125 400 ₽', change: '+12%', icon: 'Wallet', color: 'text-green-600' },
    { label: 'Расходы', value: '42 800 ₽', change: '-8%', icon: 'TrendingDown', color: 'text-orange-500' },
    { label: 'Доходы', value: '168 200 ₽', change: '+15%', icon: 'TrendingUp', color: 'text-green-600' },
    { label: 'Накопления', value: '89 300 ₽', change: '+25%', icon: 'PiggyBank', color: 'text-green-600' },
  ];

  const budgetCategories = [
    { name: 'Продукты', spent: 15200, limit: 20000, icon: 'ShoppingCart' },
    { name: 'Транспорт', spent: 8500, limit: 10000, icon: 'Car' },
    { name: 'Развлечения', spent: 6800, limit: 8000, icon: 'Film' },
    { name: 'Здоровье', spent: 4200, limit: 7000, icon: 'Heart' },
  ];

  const goals = [
    { name: 'Отпуск в Европу', current: 45000, target: 120000, icon: 'Plane', deadline: 'Июль 2025' },
    { name: 'Новый ноутбук', current: 38000, target: 80000, icon: 'Laptop', deadline: 'Март 2025' },
    { name: 'Аварийный фонд', current: 89300, target: 150000, icon: 'Shield', deadline: 'Декабрь 2025' },
  ];

  const transactions = [
    { name: 'Продукты Пятёрочка', amount: -2340, category: 'Продукты', date: '01 окт', icon: 'ShoppingCart' },
    { name: 'Зарплата', amount: 85000, category: 'Доход', date: '30 сен', icon: 'Briefcase' },
    { name: 'Кафе', amount: -1200, category: 'Развлечения', date: '29 сен', icon: 'Coffee' },
    { name: 'Метро', amount: -450, category: 'Транспорт', date: '28 сен', icon: 'Train' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/30">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/img/58a27d1e-3223-4393-9023-3c38958f658d.jpg" alt="ФинКонтроль" className="h-10 w-10 rounded-xl" />
              <div>
                <h1 className="text-2xl font-bold text-green-700">ФинКонтроль</h1>
                <p className="text-sm text-green-600">Умное управление финансами</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('dashboard')}
                className="gap-2"
              >
                <Icon name="LayoutDashboard" size={18} />
                Дашборд
              </Button>
              <Button 
                variant={activeTab === 'budget' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('budget')}
                className="gap-2"
              >
                <Icon name="Wallet" size={18} />
                Бюджет
              </Button>
              <Button 
                variant={activeTab === 'analytics' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('analytics')}
                className="gap-2"
              >
                <Icon name="BarChart3" size={18} />
                Аналитика
              </Button>
              <Button 
                variant={activeTab === 'goals' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('goals')}
                className="gap-2"
              >
                <Icon name="Target" size={18} />
                Цели
              </Button>
            </nav>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Bell" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-8">
            <section className="text-center py-16 animate-scale-in">
              <h2 className="text-5xl font-bold text-green-700 mb-4">Твои финансы под контролем</h2>
              <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
                ФинКонтроль помогает отслеживать расходы, планировать бюджет и достигать финансовых целей
              </p>
              <Button size="lg" onClick={() => setActiveTab('dashboard')} className="gap-2">
                <Icon name="ArrowRight" size={20} />
                Начать работу
              </Button>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Icon name="PieChart" size={24} className="text-green-600" />
                  </div>
                  <CardTitle>Умная аналитика</CardTitle>
                  <CardDescription>Визуализация расходов по категориям с красивыми графиками</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-green-600" />
                  </div>
                  <CardTitle>Финансовые цели</CardTitle>
                  <CardDescription>Ставь цели и отслеживай прогресс их достижения</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-green-600" />
                  </div>
                  <CardTitle>Контроль бюджета</CardTitle>
                  <CardDescription>Планируй траты и получай уведомления о превышении лимитов</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <img src="/img/82b9a5e4-aa81-416d-b176-777fdf24b43f.jpg" alt="Финансовая аналитика" className="rounded-3xl shadow-2xl mx-auto max-w-3xl w-full" />
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-green-700">Обзор финансов</h2>
              <Button className="gap-2">
                <Icon name="Plus" size={18} />
                Добавить транзакцию
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="hover:shadow-md transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={stat.icon as any} size={24} className={stat.color} />
                      <Badge variant="secondary" className="text-xs">{stat.change}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} />
                    Динамика расходов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-48 flex items-end gap-2">
                      {[65, 45, 80, 55, 70, 40, 90].map((height, idx) => (
                        <div key={idx} className="flex-1 bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg hover:from-green-600 hover:to-green-400 transition-all cursor-pointer" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Пн</span>
                      <span>Вт</span>
                      <span>Ср</span>
                      <span>Чт</span>
                      <span>Пт</span>
                      <span>Сб</span>
                      <span>Вс</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Receipt" size={20} />
                    Последние операции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Icon name={tx.icon as any} size={18} className="text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{tx.name}</p>
                            <p className="text-sm text-muted-foreground">{tx.category} · {tx.date}</p>
                          </div>
                        </div>
                        <p className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-700'}`}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} ₽
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-green-700">Управление бюджетом</h2>
              <Button className="gap-2">
                <Icon name="Settings" size={18} />
                Настроить категории
              </Button>
            </div>

            <img src="/img/752ec198-3db8-4e03-b969-47541489dd39.jpg" alt="Бюджет" className="rounded-3xl shadow-xl max-w-md mx-auto" />

            <div className="grid gap-4">
              {budgetCategories.map((cat, idx) => {
                const percentage = (cat.spent / cat.limit) * 100;
                return (
                  <Card key={idx} className="hover:shadow-md transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Icon name={cat.icon as any} size={20} className="text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{cat.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {cat.spent.toLocaleString()} ₽ из {cat.limit.toLocaleString()} ₽
                            </p>
                          </div>
                        </div>
                        <Badge variant={percentage > 90 ? 'destructive' : percentage > 70 ? 'secondary' : 'outline'}>
                          {percentage.toFixed(0)}%
                        </Badge>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-green-700">Аналитика расходов</h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Расходы по категориям</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 relative">
                    <div className="relative w-48 h-48">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f0fdf4" strokeWidth="20" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#34d399" strokeWidth="20" strokeDasharray="75.4 251.2" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#86efac" strokeWidth="20" strokeDasharray="50.2 251.2" strokeDashoffset="-75.4" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#bbf7d0" strokeWidth="20" strokeDasharray="40.1 251.2" strokeDashoffset="-125.6" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <p className="text-3xl font-bold">42.8K</p>
                        <p className="text-sm text-muted-foreground">всего</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Продукты 35%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <span className="text-sm">Транспорт 20%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-300"></div>
                      <span className="text-sm">Развлечения 16%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-200"></div>
                      <span className="text-sm">Прочее 29%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Сравнение по месяцам</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Сентябрь', 'Август', 'Июль'].map((month, idx) => {
                      const values = [42800, 38200, 45100];
                      const percentage = (values[idx] / 50000) * 100;
                      return (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{month}</span>
                            <span className="text-muted-foreground">{values[idx].toLocaleString()} ₽</span>
                          </div>
                          <div className="h-8 bg-green-100 rounded-lg overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-end px-3 transition-all"
                              style={{ width: `${percentage}%` }}
                            >
                              <span className="text-white text-xs font-medium">{percentage.toFixed(0)}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-green-700">Финансовые цели</h2>
              <Button className="gap-2">
                <Icon name="Plus" size={18} />
                Новая цель
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {goals.map((goal, idx) => {
                const percentage = (goal.current / goal.target) * 100;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-all">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon name={goal.icon as any} size={24} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{goal.name}</h3>
                          <p className="text-sm text-muted-foreground">до {goal.deadline}</p>
                        </div>
                      </div>

                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-green-600">{percentage.toFixed(0)}%</span>
                          <span className="text-sm text-muted-foreground">
                            {goal.current.toLocaleString()} / {goal.target.toLocaleString()} ₽
                          </span>
                        </div>
                        <Progress value={percentage} className="h-3" />
                      </div>

                      <Button variant="outline" className="w-full gap-2">
                        <Icon name="Plus" size={16} />
                        Пополнить
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-white/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ФинКонтроль · Твои финансы под контролем</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
