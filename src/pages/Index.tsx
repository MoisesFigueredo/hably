import { useHabits } from '@/hooks/useHabits';
import { HabitItem } from '@/components/HabitItem';
import { AddHabitDialog } from '@/components/AddHabitDialog';
import { StatsCard } from '@/components/StatsCard';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const {
    habits,
    addHabit,
    toggleHabit,
    deleteHabit,
    isCompletedToday,
    getMaxStreak,
    getTodayCompletedCount,
  } = useHabits();

  const motivationalQuotes = [
    "Pequenos hábitos constroem grandes resultados",
    "Um dia de cada vez, você está progredindo",
    "Constância é a chave para o sucesso",
    "Cada hábito completado é uma vitória",
    "Você está criando a melhor versão de si mesmo",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <header className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Hably
            </h1>
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            {randomQuote}
          </p>
        </header>

        {/* Stats */}
        <StatsCard
          todayCompleted={getTodayCompletedCount()}
          totalHabits={habits.length}
          maxStreak={getMaxStreak()}
        />

        {/* Add Habit Button */}
        <div className="flex justify-center">
          <AddHabitDialog onAdd={addHabit} />
        </div>

        {/* Habits List */}
        <div className="space-y-3">
          {habits.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-xl border shadow-card">
              <p className="text-muted-foreground">
                Nenhum hábito ainda. Adicione seu primeiro hábito para começar! 🎯
              </p>
            </div>
          ) : (
            habits.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                isCompleted={isCompletedToday(habit.id)}
                onToggle={() => toggleHabit(habit.id)}
                onDelete={() => deleteHabit(habit.id)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8">
          <p>Feito com 💚 para ajudar você a construir hábitos incríveis</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
