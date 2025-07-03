"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate sending data
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent successfully!")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, opportunities, or just want to connect.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                {...register("name", { required: "Please enter your name." })}
                className="mt-1"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="mt-1"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="subject" className="block text-sm font-medium text-foreground">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                {...register("subject", { required: "Please enter a subject." })}
                className="mt-1"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                {...register("message", { required: "Please enter your message." })}
                rows={4}
                className="mt-1"
              ></Textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

