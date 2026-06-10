import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, onChange, ...props }: React.ComponentProps<"input">) {
  // Email addresses are case-insensitive and always stored lowercase, so force every
  // typed letter to lowercase right in the field. Done here, in the shared Input, so
  // EVERY email input across every tool behaves the same with no per-form code.
  const isEmail = type === "email"
  const handleChange = isEmail
    ? (e: React.ChangeEvent<HTMLInputElement>) => {
        const lower = e.target.value.toLowerCase()
        if (lower !== e.target.value) e.target.value = lower
        onChange?.(e)
      }
    : onChange
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      onChange={handleChange}
      autoCapitalize={isEmail ? "none" : undefined}
      autoCorrect={isEmail ? "off" : undefined}
      spellCheck={isEmail ? false : undefined}
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
