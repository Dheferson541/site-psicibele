import { Button } from "@/components/ui/button";
import { MessageCircle, Brain, Lightbulb, Heart, Users, ArrowUp } from "lucide-react";

export default function Home() {
  const whatsappNumber = "5581994512660";
  const whatsappMessage = encodeURIComponent(
    "Olá Psi. Cibele! Gostaria de agendar uma consulta com você. Poderia me informar sobre disponibilidades?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/logo-cm-Ez2SBmi34pXShDdKHJ5avK.webp"
              alt="CM Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-foreground">Psi. Cibele Maciel</span>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="container py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transformando vidas através da{" "}
                <span className="text-primary">psicologia humanizada</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Com mais de 13 anos de experiência, ofereço atendimento especializado em TEA, TDAH,
                TOD e Ciência ABA. Meu objetivo é ajudá-lo a compreender melhor suas dificuldades
                e encontrar caminhos para o bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar Consulta
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5"
                  onClick={() => {
                    const element = document.getElementById('especialidades');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Conhecer Especialidades
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src="/foto-perfil.webp"
                alt="Psi. Cibele Maciel - Psicóloga" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Experiência */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/abstract-wellness-Qa6fnHwELdQFCiYeaSuViR.webp"
                alt="Bem-estar e saúde mental"
                className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  Quem Sou Eu
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Sou uma psicóloga dedicada a oferecer atendimento humanizado e baseado em evidências
                científicas. Ao longo de mais de 13 anos de prática, desenvolvi uma abordagem
                integrativa que combina técnicas modernas com profunda empatia.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Minha formação contínua em Ciência ABA, transtornos do neurodesenvolvimento e
                psicologia clínica me permite oferecer soluções personalizadas para cada cliente.
                Acredito que a transformação começa quando nos sentimos verdadeiramente compreendidos.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary">13+</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">500+</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Pacientes Atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Especialidades
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Ofereço atendimento especializado em diferentes áreas, sempre com foco na compreensão
              e no bem-estar integral do paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* TEA */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/icon-tea-line-SbCBnZg6WRTRRF4q4ZLNWK.webp"
                    alt="TEA - Neurodiversidade"
                    className="w-8 md:w-10 h-8 md:h-10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">TEA</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Transtorno do Espectro Autista</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Atendimento especializado para crianças e adultos com TEA, focando em desenvolvimento
                de habilidades sociais, comunicação e estratégias de adaptação.
              </p>
            </div>

            {/* TDAH */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/icon-tdah-line-7Rt7yGUzc33WDTJ9xn7Xy2.webp"
                    alt="TDAH - Foco e Energia"
                    className="w-8 md:w-10 h-8 md:h-10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">TDAH</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Transtorno de Déficit de Atenção
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Apoio psicológico para pessoas com TDAH, incluindo estratégias de organização,
                manejo emocional e técnicas para melhorar foco e produtividade.
              </p>
            </div>

            {/* TOD */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/icon-tod-line-7fiF93QyVhjFzitBXonUDp.webp"
                    alt="TOD - Regulação Emocional"
                    className="w-8 md:w-10 h-8 md:h-10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">TOD</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Transtorno Opositivo-Desafiador
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Intervenção psicológica para crianças e adolescentes com TOD, trabalhando com
                familiares para estabelecer limites saudáveis e melhorar relacionamentos.
              </p>
            </div>

            {/* ABA */}
            <div className="group p-6 md:p-8 rounded-2xl bg-white border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/icon-aba-line-NYzxiUt48zzEx9imqAjXax.webp"
                    alt="Ciência ABA - Progresso"
                    className="w-8 md:w-10 h-8 md:h-10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Ciência ABA</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Análise do Comportamento Aplicada
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Aplicação de técnicas baseadas em ABA para modificação comportamental, desenvolvimento
                de habilidades e tratamento de comportamentos desafiadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Entre em contato comigo via WhatsApp para agendar sua primeira consulta. Estou aqui
              para ajudá-lo a encontrar o caminho para o bem-estar.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar Mensagem no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/50 backdrop-blur-sm">
        <div className="container py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107358660/o7K3xWx4pJyh9p7x9Y7V2u/logo-cm-Ez2SBmi34pXShDdKHJ5avK.webp"
                  alt="CM Logo"
                  className="w-8 h-8"
                />
                <span className="font-bold text-foreground">Psi. Cibele Maciel</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Psicologia humanizada com especialização em transtornos do neurodesenvolvimento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Especialidades</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>TEA (Transtorno do Espectro Autista)</li>
                <li>TDAH (Transtorno de Déficit de Atenção)</li>
                <li>TOD (Transtorno Opositivo-Desafiador)</li>
                <li>Ciência ABA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Contato</h4>
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    (81) 99451-2660
                  </a>
                </p>
                <p>Recife, Pernambuco</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2026 Psi. Cibele Maciel. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all opacity-0 hover:opacity-100 focus:opacity-100 z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
