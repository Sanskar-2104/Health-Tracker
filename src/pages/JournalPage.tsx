import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Search, Edit2, Plus, Smile, Frown, Meh } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Sample journal entries data
const sampleJournalEntries = [
  {
    id: 1,
    date: new Date(2023, 4, 17),
    mood: "happy",
    energy: "high",
    title: "Great workout session",
    content: "Had an amazing HIIT session today. Feeling energized and accomplished. Made sure to stretch properly afterward to prevent soreness tomorrow.",
    tags: ["workout", "energy", "achievement"]
  },
  {
    id: 2,
    date: new Date(2023, 4, 16),
    mood: "neutral",
    energy: "medium",
    title: "Back to normal routine",
    content: "Getting back into my routine after the weekend. Diet was on point today, but felt a bit tired in the afternoon. Need to work on my sleep schedule.",
    tags: ["diet", "routine"]
  },
  {
    id: 3,
    date: new Date(2023, 4, 15),
    mood: "sad",
    energy: "low",
    title: "Rest day",
    content: "Taking it easy today. Feeling a bit under the weather, might be catching a cold. Focusing on hydration and getting extra rest.",
    tags: ["rest", "health"]
  },
  {
    id: 4,
    date: new Date(2023, 4, 14),
    mood: "happy",
    energy: "high",
    title: "New personal record!",
    content: "Set a new personal record on my 5K run today! Shaved 30 seconds off my previous best time. The new running shoes definitely helped.",
    tags: ["running", "achievement"]
  },
  {
    id: 5,
    date: new Date(2023, 4, 13),
    mood: "neutral",
    energy: "medium",
    title: "Nutrition check-in",
    content: "Had a good balance of macros today. Protein intake was on point. Need to work on reducing sugar cravings in the evening.",
    tags: ["nutrition", "diet"]
  }
];

const JournalPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [mood, setMood] = useState<string | undefined>("happy");
  const [energy, setEnergy] = useState<string | undefined>("high");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [journalEntries, setJournalEntries] = useState(sampleJournalEntries);
  const [isCreating, setIsCreating] = useState(false);
  
  const getMoodIcon = (mood: string) => {
    switch(mood) {
      case 'happy':
        return <Smile className="text-green-400" />;
      case 'neutral':
        return <Meh className="text-yellow-400" />;
      case 'sad':
        return <Frown className="text-red-400" />;
      default:
        return <Meh className="text-gray-400" />;
    }
  };
  
  const getEnergyColor = (energy: string) => {
    switch(energy) {
      case 'high':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const handleSubmitEntry = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the entry to a server
    const newEntry = {
      id: Date.now(),
      date: date,
      mood: mood || "neutral",
      energy: energy || "medium",
      title: title,
      content: content,
      tags: tags.split(',').map(tag => tag.trim())
    };
    
    setJournalEntries(prev => [newEntry, ...prev]);
    
    // Reset form
    setTitle("");
    setContent("");
    setTags("");
    
    toast({
      title: "Journal Entry Added",
      description: "Your health journal entry has been saved.",
    });
    
    setIsCreating(false);
  };
  
  const filteredEntries = journalEntries.filter(entry => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      entry.title.toLowerCase().includes(query) ||
      entry.content.toLowerCase().includes(query) ||
      entry.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Health Journal</h1>
          <p className="text-gray-400">Track your daily health journey and observations</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            className="bg-health-blue hover:bg-health-blue/80 flex items-center"
            onClick={() => setIsCreating(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Entry
          </Button>
        </div>
      </div>

      {isCreating ? (
        <Card className="glass-card mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle>New Journal Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitEntry} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="entry-date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-health-card border-white/10"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-health-card border-white/10">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => date && setDate(date)}
                        initialFocus
                        className="bg-health-card"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mood">Mood</Label>
                  <Select value={mood} onValueChange={setMood}>
                    <SelectTrigger className="bg-health-card border-white/10">
                      <SelectValue placeholder="Select your mood" />
                    </SelectTrigger>
                    <SelectContent className="bg-health-card border-white/10">
                      <SelectItem value="happy">Happy 😊</SelectItem>
                      <SelectItem value="neutral">Neutral 😐</SelectItem>
                      <SelectItem value="sad">Sad ☹️</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="energy">Energy Level</Label>
                  <Select value={energy} onValueChange={setEnergy}>
                    <SelectTrigger className="bg-health-card border-white/10">
                      <SelectValue placeholder="Select your energy level" />
                    </SelectTrigger>
                    <SelectContent className="bg-health-card border-white/10">
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-health-card border-white/10 focus:border-health-blue"
                  placeholder="Enter a title for your journal entry"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[150px] bg-health-card border-white/10 focus:border-health-blue"
                  placeholder="Write your health observations, feelings, and notes here..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="bg-health-card border-white/10 focus:border-health-blue"
                  placeholder="workout, energy, diet, etc."
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button variant="ghost" onClick={() => setIsCreating(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-health-blue hover:bg-health-blue/80"
              onClick={handleSubmitEntry}
            >
              Save Entry
            </Button>
          </CardFooter>
        </Card>
      ) : null}

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search journal entries..."
            className="pl-10 bg-health-card border-white/10 focus:border-health-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="list" className="data-[state=active]:bg-health-blue">
            List View
          </TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-health-blue">
            Calendar View
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          {filteredEntries.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="text-health-blue mb-4">
                  <Edit2 className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium mb-2">No Journal Entries Found</h3>
                <p className="text-gray-400 text-center mb-6">
                  {searchQuery 
                    ? "No entries match your search criteria. Try adjusting your search."
                    : "Start tracking your health journey by creating your first journal entry."
                  }
                </p>
                {!searchQuery && (
                  <Button 
                    className="bg-health-blue hover:bg-health-blue/80"
                    onClick={() => setIsCreating(true)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create First Entry
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredEntries.map((entry) => (
                <Card key={entry.id} className="glass-card hover-scale">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex gap-2 items-center">
                            {getMoodIcon(entry.mood)}
                            <div className={cn("w-2 h-2 rounded-full", getEnergyColor(entry.energy))}></div>
                          </div>
                          <span className="text-sm text-gray-400">
                            {format(entry.date, "MMMM d, yyyy")}
                          </span>
                        </div>
                        <CardTitle>{entry.title}</CardTitle>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit2 className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{entry.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-health-blue/20 text-health-blue text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Calendar View Coming Soon</h3>
                <p className="text-gray-400">
                  We're working on a calendar view to help you visualize your health journey over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JournalPage;
