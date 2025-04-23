
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Painel administrativo completo para e-commerce com análises em tempo real e gerenciamento de produtos.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/username/project1',
      image: '/placeholder.svg',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'API de Pagamentos',
      description: 'API segura para processamento de pagamentos com integração a múltiplos gateways e relatórios detalhados.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/username/project2',
      image: '/placeholder.svg',
      category: 'backend'
    },
    {
      id: 3,
      title: 'App de Gerenciamento de Tarefas',
      description: 'Aplicativo mobile para gerenciamento pessoal de tarefas com notificações e sincronização.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demoUrl: 'https://example.com/demo3',
      githubUrl: 'https://github.com/username/project3',
      image: '/placeholder.svg',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Site Institucional Responsivo',
      description: 'Site institucional moderno com animações suaves e otimizado para SEO.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'Gsap'],
      demoUrl: 'https://example.com/demo4',
      githubUrl: 'https://github.com/username/project4',
      image: '/placeholder.svg',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Sistema de Autenticação',
      description: 'Sistema completo de autenticação e autorização com múltiplos níveis de acesso.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      demoUrl: null,
      githubUrl: 'https://github.com/username/project5',
      image: '/placeholder.svg',
      category: 'backend'
    },
    {
      id: 6,
      title: 'Aplicação Web Full Stack',
      description: 'Aplicação web completa para gerenciamento de projetos e colaboração em equipe.',
      technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
      demoUrl: 'https://example.com/demo6',
      githubUrl: 'https://github.com/username/project6',
      image: '/placeholder.svg',
      category: 'fullstack'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'frontend', name: 'Front-end' },
    { id: 'backend', name: 'Back-end' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Meu Portfólio</h2>
          <p className="section-subtitle">
            Confira alguns dos principais projetos que desenvolvi ao longo da minha carreira.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>

                {project.demoUrl && (
                  <Button size="sm" asChild>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
