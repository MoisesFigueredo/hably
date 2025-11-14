// src/pages/Landing.tsx
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  CheckCircle2, 
  ListPlus, 
  Target, 
  BarChart3, 
  ChevronDown,
  Flag, 
  LayoutList, 
  Bell, 
  NotebookText, 
  History, 
  CalendarDays,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Paintbrush,
  Quote,
  XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
};


const Landing = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How much does Hably cost?",
      answer: "Hably offers a range of plans to fit your needs, starting from our free basic plan to more advanced premium options."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! All your data is encrypted and stored securely. You have full control over your information and can export or delete it at any time."
    },
    {
      question: "Can I track any kind of habit?",
      answer: "Absolutely. You can create and customize any habit you want to track, whether it's drinking water, reading, exercising, or learning a new skill."
    },
    {
      question: "Can I use Hably on multiple devices?",
      answer: "Currently, Hably is focused on providing a seamless web experience. We are working on solutions for multi-device synchronization in the future."
    }
  ];
  
  const pricingPlans = [
    {
      name: 'Starter',
      price: '37',
      description: 'For individuals starting their journey.',
      features: ['Track up to 10 habits', 'Basic statistics', 'Community support'],
      highlight: false,
      checkoutUrl: 'https://pay.hablyapp.com/checkout/202514538:1',
    },
    {
      name: 'Pro',
      price: '47',
      description: 'For power users who want more.',
      features: ['Unlimited habits', 'Advanced statistics', 'Data export', 'Priority support'],
      highlight: true,
      checkoutUrl: 'https://pay.hablyapp.com/checkout/202514539:1',
    },
    {
      name: 'Business',
      price: '67',
      description: 'For small teams and professionals.',
      features: ['All Pro features', 'Team collaboration (5 users)', 'Shared dashboards'],
      highlight: false,
      checkoutUrl: 'https://pay.hablyapp.com/checkout/202514540:1',
    },
    {
      name: 'Enterprise',
      price: '97',
      description: 'For large organizations.',
      features: ['All Business features', 'Unlimited users', 'Custom integrations', '24/7 support'],
      highlight: false,
      checkoutUrl: 'https://pay.hablyapp.com/checkout/202514541:1',
    },
  ];

  const detailedFeatures = [
    {
      icon: Flag,
      title: "Goal Planning",
      description: "Set long-term goals and break them down into daily habits.",
    },
    {
      icon: LayoutList,
      title: "Custom Routines",
      description: "Group habits into routines (morning, evening) to focus on what matters.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notifications at the right time so you never forget a habit.",
    },
    {
      icon: NotebookText,
      title: "Notes and Context",
      description: "Add notes to your habits to log thoughts or progress.",
    },
    {
      icon: History,
      title: "Detailed History",
      description: "See your full calendar and understand your behavioral patterns.",
    },
    {
      icon: CalendarDays,
      title: "Weekly View",
      description: "Get a clear view of your consistency throughout the week.",
    },
  ];

  const useCases = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Organize your study routine, track reading habits, and balance academic life with personal well-being."
    },
    {
      icon: Briefcase,
      title: "For Professionals",
      description: "Build career-enhancing habits like learning new skills, networking, and maintaining a healthy work-life balance."
    },
    {
      icon: HeartPulse,
      title: "For Health Enthusiasts",
      description: "Track your fitness goals, water intake, meditation, and sleep patterns to build a healthier lifestyle."
    },
    {
      icon: Paintbrush,
      title: "For Creatives",
      description: "Cultivate daily creative habits, whether it's writing, drawing, or practicing an instrument."
    }
  ];

  const testimonials = [
    {
      quote: "Hably completely changed how I approach my goals. Seeing the streaks build up is incredibly motivating. I've been consistent for 3 months straight!",
      name: "Sarah K.",
      role: "Designer"
    },
    {
      quote: "I love the simplicity. No clutter, just the features I need to stay focused. The smart reminders are a game-changer for my busy schedule.",
      name: "Michael B.",
      role: "Developer"
    },
    {
      quote: "As a student, I juggle a lot. Hably helps me stay on top of my study habits, exercise, and personal projects. It's my daily command center.",
      name: "Emily L.",
      role: "University Student"
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Clutter-Free Interface",
      hably: true,
      others: false
    },
    {
      feature: "Advanced Goal Grouping",
      hably: true,
      others: false
    },
    {
      feature: "Privacy-First (No Data Selling)",
      hably: true,
      others: false
    },
    {
      feature: "Complex, Confusing Analytics",
      hably: false,
      others: true
    },
    {
      feature: "Intrusive Ads",
      hably: false,
      others: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Section: Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground tracking-tight">
              Hably
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-semibold text-foreground max-w-2xl mx-auto leading-tight">
            Transform small habits into great achievements
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            The simplest way to track your daily habits and build a routine that really works
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="h-14 text-lg px-8 rounded-2xl shadow-lg"
              onClick={() => navigate('/auth')}
            >
              Get started now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 text-lg px-8 rounded-2xl"
              onClick={() => navigate('/auth')}
            >
              I already have an account
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] mt-12">
          <div className="flex items-center gap-2.5 bg-muted/60 text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full">
            <LayoutList className="h-4 w-4" />
            <span>Smart Checklists</span>
          </div>
          <div className="flex items-center gap-2.5 bg-muted/60 text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full">
            <Bell className="h-4 w-4" />
            <span>Smart Reminders</span>
          </div>
          <div className="flex items-center gap-2.5 bg-muted/60 text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full">
            <CalendarDays className="h-4 w-4" />
            <span>Weekly Progress View</span>
          </div>
          <div className="flex items-center gap-2.5 bg-muted/60 text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full">
            <BarChart3 className="h-4 w-4" />
            <span>Growth Statistics</span>
          </div>
          <div className="flex items-center gap-2.5 bg-muted/60 text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full">
            <History className="h-4 w-4" />
            <span>Detailed History</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 animate-fade-in [animation-delay:300ms]">
          <div className="bg-card p-2 sm:p-4 rounded-2xl border shadow-2xl shadow-primary/10">
            <img
              src="/img/firefox_qzat3tZb3V.png"
              alt="Screenshot da aplicação Hably mostrando o dashboard de tarefas"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Section: Features */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground tracking-tight">
              Features that make a difference
            </h3>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Everything you need to build routines, effortlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 border shadow-card space-y-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Use Cases */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground tracking-tight">
              Perfect for everyone
            </h3>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              No matter your goal, Hably adapts to your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 border shadow-card space-y-4 text-center items-center flex flex-col"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <useCase.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{useCase.title}</h4>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground tracking-tight">
              Don't just take our word for it
            </h3>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              See what our users are saying about their journey with Hably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 border shadow-card flex flex-col"
              >
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <blockquote className="text-lg text-foreground flex-1">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: How it works */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            How it works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 w-fit">
                <ListPlus className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">1. Create your habits</h4>
              <p className="text-muted-foreground px-4">
                Add the habits you want to build. Give them a name, an icon, and a color to make them your own.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 w-fit">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">2. Track your daily progress</h4>
              <p className="text-muted-foreground px-4">
                Each day, simply tap to mark your habits as complete. Build streaks and stay motivated.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 w-fit">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">3. Watch your growth</h4>
              <p className="text-muted-foreground px-4">
                Use simple statistics to see your consistency over time and celebrate your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Comparison */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Why Hably?
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We focus on simplicity and calm, unlike other apps that overwhelm you.
          </p>

          <div className="bg-card rounded-2xl border shadow-card overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-muted/60">
                <tr>
                  <th className="p-6 text-sm font-semibold text-foreground">Feature</th>
                  <th className="p-6 text-sm font-semibold text-foreground text-center w-32">Hably</th>
                  <th className="p-6 text-sm font-semibold text-foreground text-center w-32">Other Trackers</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item) => (
                  <tr key={item.feature} className="border-t border-border">
                    <td className="p-6 text-muted-foreground">{item.feature}</td>
                    <td className="p-6 text-center">
                      {item.hably ? (
                        <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
                      ) : (
                        <XCircle className="h-6 w-6 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {item.others ? (
                        <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
                      ) : (
                        <XCircle className="h-6 w-6 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Pricing */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Choose Your Plan
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Simple, transparent pricing. Choose the plan that fits your needs and start building better habits today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-card rounded-2xl p-8 flex flex-col ${plan.highlight ? 'border-primary ring-2 ring-primary shadow-primary/20' : 'border shadow-card'}`}
              >
                {plan.highlight && (
                  <span className="w-fit bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full -mt-2 mb-4">
                    POPULAR
                  </span>
                )}
                <h4 className="text-xl font-semibold text-foreground">{plan.name}</h4>
                <p className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                  <span className="text-muted-foreground">/ month</span>
                </p>
                <p className="text-muted-foreground mt-2 h-10">{plan.description}</p>
                
                <ul className="space-y-3 mt-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg" 
                  className="w-full mt-10 h-12 text-base"
                  variant={plan.highlight ? 'default' : 'outline'}
                  onClick={() => window.open(plan.checkoutUrl, '_blank')}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="bg-card rounded-2xl p-6 sm:p-8 border shadow-card">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

       {/* Section: CTA */}
      <section className="px-4 py-20">
       <div className="max-w-3xl mx-auto text-center space-y-6 bg-card rounded-3xl p-12 border shadow-lg">
         <h3 className="text-3xl font-bold text-foreground">
           Ready to get started?
         </h3>
         <p className="text-lg text-muted-foreground">
           Join thousands of people who are transforming their lives, one habit at a time
         </p>
         <Button 
           size="lg" 
           className="h-14 text-lg px-10 rounded-2xl shadow-lg mt-4"
           onClick={() => navigate('/auth')}
         >
           Create my free account
         </Button>
       </div>
      </section>

      {/* Section: Footer */}
      <footer className="px-4 py-8 border-t">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Hably. Made with love to help you build incredible habits</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;