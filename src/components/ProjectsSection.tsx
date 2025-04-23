
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Instagram } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'SpotterCarsBr',
      description: 'Conta automotiva com foco em flagras de supercarros no Brasil.',
      icon: <img src="/placeholder.svg" alt="SpotterCarsBr" className="w-12 h-12 object-cover rounded-full" />,
      link: 'https://instagram.com/spottercars',
      linkLabel: 'Instagram',
      status: 'Ativo e crescendo',
      linkIcon: <Instagram className="h-4 w-4 mr-2" />
    },
    {
      id: 2,
      title: 'SoftTech Inovations',
      description: 'Minha empresa de desenvolvimento web e soluções digitais para negócios.',
      icon: <img src="/placeholder.svg" alt="SoftTech Inovations" className="w-12 h-12 object-cover rounded-full" />,
      link: 'https://example.com',
      linkLabel: 'Website',
      status: 'Cofundador',
      linkIcon: <ExternalLink className="h-4 w-4 mr-2" />
    },
  ];

  return (
    <section id="projects" className="bg-muted/30 py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Outros Projetos</h2>
          <p className="section-subtitle">
            Conheça minhas iniciativas empreendedoras e projetos paralelos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/40">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-primary font-medium">{project.status}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <Button variant="outline" size="sm" asChild className="mt-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    {project.linkIcon}
                    {project.linkLabel}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
