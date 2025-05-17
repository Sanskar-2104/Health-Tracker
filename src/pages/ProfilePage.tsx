import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Switch,
  SwitchThumb,
  SwitchTrack,
} from "@/components/ui/switch";
import { User, Shield, Bell, ChevronRight, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const { toast } = useToast();
  
  // User profile state
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-06-15",
    gender: "male",
    height: "175",
    weight: "70",
    goalWeight: "68",
    goalSteps: "10000",
    goalSleep: "8",
    goalWater: "2.5",
    notifications: {
      email: true,
      push: true,
      reminders: true,
      weeklyReport: true
    }
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNotificationToggle = (notificationType: string) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [notificationType]: !prev.notifications[notificationType as keyof typeof prev.notifications]
      }
    }));
  };
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the updated profile to the server
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };
  
  const handleSaveGoals = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the updated goals to the server
    toast({
      title: "Goals Updated",
      description: "Your health goals have been saved.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-gray-400">Manage your account information and preferences</p>
        </div>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="personal" className="data-[state=active]:bg-health-blue">
            Personal Info
          </TabsTrigger>
          <TabsTrigger value="goals" className="data-[state=active]:bg-health-blue">
            Health Goals
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-health-blue">
            Notifications
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-health-blue" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-health-card border-2 border-health-blue flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/lego/1.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button size="sm" variant="outline" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 flex items-center justify-center">
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">Change photo</span>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium">{profile.name}</h3>
                    <p className="text-gray-400">Member since Oct 2022</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={profile.dateOfBirth}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select 
                      value={profile.gender} 
                      onValueChange={(value) => handleSelectChange("gender", value)}
                    >
                      <SelectTrigger className="bg-health-card border-white/10">
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-health-card border-white/10">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      value={profile.height}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                </div>
                
                <Separator className="my-6 bg-white/10" />
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-health-blue hover:bg-health-blue/80">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card className="glass-card mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-health-blue" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-gray-400">Last changed 3 months ago</p>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Setup 2FA</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Connected Devices</h3>
                    <p className="text-sm text-gray-400">Manage your active sessions</p>
                  </div>
                  <Button variant="ghost" className="p-0">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Health Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGoals} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Current Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      step="0.1"
                      value={profile.weight}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goalWeight">Goal Weight (kg)</Label>
                    <Input
                      id="goalWeight"
                      name="goalWeight"
                      type="number"
                      step="0.1"
                      value={profile.goalWeight}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goalSteps">Daily Step Goal</Label>
                    <Input
                      id="goalSteps"
                      name="goalSteps"
                      type="number"
                      value={profile.goalSteps}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goalSleep">Daily Sleep Goal (hours)</Label>
                    <Input
                      id="goalSleep"
                      name="goalSleep"
                      type="number"
                      step="0.5"
                      value={profile.goalSleep}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goalWater">Daily Water Intake Goal (liters)</Label>
                    <Input
                      id="goalWater"
                      name="goalWater"
                      type="number"
                      step="0.1"
                      value={profile.goalWater}
                      onChange={handleProfileChange}
                      className="bg-health-card border-white/10 focus:border-health-blue"
                    />
                  </div>
                </div>
                
                <Separator className="my-6 bg-white/10" />
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-health-blue hover:bg-health-blue/80">
                    Save Goals
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-health-blue" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-400">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={profile.notifications.email}
                    onCheckedChange={() => handleNotificationToggle("email")}
                  >
                    <SwitchTrack className="bg-white/10 data-[state=checked]:bg-health-blue">
                      <SwitchThumb />
                    </SwitchTrack>
                  </Switch>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Push Notifications</h3>
                    <p className="text-sm text-gray-400">Get notified on your device</p>
                  </div>
                  <Switch
                    checked={profile.notifications.push}
                    onCheckedChange={() => handleNotificationToggle("push")}
                  >
                    <SwitchTrack className="bg-white/10 data-[state=checked]:bg-health-blue">
                      <SwitchThumb />
                    </SwitchTrack>
                  </Switch>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Daily Reminders</h3>
                    <p className="text-sm text-gray-400">Get reminded about your daily goals</p>
                  </div>
                  <Switch
                    checked={profile.notifications.reminders}
                    onCheckedChange={() => handleNotificationToggle("reminders")}
                  >
                    <SwitchTrack className="bg-white/10 data-[state=checked]:bg-health-blue">
                      <SwitchThumb />
                    </SwitchTrack>
                  </Switch>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Weekly Health Report</h3>
                    <p className="text-sm text-gray-400">Get a summary of your weekly progress</p>
                  </div>
                  <Switch
                    checked={profile.notifications.weeklyReport}
                    onCheckedChange={() => handleNotificationToggle("weeklyReport")}
                  >
                    <SwitchTrack className="bg-white/10 data-[state=checked]:bg-health-blue">
                      <SwitchThumb />
                    </SwitchTrack>
                  </Switch>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
