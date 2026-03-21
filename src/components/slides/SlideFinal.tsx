import { motion } from 'motion/react';
import { SlideProps } from '../../types';
import alikhanPhoto from '../../assets/alikhan-photo.jpg';
import qrCode from '../../assets/qr-code-clean.jpg';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SlideFinal({ onNext }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          variants={itemVariants}
          className="liquid-glass p-6 sm:p-8 lg:p-12"
        >
          <div className="inner-glow" />

          {/* Landscape layout: horizontal on lg+, vertical on mobile */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
            {/* Photo */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-2xl lg:rounded-3xl overflow-hidden border border-foreground/10 shadow-lg">
                <img
                  src={alikhanPhoto}
                  alt="Алихан Бактыбай"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Info — expands horizontally on large screens */}
            <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10 text-center lg:text-left min-w-0">
              {/* Text block */}
              <div className="space-y-3 lg:space-y-4 flex-1">
                <motion.h2
                  variants={itemVariants}
                  className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter"
                >
                  QAIYRYM
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-foreground/60 text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                  Онлайн платформа поддержки благотворительности
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-foreground/35 text-xs lg:text-sm font-mono max-w-md mx-auto lg:mx-0"
                >
                  Инновационная цифровая экосистема для прозрачной благотворительности
                </motion.p>

                <motion.div variants={itemVariants} className="pt-3 lg:pt-4">
                  <p className="font-headline font-bold text-base lg:text-lg xl:text-xl tracking-tight text-foreground/80">
                    Бактыбай Алихан
                  </p>
                  <p className="text-foreground/30 font-mono text-[10px] lg:text-xs tracking-wider uppercase mt-1">
                    17 лет • Лидер Будущего
                  </p>
                </motion.div>
              </div>

              {/* QR Code — side-by-side on lg */}
              <motion.div variants={itemVariants} className="flex-shrink-0 flex flex-col items-center lg:items-end">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-xl lg:rounded-2xl overflow-hidden border border-foreground/10 bg-white p-2 lg:p-3">
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-foreground/20 font-mono text-[9px] lg:text-[10px] mt-2 uppercase tracking-widest">
                  Scan to connect
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer tag */}
        <motion.div
          variants={itemVariants}
          className="mt-6 lg:mt-8 text-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-[10px] font-mono tracking-[0.3em] uppercase text-foreground/30 backdrop-blur-md">
            Digital Sovereign Infrastructure
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
