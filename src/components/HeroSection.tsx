
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Olá, eu sou</span>
            <span className="block text-primary mt-2">[Seu Nome]</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            Desenvolvedor Web | Empreendedor | Criador de Conteúdo
          </p>

          <p className="text-lg max-w-md">
            Desenvolvo soluções digitais e estou à frente de projetos nas áreas de tecnologia e conteúdo automotivo.
          </p>

          <div className="flex space-x-4">
            <Button asChild size="lg" className="group">
              <a href="#portfolio">
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Entrar em Contato
              </a>
            </Button>
          </div>
        </div>

        <div className={cn(
          "relative w-full aspect-square max-w-md mx-auto",
          "before:content-[''] before:absolute before:inset-0 before:border-2 before:border-primary before:rounded-full before:-translate-x-4 before:translate-y-4",
        )}>
          <div className="rounded-full overflow-hidden border-4 border-background shadow-xl aspect-square">
            <img 
              src="/placeholder.svg" 
              alt="Foto de perfil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
