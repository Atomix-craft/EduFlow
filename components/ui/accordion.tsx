"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  children: React.ReactNode
  className?: string
  type?: "single" | "multiple"
  collapsible?: boolean
}

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
  value: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    >
      {children}
    </div>
  )
)
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, value, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn("border border-gray-200 rounded-lg bg-white", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === AccordionTrigger) {
              return React.cloneElement(child, { 
                onClick: () => setIsOpen(!isOpen),
                isOpen 
              } as any)
            }
            if (child.type === AccordionContent) {
              return React.cloneElement(child, { isOpen } as any)
            }
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const isOpen = (props as any).isOpen || false

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between p-6 text-left font-medium transition-all hover:bg-gray-50",
          isOpen && "[&>svg]:rotate-180",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, isOpen = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0 px-6 text-gray-600">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
