// src/components/AddHabitDialog.tsx
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
        <Button className="w-full gap-2 shadow-lg hover:shadow-xl transition-smooth h-14 text-base font-semibold rounded-2xl">
          <Plus className="h-5 w-5" />
          Add Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl">New Habit</DialogTitle>
            <DialogDescription className="text-base">
              Add a new habit to track daily.
            </DialogDescription>
          </DialogHeader>
          <div className="py-5">
            <Input
              placeholder="E.g.: Read for 30 minutes"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              className="w-full h-12 text-base"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!habitName.trim()} className="w-full h-12 text-base">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};