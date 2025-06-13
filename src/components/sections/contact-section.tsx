
'use client';

import * as React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, {message: 'Name cannot exceed 50 characters.'}),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message cannot exceed 500 characters.'}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);

    const recipientEmail = 'ab1933395@gmail.com'; // Your email address
    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
    const body = encodeURIComponent(
`Hello Abhi,

You have a new message from your portfolio contact form:

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

----------------------------------
This email was pre-filled by your portfolio website.
`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Attempt to open the mail client
    // Note: window.open might be blocked by popup blockers for mailto,
    // using window.location.href is generally more reliable for mailto.
    window.location.href = mailtoLink;

    // It's hard to know if the mail client actually opened or if the user sent the email.
    // We'll provide a generic success message assuming the action was initiated.
    // A small delay helps ensure the mailto link has a chance to be processed by the browser.
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: 'Opening Email Client',
      description: "Your email application should open with a pre-filled message. Please review and send it from there.",
      variant: 'default',
    });
    reset(); // Reset form fields
  };

  const formVariants = {
     hidden: { opacity: 0, y: 50 },
     visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
     }
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
         className="text-lg text-muted-foreground text-center mb-8"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: 0.2, duration: 0.5 }}
        >
          Interested in collaborating or have a question? Feel free to reach out directly or use the form below.
        </motion.p>

        {/* Email Link */}
        <motion.div
          className="text-center mb-10"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
                href="mailto:ab1933395@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-all group"
            >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                ab1933395@gmail.com
            </a>
             <p className="text-sm text-muted-foreground mt-1">(Meerut, India)</p>
        </motion.div>


        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              {...register('name')}
              className={`bg-background border-border focus:border-primary focus:ring-primary ${errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive' : ''}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
             {errors.name && <p id="name-error" className="text-sm text-destructive">{errors.name.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              className={`bg-background border-border focus:border-primary focus:ring-primary ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive' : ''}`}
              aria-invalid={errors.email ? "true" : "false"}
               aria-describedby="email-error"
            />
             {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              rows={5}
              {...register('message')}
              className={`bg-background border-border focus:border-primary focus:ring-primary resize-none ${errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive' : ''}`}
               aria-invalid={errors.message ? "true" : "false"}
               aria-describedby="message-error"
            />
            {errors.message && <p id="message-error" className="text-sm text-destructive">{errors.message.message}</p>}
          </motion.div>

           <motion.div variants={itemVariants} className="flex justify-center pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto group shadow-md hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Preparing Email...
                </>
              ) : (
                 <>
                    Send Message via Email Client
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                 </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

