// components/ShadcnDemo.tsx
// Demo component showcasing shadcn/ui components with JoinEcoGrow branding

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Leaf, TreePine, Zap, Star, ChevronRight } from 'lucide-react';

export default function ShadcnDemo() {
  const [likeCount, setLikeCount] = useState(42);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-joinecogrow-green to-joinecogrow-blue bg-clip-text text-transparent">
          🎨 shadcn/ui Components Demo
        </h1>
        <p className="text-muted-foreground text-lg">
          Beautiful, accessible components for JoinEcoGrow Platform
        </p>
      </div>

      {/* Button Showcase */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-joinecogrow-green" />
            Button Variants
          </CardTitle>
          <CardDescription>
            Different button styles and sizes for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="bg-joinecogrow-green hover:bg-joinecogrow-green/90">
              JoinEcoGrow Primary
            </Button>
            <Button variant="outline" className="border-joinecogrow-blue text-joinecogrow-blue hover:bg-joinecogrow-blue hover:text-white">
              JoinEcoGrow Secondary
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-joinecogrow-green" />
              <CardTitle>Tree Planting</CardTitle>
            </div>
            <CardDescription>
              Plant trees and track your environmental impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Trees Planted</span>
                <span className="font-semibold text-joinecogrow-green">1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>CO₂ Offset</span>
                <span className="font-semibold text-joinecogrow-blue">24.9 tons</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-joinecogrow-green hover:bg-joinecogrow-green/90">
              Plant a Tree
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TreePine className="h-6 w-6 text-joinecogrow-lightGreen" />
              <CardTitle>Community Impact</CardTitle>
            </div>
            <CardDescription>
              Join thousands of eco-conscious individuals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Active Members</span>
                <span className="font-semibold text-joinecogrow-lightGreen">12,543</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Projects Completed</span>
                <span className="font-semibold text-joinecogrow-lightBlue">856</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-joinecogrow-lightGreen text-joinecogrow-lightGreen hover:bg-joinecogrow-lightGreen hover:text-white">
              Join Community
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-joinecogrow-blue" />
              <CardTitle>V0-Cursor Integration</CardTitle>
            </div>
            <CardDescription>
              AI-powered component generation and development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Components Generated</span>
                <span className="font-semibold text-joinecogrow-blue">47</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Development Speed</span>
                <span className="font-semibold text-joinecogrow-blue">3x Faster</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full border-joinecogrow-blue text-joinecogrow-blue hover:bg-joinecogrow-blue hover:text-white"
              onClick={() => setLikeCount(likeCount + 1)}
            >
              <Heart className="mr-2 h-4 w-4" />
              Like ({likeCount})
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Features</CardTitle>
          <CardDescription>
            Test the components with real interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Button States</h3>
              <div className="space-y-2">
                <Button className="w-full" disabled>
                  Disabled Button
                </Button>
                <Button className="w-full" disabled>
                  Loading Button
                </Button>
                <Button className="w-full bg-joinecogrow-green hover:bg-joinecogrow-green/90">
                  Active Button
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Card Variations</h3>
              <Card className="border-joinecogrow-green">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-joinecogrow-green">Branded Card</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    This card uses JoinEcoGrow brand colors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Cancel
            </Button>
            <Button size="sm" className="bg-joinecogrow-green hover:bg-joinecogrow-green/90">
              Save Changes
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Status */}
      <Card className="bg-gradient-to-r from-joinecogrow-green/10 to-joinecogrow-blue/10 border-joinecogrow-green">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-joinecogrow-green font-semibold">
            <Leaf className="h-5 w-5" />
            shadcn/ui Successfully Integrated!
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Your JoinEcoGrow Platform now has access to beautiful, accessible UI components.
            All components are fully customizable and follow your brand guidelines.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
