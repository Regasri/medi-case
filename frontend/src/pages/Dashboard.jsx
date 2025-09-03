import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Users, 
  Settings,
  BarChart3,
  Shield,
  Zap,
  FileCheck,
  GitBranch,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">TestCaseAI</h1>
                <p className="text-sm text-muted-foreground">Healthcare Compliance Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-healthcare-green border-healthcare-green/30">
                <CheckCircle className="h-3 w-3 mr-1" />
                Compliant
              </Badge>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Team
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Test Cases Generated</CardTitle>
              <FileCheck className="h-4 w-4 text-healthcare-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-healthcare-green">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <Shield className="h-4 w-4 text-healthcare-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <Progress value={98.2} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
              <Zap className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3s</div>
              <p className="text-xs text-muted-foreground">
                Average per requirement
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <GitBranch className="h-4 w-4 text-healthcare-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-healthcare-green">+3</span> new this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Generate test cases from your requirements in seconds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-24 flex flex-col items-center justify-center space-y-2 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Upload className="h-6 w-6" />
                    <span>Upload Requirements</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2 border-primary/20 hover:shadow-card transition-all duration-200">
                    <Brain className="h-6 w-6 text-primary" />
                    <span>AI Generate</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Generated 45 test cases",
                      project: "Cardiac Monitoring System v2.1",
                      time: "2 minutes ago",
                      status: "success"
                    },
                    {
                      action: "Compliance check completed",
                      project: "Patient Data Interface",
                      time: "1 hour ago", 
                      status: "success"
                    },
                    {
                      action: "Requirements updated",
                      project: "MRI Control Software",
                      time: "3 hours ago",
                      status: "warning"
                    },
                    {
                      action: "Integration sync failed",
                      project: "Lab Results Portal",
                      time: "1 day ago",
                      status: "error"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className={`rounded-full p-1 ${
                        item.status === 'success' ? 'bg-healthcare-green/20 text-healthcare-green' :
                        item.status === 'warning' ? 'bg-warning/20 text-warning' :
                        'bg-destructive/20 text-destructive'
                      }`}>
                        {item.status === 'success' ? <CheckCircle className="h-3 w-3" /> :
                         item.status === 'warning' ? <AlertTriangle className="h-3 w-3" /> :
                         <AlertTriangle className="h-3 w-3" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.project}</p>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Compliance Dashboard */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-healthcare-green" />
                  Compliance Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { standard: "FDA 21 CFR Part 820", score: 98, color: "healthcare-green" },
                  { standard: "IEC 62304", score: 95, color: "healthcare-blue" },
                  { standard: "ISO 13485", score: 92, color: "warning" },
                  { standard: "ISO 27001", score: 89, color: "healthcare-purple" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.standard}</span>
                      <span className="text-muted-foreground">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Integration Status */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="h-5 w-5 mr-2 text-primary" />
                  Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Jira", status: "connected", lastSync: "2 min ago" },
                  { name: "Azure DevOps", status: "connected", lastSync: "5 min ago" },
                  { name: "Polarion", status: "syncing", lastSync: "syncing..." },
                  { name: "BigQuery", status: "connected", lastSync: "1 hour ago" }
                ].map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        integration.status === 'connected' ? 'bg-healthcare-green' :
                        integration.status === 'syncing' ? 'bg-warning animate-pulse' :
                        'bg-destructive'
                      }`} />
                      <span className="text-sm font-medium">{integration.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{integration.lastSync}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Analytics Preview */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="text-2xl font-bold text-primary">127%</div>
                  <p className="text-sm text-muted-foreground mb-4">Testing efficiency increase</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;