import { motion } from 'motion/react';
import { SlideProps } from '../../types';
import alikhanPhoto from '../../assets/alikhan-photo.jpg';
import qrCode from '../../assets/qr-code.jpg';

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
      className="relative h-screen w-full bg-background text-foreground flex items-center justify-center overflow-hidden"
    >
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="liquid-glass p-8 md:p-10"
        >
          <div className="inner-glow" />
          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Photo */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-foreground/10 shadow-lg">
                <img
                  src={alikhanPhoto}
                  alt="Алихан Бактыбай"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 flex-1 min-w-0">
              <motion.h2
                variants={itemVariants}
                className="font-headline text-2xl md:text-3xl font-black tracking-tight"
              >
                QAIYRYM
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-foreground/60 text-sm leading-relaxed"
              >
                онлайн платформа поддержки благотворительности
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-foreground/40 text-xs font-mono"
              >
                Инновационная цифровая экосистема для прозрачной благотворительности
              </motion.p>

              <motion.div variants={itemVariants} className="pt-2 space-y-1">
                <p className="font-headline font-bold text-sm tracking-tight text-foreground/80">
                  Бактыбай Алихан
                </p>
                <p className="text-foreground/30 font-mono text-[10px] tracking-wider uppercase">
                  17 лет • Лидер Будущего
                </p>
              </motion.div>

              {/* QR Code */}
              <motion.div variants={itemVariants} className="pt-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-foreground/10 bg-white p-1">
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer tag */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-foreground/30 backdrop-blur-md">
            Digital Sovereign Infrastructure
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
