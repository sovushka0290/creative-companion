import { motion } from 'motion/react';
import { Brain, Network, Eye, BarChart3, Gavel, Cpu } from 'lucide-react';
import { SlideProps } from '../../types';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SlideTech({ onNext }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="relative h-screen overflow-y-auto bg-background text-foreground"
    >
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-10" />

      <div className="absolute top-6 left-6 md:top-12 md:left-12 lg:left-28 flex items-center space-x-4 lg:space-x-6 opacity-40 pointer-events-none z-50">
        <span className="text-secondary font-headline font-black text-2xl lg:text-4xl">03</span>
        <h1 className="font-headline font-bold text-xs lg:text-sm tracking-[0.4em] uppercase">Технологический Стек</h1>
      </div>

      <div className="w-full max-w-7xl mx-auto min-h-full flex flex-col justify-center py-20 lg:py-32 px-6 md:px-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <TechCard
            icon={<Brain className="w-7 h-7 lg:w-10 lg:h-10" />}
            title="ИИ ПРОТИВ ФЕЙКОВ"
            stat="99.9%"
            label="ВЕРИФИКАЦИЯ"
            variants={itemVariants}
          />
          <TechCard
            icon={<Network className="w-7 h-7 lg:w-10 lg:h-10" />}
            title="БЛОКЧЕЙН ПРОТИВ КРАЖИ"
            stat="IMMUTABLE"
            label="ДАННЫЕ НЕЛЬЗЯ СТЕРЕТЬ"
            variants={itemVariants}
            isBlockchain
          />
        </div>

        <footer className="w-full mt-10 lg:mt-24 liquid-glass py-6 lg:py-10 px-6 lg:px-10 group">
          <div className="inner-glow" />
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 lg:gap-8">
            <motion.div variants={itemVariants} className="flex items-center space-x-4 lg:space-x-8">
              <span className="font-headline font-black text-lg lg:text-2xl tracking-tighter">QAIYRYM</span>
              <p className="text-foreground/20 font-mono text-[10px] tracking-widest uppercase">© 2024. Digital Sovereign Infrastructure.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 lg:gap-10 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-foreground/30">
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Protocol</a>
              <a className="text-secondary font-bold" href="#">Security Audit: [PASS]</a>
            </motion.div>
          </div>
        </footer>
      </div>

      <aside className="fixed left-0 top-0 h-screen w-20 lg:w-24 flex-col items-center py-12 space-y-16 bg-foreground/[0.02] border-r border-foreground/5 backdrop-blur-2xl z-40 hidden xl:flex">
        <div className="p-3 lg:p-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-secondary">
          <Cpu className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
        <div className="flex flex-col space-y-10">
          <VisibilityIcon active={false} icon={<Eye />} />
          <VisibilityIcon active={true} icon={<BarChart3 />} />
          <VisibilityIcon active={false} icon={<Gavel />} />
          <VisibilityIcon active={false} icon={<Network />} />
        </div>
      </aside>
    </motion.div>
  );
}

function TechCard({ icon, title, stat, label, variants, isBlockchain }: any) {
  return (
    <motion.div variants={variants} className="liquid-glass p-6 lg:p-12 flex flex-col justify-between min-h-[280px] lg:min-h-[440px] group">
      <div className="inner-glow" />
      <div className="relative">
        <div className="flex items-center space-x-4 lg:space-x-6 mb-6 lg:mb-12">
          <div className="p-3 lg:p-5 rounded-2xl bg-foreground/5 border border-foreground/10 text-secondary group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div className="h-[1px] flex-grow bg-foreground/10" />
        </div>
        <h2 className="font-headline font-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] mb-4 lg:mb-8 tracking-tighter uppercase">
          {title}
        </h2>
      </div>
      <div className="mt-auto">
        <div className={`inline-flex flex-col gap-2 p-4 lg:p-8 rounded-2xl lg:rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-foreground/10 ${isBlockchain ? 'border-secondary/20' : ''}`}>
          <span className={`font-headline font-black text-3xl lg:text-5xl xl:text-6xl tracking-tighter ${isBlockchain ? 'text-secondary' : ''}`}>{stat}</span>
          <span className="text-foreground/30 font-mono font-bold text-[10px] uppercase tracking-[0.3em]">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

function VisibilityIcon({ active, icon }: any) {
  return (
    <div className={`p-3 rounded-xl transition-all duration-300 ${active ? 'bg-foreground/10 border border-foreground/10' : 'text-foreground/20 hover:text-foreground/40'}`}>
      {icon}
    </div>
  );
}
