import { Button } from '@/components/ui/button';
import { Sparkles, Flame, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground tracking-tight">
              Hably
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-semibold text-foreground max-w-2xl mx-auto leading-tight">
            Transforme pequenos hábitos em grandes conquistas
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            O jeito mais simples de acompanhar seus hábitos diários e construir uma rotina que realmente funciona
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="h-14 text-lg px-8 rounded-2xl shadow-lg"
              onClick={() => navigate('/auth')}
            >
              Começar agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 text-lg px-8 rounded-2xl"
              onClick={() => navigate('/auth')}
            >
              Já tenho conta
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Por que usar o Hably?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border shadow-card space-y-4">
              <div className="p-3 rounded-xl bg-primary/10 w-fit">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Super Simples</h4>
              <p className="text-muted-foreground">
                Interface minimalista e intuitiva. Marque seus hábitos com um toque e pronto!
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border shadow-card space-y-4">
              <div className="p-3 rounded-xl bg-accent/30 w-fit">
                <Flame className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Acompanhe Streaks</h4>
              <p className="text-muted-foreground">
                Veja quantos dias consecutivos você mantém cada hábito e mantenha a motivação alta
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border shadow-card space-y-4">
              <div className="p-3 rounded-xl bg-secondary/50 w-fit">
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Estatísticas</h4>
              <p className="text-muted-foreground">
                Visualize seu progresso e celebre cada conquista no seu caminho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-card rounded-3xl p-12 border shadow-lg">
          <h3 className="text-3xl font-bold text-foreground">
            Pronto para começar?
          </h3>
          <p className="text-lg text-muted-foreground">
            Junte-se a milhares de pessoas que estão transformando suas vidas, um hábito de cada vez
          </p>
          <Button 
            size="lg" 
            className="h-14 text-lg px-10 rounded-2xl shadow-lg mt-4"
            onClick={() => navigate('/auth')}
          >
            Criar minha conta grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Hably. Feito com 💚 para ajudar você a construir hábitos incríveis</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
