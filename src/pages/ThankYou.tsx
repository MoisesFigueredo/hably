import { CheckCircle2, Mail } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Gradient Header */}
      <div className="w-full bg-gradient-to-r from-primary via-accent to-destructive py-8 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight px-4">
          YOUR PURCHASE IS COMPLETE!
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full space-y-12 text-center">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-6 rounded-full bg-primary/10">
              <CheckCircle2 className="h-20 w-20 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              CONGRATULATIONS ON YOUR
              <br />
              DECISION
            </h2>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
              Please wait a few minutes; you will
              <br />
              soon receive information
              <br />
              regarding your purchase by email.
            </p>
          </div>

          {/* Important Information Box */}
          <div className="bg-card border-2 border-destructive rounded-2xl p-8 space-y-6 shadow-lg">
            <div className="inline-block bg-destructive text-white text-lg sm:text-xl font-bold px-6 py-3 rounded-lg">
              IMPORTANT INFORMATION!!!
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-center gap-3">
                <Mail className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <div className="text-lg sm:text-xl text-foreground font-semibold">
                  Check your <span className="text-destructive">junk mail or spam folder</span>, as your email provider{' '}
                  <span className="underline decoration-2 decoration-destructive">may have blocked our message.</span>{' '}
                  <span className="font-bold">(Check all your inboxes.)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4 pt-8">
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
              Thank you for your trust, and we
              <br />
              look forward to helping you
              <br />
              achieve your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-8 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Copyright 2025 - All rights reserved
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;

