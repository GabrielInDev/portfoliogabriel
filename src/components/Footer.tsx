
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold flex items-center">
              <span className="text-primary">&lt;</span>
              DevName
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Desenvolvedor Web | Empreendedor | Criador de Conteúdo
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground flex items-center">
              Feito com <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> em {currentYear}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
