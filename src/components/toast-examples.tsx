"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function BasicToastExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Basic Toasts</CardTitle>
        <CardDescription className="text-xs">Simple toast notifications</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-2">
        <Button 
          size="sm"
          onClick={() => toast('Default toast notification')}
          className="w-full text-xs"
        >
          Show Default Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => toast.success('Success toast notification')}
          className="w-full text-xs"
        >
          Show Success Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => toast.error('Error toast notification')}
          className="w-full text-xs text-destructive"
        >
          Show Error Toast
        </Button>
      </CardContent>
    </Card>
  )
}

export function AdvancedToastExamples() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Advanced Toasts</CardTitle>
        <CardDescription className="text-xs">Toasts with additional features</CardDescription>
      </CardHeader>
      <CardContent className="p-3 space-y-2">
        <Button 
          size="sm"
          onClick={() => 
            toast('Toast with action', {
              description: 'This toast has an action button',
              action: {
                label: 'Undo',
                onClick: () => toast.success('Action clicked')
              }
            })
          }
          className="w-full text-xs"
        >
          Toast with Action
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => 
            toast.promise(
              new Promise(resolve => setTimeout(resolve, 2000)),
              {
                loading: 'Loading...',
                success: 'Operation completed successfully',
                error: 'Something went wrong'
              }
            )
          }
          className="w-full text-xs"
        >
          Promise Toast
        </Button>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => 
            toast('Custom duration toast', {
              duration: 5000,
              description: 'This toast will disappear after 5 seconds'
            })
          }
          className="w-full text-xs"
        >
          Custom Duration
        </Button>
      </CardContent>
    </Card>
  )
} 