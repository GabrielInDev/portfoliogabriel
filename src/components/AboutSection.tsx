
import { User, Book, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AboutSection = () => {
  const skills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
  ];

  const education = [
    {
      degree: 'Bacharelado em Ciências da Computação',
      institution: 'Universidade Federal',
      period: '2018 - 2022',
    },
    {
      degree: 'Especialização em Desenvolvimento Web',
      institution: 'Instituto de Tecnologia',
      period: '2022 - 2023',
    },
  ];

  const certifications = [
    { name: 'Certificado React Avançado', issuer: 'Udemy', year: 2023 },
    { name: 'Certificado AWS Developer', issuer: 'Amazon', year: 2022 },
    { name: 'Certificado UX Design', issuer: 'Google', year: 2022 },
  ];

  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça um pouco sobre minha trajetória, habilidades e formação como desenvolvedor e empreendedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Quem sou eu</h3>
                <p className="text-muted-foreground">
                  Sou um desenvolvedor web apaixonado por criar experiências digitais impactantes. 
                  Com mais de 5 anos de experiência na área de tecnologia, tenho trabalhado em diversos 
                  projetos que envolvem desde a concepção até a implementação de soluções completas.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Além do desenvolvimento web, também sou empreendedor e criador de conteúdo, 
                  combinando minha paixão por tecnologia com outras áreas de interesse.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Book className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Formação Acadêmica</h3>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                      <p className="text-xs text-muted-foreground">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <Award className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Certificações</h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      <p>
                        {cert.name}
                        <span className="text-sm text-muted-foreground ml-2">
                          ({cert.issuer}, {cert.year})
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">Habilidades Técnicas</h3>
                </div>

                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
