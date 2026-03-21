import { motion } from 'motion/react';
import { Brain, ShieldCheck, UserCheck, Diamond, Trophy, Network, LayoutGrid } from 'lucide-react';
import { SlideProps } from '../../types';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SlideMain({ onNext }: SlideProps) {
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
      className="bg-background h-screen overflow-y-auto text-foreground"
    >
      <header className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-xl border-b border-foreground/5">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-black tracking-tighter">QAIYRYM</div>
          <button className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
            <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </header>

      <main className="pt-24 md:pt-32 pb-24 md:pb-32">
        <section className="relative px-6 md:px-8 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern -z-10 opacity-10" />
          <div className="max-w-2xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-secondary backdrop-blur-md">
                Institutional Tech
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-headline text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6 md:mb-8">
              Каждая помощь доходит до рук.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-foreground/50 text-lg md:text-xl leading-relaxed mb-12 md:mb-16 max-w-xl mx-auto">
              Прозрачность, которую видно. Мы оцифровываем отчеты волонтеров. Больше никаких потерянных квитанций.
            </motion.p>

            <motion.div variants={itemVariants} className="liquid-glass p-6 md:p-8 text-left group">
              <div className="inner-glow" />
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <div className="p-3 md:p-4 bg-foreground/5 rounded-2xl border border-foreground/10">
                  <Brain className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold tracking-tight">ИИ-Верификация</h3>
                  <p className="text-xs font-mono text-foreground/30 uppercase tracking-widest mt-1">Real-time • 99% Accuracy</p>
                </div>
              </div>
              <p className="text-foreground/60 leading-relaxed mb-6 md:mb-8">
                ИИ проверяет реальность каждого мешка муки и коробки медикаментов на фото за 1 секунду.
              </p>
              <div className="flex items-center justify-between p-3 md:p-4 bg-foreground/5 rounded-2xl border border-foreground/5">
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.2em]">System Status: active</span>
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-4xl font-black mb-12 md:mb-16 tracking-tighter text-center">
              Ваша репутация под защитой (ESG)
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <FeatureItem icon={<ShieldCheck />} title="ESG-аудит" desc="90% экономии ресурсов на отчетность." variants={itemVariants} />
              <FeatureItem icon={<UserCheck />} title="ИИ-Контроль" desc="99% точность выявления манипуляций." variants={itemVariants} />
              <FeatureItem icon={<Diamond />} title="Proof of Impact" desc="Неоспоримое доказательство вклада." variants={itemVariants} />
            </div>

            <motion.div variants={itemVariants} className="mt-16 md:mt-24 flex flex-col items-center">
              <p className="text-[10px] font-mono font-bold text-foreground/20 uppercase tracking-[0.3em] mb-8 md:mb-12">Partnership & Trust</p>
              <div className="flex gap-8 md:gap-16 items-center opacity-30 hover:opacity-100 transition-opacity duration-700">
                <div className="text-2xl md:text-3xl font-black tracking-tighter">KAZ <span className="text-secondary">Minerals</span></div>
                <div className="text-2xl md:text-3xl font-black tracking-tighter">ERG</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 px-6 md:px-8 bg-foreground/[0.02]">
          <div className="max-w-2xl mx-auto">
            <motion.h2 variants={itemVariants} className="font-headline text-4xl md:text-5xl font-black mb-16 md:mb-20 tracking-tighter text-center">
              Математика честности
            </motion.h2>
            <div className="space-y-10 md:space-y-12">
              <StepItem number="01" title="Сбор данных" variants={itemVariants}>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <Badge text="Геометка" />
                  <Badge text="Время" />
                  <Badge text="Фото" />
                </div>
              </StepItem>
              <StepItem number="02" title="ИИ-Верификация" variants={itemVariants}>
                <p className="text-foreground/50 leading-relaxed mb-4">3 независимых агента анализируют метаданные и визуальный контент.</p>
                <div className="flex flex-wrap gap-2">
                  <Tag text="PYTHON" />
                  <Tag text="DJANGO" />
                  <Tag text="CV AGENTS" />
                </div>
              </StepItem>
              <StepItem number="03" title="Блокчейн-Запись" isLast variants={itemVariants}>
                <p className="text-foreground/50 leading-relaxed">Данные нельзя изменить. Вечная запись в децентрализованных сетях.</p>
                <div className="mt-6 flex gap-4">
                  <div className="liquid-glass px-4 md:px-6 py-3 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-foreground/40 tracking-widest uppercase">SOLANA</span>
                  </div>
                  <div className="liquid-glass px-4 md:px-6 py-3 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-foreground/40 tracking-widest uppercase">POLYGON</span>
                  </div>
                </div>
              </StepItem>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-8 py-20 md:py-32">
          <motion.div variants={itemVariants} className="liquid-glass p-10 md:p-16 text-center group max-w-4xl mx-auto relative">
            <div className="inner-glow" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
              <Network className="w-32 md:w-48 h-32 md:h-48" />
            </div>
            <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black mb-8 relative z-10 tracking-tighter">Готовы к прозрачности?</h3>
            <button
              className="bg-foreground text-background font-black px-8 md:px-12 py-4 md:py-5 rounded-full relative z-10 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
              onClick={onNext}
            >
              Connect Wallet
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-foreground/5 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="text-2xl md:text-3xl font-black tracking-tighter mb-8 md:mb-12">QAIYRYM</div>
          <div className="space-y-4 mb-12 md:mb-16">
            <p className="font-mono text-[10px] text-foreground/20 uppercase tracking-[0.3em]">Разработчик</p>
            <p className="font-headline text-xl md:text-2xl font-bold">Алихан Бактыбай</p>
            <div className="flex items-center justify-center gap-3 text-secondary text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-5 h-5 fill-current" />
              17 лет • Победитель IT-конкурса
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-mono font-bold text-foreground/20 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-foreground transition-colors">Security Audit</a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

function FeatureItem({ icon, title, desc, variants }: any) {
  return (
    <motion.div variants={variants} className="liquid-glass p-6 md:p-8 group">
      <div className="inner-glow" />
      <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 text-secondary w-fit mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-headline font-bold text-lg md:text-xl mb-2 tracking-tight">{title}</h3>
      <p className="text-foreground/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function StepItem({ number, title, children, isLast, variants }: any) {
  return (
    <motion.div variants={variants} className="relative pl-16 md:pl-20">
      <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center font-mono font-bold text-xs md:text-sm backdrop-blur-md">
        {number}
      </div>
      {!isLast && <div className="absolute left-[19px] md:left-[23px] top-14 md:top-16 bottom-[-32px] w-[1px] bg-foreground/10" />}
      <h4 className="font-headline text-xl md:text-2xl font-bold mb-4 tracking-tight">{title}</h4>
      {children}
    </motion.div>
  );
}

function Badge({ text }: { text: string }) {
  return <div className="px-3 md:px-4 py-2 bg-foreground/5 border border-foreground/5 rounded-xl text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">{text}</div>;
}

function Tag({ text }: { text: string }) {
  return <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-mono font-bold rounded-lg uppercase tracking-widest">{text}</span>;
}
