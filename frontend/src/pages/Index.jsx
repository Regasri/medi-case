import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  FileText, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Workflow,
  Database,
  Lock
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow">
              <Brain className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          
          <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Healthcare Testing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Automate Test Case
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Generation with AI
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform healthcare software requirements into compliant, traceable test cases 
            integrated with enterprise toolchains. Reduce manual testing effort by 90%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              onClick={() => navigate('/login')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/20 hover:shadow-card transition-all duration-200"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Healthcare Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the strictest regulatory requirements while accelerating your development cycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <div className="bg-healthcare-blue/10 p-3 rounded-lg w-fit">
                <Zap className="h-6 w-6 text-healthcare-blue" />
              </div>
              <CardTitle>Instant Generation</CardTitle>
              <CardDescription>
                Convert requirements to test cases in seconds, not hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Natural language processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Multiple format support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Real-time generation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <div className="bg-healthcare-green/10 p-3 rounded-lg w-fit">
                <Shield className="h-6 w-6 text-healthcare-green" />
              </div>
              <CardTitle>Full Compliance</CardTitle>
              <CardDescription>
                Meet FDA, IEC 62304, ISO standards automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  FDA 21 CFR Part 820
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  IEC 62304 & ISO 13485
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  GDPR & HIPAA ready
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <div className="bg-healthcare-purple/10 p-3 rounded-lg w-fit">
                <Workflow className="h-6 w-6 text-healthcare-purple" />
              </div>
              <CardTitle>Enterprise Integration</CardTitle>
              <CardDescription>
                Seamless connection with your existing toolchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Jira & Azure DevOps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Polarion & BigQuery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-healthcare-green mr-2" />
                  Custom API support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powered by Google AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge AI technologies for unmatched accuracy and performance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Gemini AI", icon: Brain },
            { name: "Vertex AI", icon: Database },
            { name: "BigQuery", icon: FileText },
            { name: "Firebase", icon: Lock }
          ].map((tech, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card text-center p-6 hover:shadow-elevated transition-all duration-300">
              <tech.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">{tech.name}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-primary border-0 shadow-glow text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join leading healthcare companies already using AI to accelerate their compliance testing
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => navigate('/login')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;