import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Activity, Heart, LineChart, Clock, Droplet, 
  Utensils, TrendingUp, Calendar, Plus 
} from "lucide-react";
import { ResponsiveContainer, LineChart as ReLineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Sample data - this would come from an API in a real application
const last7DaysData = [
  { day: 'Mon', steps: 8245, calories: 2100, sleep: 7.2, hydration: 1.8, weight: 72.5, heartRate: 68 },
  { day: 'Tue', steps: 10123, calories: 2300, sleep: 6.8, hydration: 2.1, weight: 72.3, heartRate: 72 },
  { day: 'Wed', steps: 7890, calories: 1950, sleep: 7.5, hydration: 2.5, weight: 72.2, heartRate: 65 },
  { day: 'Thu', steps: 9245, calories: 2250, sleep: 8.1, hydration: 2.3, weight: 72.0, heartRate: 67 },
  { day: 'Fri', steps: 11320, calories: 2420, sleep: 6.9, hydration: 1.9, weight: 71.8, heartRate: 70 },
  { day: 'Sat', steps: 5600, calories: 1850, sleep: 7.8, hydration: 2.0, weight: 71.9, heartRate: 64 },
  { day: 'Sun', steps: 7230, calories: 2050, sleep: 8.3, hydration: 2.2, weight: 71.7, heartRate: 66 },
];

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("week");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-gray-400">Track your health and wellness journey</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button
            variant={timeRange === "week" ? "default" : "outline"}
            onClick={() => setTimeRange("week")}
            className={timeRange === "week" ? "bg-health-blue" : "border-white/20"}
          >
            Week
          </Button>
          <Button
            variant={timeRange === "month" ? "default" : "outline"}
            onClick={() => setTimeRange("month")}
            className={timeRange === "month" ? "bg-health-blue" : "border-white/20"}
          >
            Month
          </Button>
          <Button
            variant={timeRange === "year" ? "default" : "outline"}
            onClick={() => setTimeRange("year")}
            className={timeRange === "year" ? "bg-health-blue" : "border-white/20"}
          >
            Year
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Daily Summary Card */}
        <Card className="glass-card col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-health-blue" />
              Today's Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-health-blue" />
                  <span>Steps</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">7,230</span>
                  <span className="text-xs text-green-400 ml-2 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12%
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-health-purple" />
                  <span>Calories</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">2,050</span>
                  <span className="text-xs text-gray-400 ml-2">kcal</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-health-green" />
                  <span>Sleep</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">8.3</span>
                  <span className="text-xs text-gray-400 ml-2">hrs</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-health-blue" />
                  <span>Water</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">2.2</span>
                  <span className="text-xs text-gray-400 ml-2">L</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-health-purple" />
                  <span>Heart Rate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">66</span>
                  <span className="text-xs text-gray-400 ml-2">bpm</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Activity Chart */}
        <Card className="glass-card col-span-full md:col-span-2">
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="steps">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="steps" className="data-[state=active]:bg-health-blue">Steps</TabsTrigger>
                <TabsTrigger value="calories" className="data-[state=active]:bg-health-purple">Calories</TabsTrigger>
                <TabsTrigger value="sleep" className="data-[state=active]:bg-health-green">Sleep</TabsTrigger>
              </TabsList>
              
              <TabsContent value="steps" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={last7DaysData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A1F2C', 
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: 'white' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="steps" 
                      stroke="#33C3F0" 
                      fill="url(#stepsGradient)" 
                      strokeWidth={2} 
                    />
                    <defs>
                      <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#33C3F0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="calories" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={last7DaysData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A1F2C', 
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: 'white' 
                      }} 
                    />
                    <Bar dataKey="calories" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="sleep" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={last7DaysData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A1F2C', 
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: 'white' 
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sleep" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      dot={{ fill: '#10B981', stroke: '#10B981', strokeWidth: 2, r: 4 }}
                      activeDot={{ fill: '#10B981', stroke: '#fff', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Health Metrics Section */}
      <h2 className="text-2xl font-bold mb-6">Health Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Heart Rate Card */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium flex items-center">
              <Heart className="h-5 w-5 text-health-purple mr-2" />
              Heart Rate
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Show history</span>
              <LineChart className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">66 <span className="text-sm text-muted-foreground font-normal">bpm</span></div>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={last7DaysData}>
                  <Line
                    type="monotone"
                    dataKey="heartRate"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={false}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Your average is <span className="text-health-purple">68 bpm</span>
            </div>
          </CardContent>
        </Card>

        {/* Hydration Card */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium flex items-center">
              <Droplet className="h-5 w-5 text-health-blue mr-2" />
              Hydration
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Show history</span>
              <LineChart className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">2.2 <span className="text-sm text-muted-foreground font-normal">L / 3 L</span></div>
            <div className="h-[60px] flex items-center">
              <div className="w-full bg-health-darker rounded-full h-4">
                <div className="bg-gradient-to-r from-health-blue to-health-blue/70 h-4 rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              73% of your daily goal
            </div>
            <div className="mt-4">
              <Button className="w-full bg-health-blue/20 hover:bg-health-blue/30 border border-health-blue/30">
                <Plus className="mr-2 h-4 w-4" />
                Log Water
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weight Card */}
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium flex items-center">
              <Activity className="h-5 w-5 text-health-green mr-2" />
              Weight
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Show history</span>
              <LineChart className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">71.7 <span className="text-sm text-muted-foreground font-normal">kg</span></div>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={last7DaysData}>
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-green-500 mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              0.8 kg lost this week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Button className="flex-1 bg-health-blue hover:bg-health-blue/80">
          <Plus className="mr-2 h-4 w-4" />
          Log New Activity
        </Button>
        <Button className="flex-1" variant="outline">
          <Heart className="mr-2 h-4 w-4" />
          Record Vitals
        </Button>
        <Button className="flex-1" variant="outline">
          <Utensils className="mr-2 h-4 w-4" />
          Log Meal
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;