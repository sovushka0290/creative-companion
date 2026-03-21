import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SlideProps } from '../../types';

export default function SlideHero({ onNext }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="relative h-screen w-full bg-background overflow-hidden text-foreground"
    >
      <div className="absolute inset-0 grid-pattern opacity-20 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[160px] pointer-events-none" />

      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-24">
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-foreground/50 backdrop-blur-md">
            The Digital Sovereign
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-headline font-black text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] leading-[0.85] text-center tracking-tighter max-w-full px-4"
        >
          QAIYRYM
          <span className="block text-foreground/40 mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium">
            ЦИФРОВАЯ СОВЕСТЬ
          </span>
          <span className="block text-foreground/20 mt-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light">
            АКТЮБИНСКОЙ ОБЛАСТИ
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="liquid-glass px-6 py-3 md:px-8 md:py-4 flex items-center gap-4 group">
            <div className="inner-glow" />
            <ShieldCheck className="text-secondary w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-foreground/80 uppercase">Trust Protocol 1.0</span>
          </div>
          <div className="liquid-glass px-6 py-3 md:px-8 md:py-4 flex items-center gap-4 group">
            <div className="inner-glow" />
            <CheckCircle2 className="text-secondary w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-foreground/80 uppercase">Blockchain Audit</span>
          </div>
        </motion.div>
      </main>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col gap-2">
        <div className="w-16 h-[1px] bg-foreground/20" />
        <div className="font-mono text-[10px] text-foreground/30 tracking-widest uppercase">Infrastructure V.09</div>
      </div>

      <div className="absolute bottom-20 md:bottom-12 right-8 md:right-12 text-right flex flex-col gap-1">
        <div className="font-headline text-2xl md:text-3xl font-bold text-foreground/80 tracking-tighter">2024</div>
        <div className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">Institutional Sovereignty</div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </motion.div>
  );
}
