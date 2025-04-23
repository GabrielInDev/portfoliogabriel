
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Github, Linkedin, Mail, Instagram, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome precisa ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem precisa ter pelo menos 10 caracteres.",
  }),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulando envio para um backend
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato, responderei em breve.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/username',
      icon: <Github className="w-5 h-5" />,
      color: 'text-gray-800 dark:text-gray-200',
      hoverColor: 'hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      hoverColor: 'hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:email@example.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'text-red-500 dark:text-red-400',
      hoverColor: 'hover:bg-red-500 hover:text-white dark:hover:bg-red-400',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/username',
      icon: <Instagram className="w-5 h-5" />,
      color: 'text-pink-600 dark:text-pink-400',
      hoverColor: 'hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">
            Entre em contato comigo para colaborações, projetos ou apenas para trocar uma ideia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-2 text-primary" />
                Vamos conversar
              </h3>

              <p className="text-muted-foreground mb-8">
                Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. 
                Preencha o formulário ou use um dos métodos de contato abaixo para me enviar uma mensagem.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 border ${link.color} ${link.hoverColor}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Contact illustration" 
                className="max-w-xs mx-auto"
              />
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="seu@email.com" 
                          type="email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Escreva sua mensagem aqui..." 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
