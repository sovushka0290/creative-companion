import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SlideProps } from '../../types';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
      transition: { duration: 0.8, ease: EASE },
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
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0 pointer-events-none" />

      {/* Gradient bubbles — trendy blurred orbs */}
      <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-500/[0.07] blur-[100px] lg:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] lg:w-[550px] lg:h-[550px] rounded-full bg-pink-500/[0.06] blur-[100px] lg:blur-[160px] pointer-events-none" />
      <div className="absolute top-[50%] left-[55%] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/[0.04] blur-[120px] lg:blur-[180px] pointer-events-none" />

      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-24">
        <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
          <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-foreground/50 backdrop-blur-md">
            The Digital Sovereign
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-headline font-black text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85] text-center tracking-tighter max-w-full px-4"
        >
          QAIYRYM
          <span className="block text-foreground/60 mt-4 lg:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold">
            ЦИФРОВАЯ СОВЕСТЬ
          </span>
          <span className="block text-foreground/40 mt-1 lg:mt-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            АКТЮБИНСКОЙ ОБЛАСТИ
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-10 md:mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4"
        >
          <div className="liquid-glass px-5 py-3 md:px-8 md:py-4 flex items-center gap-3 lg:gap-4 group">
            <div className="inner-glow" />
            <ShieldCheck className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-foreground/80 uppercase">Trust Protocol 1.0</span>
          </div>
          <div className="liquid-glass px-5 py-3 md:px-8 md:py-4 flex items-center gap-3 lg:gap-4 group">
            <div className="inner-glow" />
            <CheckCircle2 className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-foreground/80 uppercase">Blockchain Audit</span>
          </div>
        </motion.div>
      </main>

      <div className="absolute top-6 left-6 md:top-12 md:left-12 flex flex-col gap-2">
        <div className="w-12 lg:w-16 h-[1px] bg-foreground/20" />
        <div className="font-mono text-[10px] text-foreground/30 tracking-widest uppercase">Infrastructure V.09</div>
      </div>

      <div className="absolute bottom-16 md:bottom-12 right-6 md:right-12 text-right flex flex-col gap-1">
        <div className="font-headline text-2xl md:text-3xl font-bold text-foreground/80 tracking-tighter">2024</div>
        <div className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">Institutional Sovereignty</div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
    </motion.div>
  );
}
