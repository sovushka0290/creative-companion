import { motion } from 'motion/react';
import { User, Verified } from 'lucide-react';
import { SlideProps } from '../../types';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SlideFinal({ onNext }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="relative h-screen overflow-y-auto w-full bg-background text-foreground"
    >
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-foreground/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl min-h-full px-6 md:px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mx-auto">
        <div className="flex-1 text-left flex flex-col space-y-10 md:space-y-16">
          <div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-secondary backdrop-blur-md">
                Итоговый Результат
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="font-headline text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter uppercase"
            >
              ЧЕСТНОСТЬ.<br />
              ПРОЗРАЧНОСТЬ.<br />
              ДОВЕРИЕ.
            </motion.h1>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 md:space-x-8 border-l border-foreground/10 pl-6 md:pl-10"
          >
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center backdrop-blur-2xl">
              <User className="w-7 h-7 md:w-10 md:h-10" />
            </div>
            <div>
              <p className="font-headline text-xl md:text-3xl font-bold tracking-tight">Алихан Бактыбай</p>
              <p className="text-foreground/30 font-mono tracking-[0.2em] uppercase text-[10px] mt-2">17 лет • Лидер Будущего</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 relative group"
        >
          <div className="liquid-glass p-8 md:p-12 group-hover:scale-[1.02] transition-transform duration-700">
            <div className="inner-glow" />
            <div className="relative bg-foreground/5 p-6 md:p-8 rounded-3xl aspect-square w-56 md:w-72 lg:w-96 flex items-center justify-center overflow-hidden border border-foreground/5">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="https://picsum.photos/seed/qaiyrym-logo/400/400"
                alt="QAIYRYM Logo"
                className="w-40 md:w-56 h-40 md:h-56 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 md:mt-12 text-center space-y-3 md:space-y-4">
              <p className="font-headline font-black text-lg md:text-2xl tracking-tighter uppercase text-foreground/90">ПУТЬ К ПРОЦВЕТАНИЮ</p>
              <p className="text-foreground/40 font-mono text-[10px] max-w-[280px] mx-auto leading-relaxed uppercase tracking-widest">Инновационные решения для будущего Казахстана</p>
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-foreground rounded-full flex items-center justify-center shadow-2xl border-4 md:border-8 border-background group-hover:scale-110 transition-transform duration-500">
              <Verified className="text-background w-7 h-7 md:w-10 md:h-10" />
            </div>
          </div>
          <div className="absolute -top-4 md:-top-6 -left-6 md:-left-12 bg-secondary text-foreground px-4 md:px-6 py-1.5 md:py-2 rounded-full font-mono font-bold text-[10px] shadow-2xl tracking-widest uppercase">
            QAIYRYM CERTIFIED
          </div>
        </motion.div>
      </div>

      <footer className="w-full px-6 md:px-8 pb-12 md:pb-20">
        <div className="pt-8 md:pt-12 border-t border-foreground/10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <p className="text-foreground/20 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Institutional Sovereign Tech</p>
            <div className="h-[1px] w-32 bg-foreground/10" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center space-x-12">
            <div className="text-center md:text-right">
              <p className="font-headline font-bold text-lg tracking-tighter">QAIYRYM ECOSYSTEM</p>
              <p className="text-foreground/20 font-mono text-[10px] uppercase tracking-widest mt-1">Digital Sovereign Infrastructure</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
}
