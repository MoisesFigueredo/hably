import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface AddHabitDialogProps {
  onAdd: (name: string) => void;
}

export const AddHabitDialog = ({ onAdd }: AddHabitDialogProps) => {
  const [open, setOpen] = useState(false);
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAdd(habitName.trim());
      setHabitName('');
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto gap-2 shadow-md hover:shadow-lg transition-smooth">
          <Plus className="h-4 w-4" />
          Adicionar Hábito
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Novo Hábito</DialogTitle>
            <DialogDescription>
              Adicione um novo hábito para acompanhar diariamente.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Ex: Ler 30 minutos"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              className="w-full"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!habitName.trim()}>
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
