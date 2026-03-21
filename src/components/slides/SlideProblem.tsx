import { motion } from 'motion/react';
import { Wallet, FileCheck, Gavel } from 'lucide-react';
import { SlideProps } from '../../types';

export default function SlideProblem({ onNext }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="relative h-screen w-full bg-background overflow-y-auto text-foreground"
    >
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-10" />

      <div className="relative z-10 min-h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 lg:py-32">
        {/* Header — on large screens sits beside cards */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-10 lg:mb-16">
          <div>
            <motion.div variants={itemVariants} className="mb-4 lg:mb-6">
              <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-secondary backdrop-blur-md">
                The Challenge
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="font-headline font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-[0.9] tracking-tighter uppercase"
            >
              ПРОБЛЕМА
            </motion.h1>
          </div>
          <motion.div variants={itemVariants} className="hidden lg:block h-[1px] flex-1 max-w-xs bg-foreground/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch relative z-10">
          <ProblemCard
            icon={<Wallet className="w-8 h-8 lg:w-12 lg:h-12 text-secondary" />}
            title={<>Куда уходят <span className="text-secondary">млрд тенге</span> помощи?</>}
            variants={itemVariants}
          />
          <ProblemCard
            icon={<FileCheck className="w-8 h-8 lg:w-12 lg:h-12 text-secondary" />}
            title={<>Как проверить <span className="text-secondary">честность</span> отчетов?</>}
            variants={itemVariants}
          />
          <ProblemCard
            icon={<Gavel className="w-8 h-8 lg:w-12 lg:h-12 text-destructive" />}
            title={<>Коррупция <span className="text-destructive">ворует</span> у нуждающихся.</>}
            variants={itemVariants}
          />
        </div>

        <footer className="w-full mt-16 lg:mt-24 pt-8 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-foreground/10">
          <motion.div variants={itemVariants}>
            <p className="font-headline font-black text-xl lg:text-3xl tracking-tighter text-foreground/90">QAIYRYM</p>
            <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest mt-2">Digital Sovereign Infrastructure</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center space-x-6 lg:space-x-8">
            <div className="text-center md:text-right">
              <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-widest">Blockchain Verification</p>
              <p className="font-headline font-bold text-secondary text-sm mt-1">ACTIVE STATUS</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/5">
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-secondary rounded-sm rotate-45 animate-pulse" />
            </div>
          </motion.div>
        </footer>
      </div>
    </motion.div>
  );
}

function ProblemCard({ icon, title, variants }: any) {
  return (
    <motion.div
      variants={variants}
      className="liquid-glass p-6 lg:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[280px] lg:min-h-[360px] group"
    >
      <div className="inner-glow" />
      <div className="mb-6 lg:mb-12 relative">
        <div className="absolute inset-0 bg-foreground/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative">{icon}</div>
      </div>
      <h2 className="font-headline font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight text-foreground/90 tracking-tight">
        {title}
      </h2>
      <div className="mt-6 lg:mt-12 h-[1px] w-full bg-foreground/10 group-hover:bg-foreground/30 transition-colors duration-500" />
    </motion.div>
  );
}
