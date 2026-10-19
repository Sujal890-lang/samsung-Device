import React, { useState } from 'react';
import type { Device } from '../data/schema';
import { calculateRecommendations, type QuizAnswers, type RecommendationResult } from '../utils/finder';
import { DeviceSilhouette } from '../components/devices/DeviceSilhouette';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  Award,
} from 'lucide-react';

interface FinderPageProps {
  allDevices: Device[];
  onSelectDevice: (device: Device) => void;
  onToggleCompare: (id: string) => void;
  isComparing: (id: string) => boolean;
  onNavigate: (tab: string, deviceId?: string) => void;
}

export const FinderPage: React.FC<FinderPageProps> = ({
  allDevices,
  onSelectDevice,
  onToggleCompare,
  isComparing,
  onNavigate,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [results, setResults] = useState<RecommendationResult[] | null>(null);

  const questions = [
    {
      step: 1,
      title: 'What is your budget tier?',
      subtitle: 'Choose the pricing bracket that suits your spending plan.',
      key: 'budget' as keyof QuizAnswers,
      options: [
        {
          value: 'budget_friendly',
          title: 'Value & Budget Focus',
          description: 'Maximum utility and durability for minimal cost (e.g., Galaxy A series, FE models).',
        },
        {
          value: 'mid_range',
          title: 'Balanced Everyday Sweet Spot',
          description: 'High-speed flagship experience with sensible pricing (e.g., Galaxy S base models).',
        },
        {
          value: 'flagship',
          title: 'Premium Flagship Experience',
          description: 'Top-tier cameras, premium materials, and generous storage (e.g., Galaxy S+, Z Flip).',
        },
        {
          value: 'ultra_premium',
          title: 'Ultra High-End / No Compromise',
          description: 'Titanium chassis, integrated S Pen, and workstation power (e.g., Ultra & Fold models).',
        },
      ],
    },
    {
      step: 2,
      title: 'What will be your primary daily usage?',
      subtitle: 'Identify the workflow where you demand peak performance.',
      key: 'primaryUse' as keyof QuizAnswers,
      options: [
        {
          value: 'camera_creativity',
          title: 'Pro Photography, Video & S Pen Art',
          description: 'High-resolution zoom, Nightography, RAW photos, or digital drawing.',
        },
        {
          value: 'productivity_multitask',
          title: 'Heavy Multitasking & Office Workflow',
          description: 'Running 3 apps split-screen, Samsung DeX desktop mode, and file management.',
        },
        {
          value: 'fitness_outdoors',
          title: 'Active Sports, Fitness & Health Tracking',
          description: 'Dual GPS route navigation, heart rate metrics, and rugged impact resistance.',
        },
        {
          value: 'entertainment_media',
          title: 'Movies, Gaming & Audiophile Immersion',
          description: '120Hz high-refresh displays, Dolby Atmos acoustic separation, and Hi-Fi sound.',
        },
        {
          value: 'compact_daily',
          title: 'Lightweight & Pocket Ergonomics',
          description: 'Effortless one-handed messaging and pocket-friendly compactness.',
        },
      ],
    },
    {
      step: 3,
      title: 'What screen size do you prefer?',
      subtitle: 'Select the display dimension that feels best in your hands.',
      key: 'screenPreference' as keyof QuizAnswers,
      options: [
        {
          value: 'compact',
          title: 'Compact & One-Handed (Under 6.4")',
          description: 'Ideal for small hands and slim jeans pockets.',
        },
        {
          value: 'medium',
          title: 'Standard Flagship (6.4" – 7.6")',
          description: 'Spacious for streaming and web browsing while remaining portable.',
        },
        {
          value: 'massive',
          title: 'Large Canvas Workstation (11" – 16")',
          description: 'Unrestricted workspace on tablets and laptops.',
        },
        {
          value: 'not_important',
          title: 'Screen Size is Not a Priority',
          description: 'Looking primarily at wearables, audio, or open to any display.',
        },
      ],
    },
    {
      step: 4,
      title: 'How will you carry your device?',
      subtitle: 'Portability determines form factor ergonomics.',
      key: 'portability' as keyof QuizAnswers,
      options: [
        {
          value: 'ultra_pocketable',
          title: 'Ultra-Pocketable (Folds or featherweight)',
          description: 'Should disappear effortlessly into any pocket or wrist.',
        },
        {
          value: 'balanced',
          title: 'Balanced Everyday Carry',
          description: 'Standard smartphone or tablet carried in jacket pocket or hand.',
        },
        {
          value: 'desk_bag',
          title: 'Backpack / Work Desk Focus',
          description: 'Carried in a laptop sleeve or backpack for deep productivity sessions.',
        },
      ],
    },
    {
      step: 5,
      title: 'What is your Galaxy ecosystem focus?',
      subtitle: 'Which connected continuity capability excites you most?',
      key: 'ecosystemFocus' as keyof QuizAnswers,
      options: [
        {
          value: 'mobile_first',
          title: 'Phone-Centric Everyday Life',
          description: 'Fast calls, reliable battery, and Google Circle to Search.',
        },
        {
          value: 'health_wellness',
          title: 'Holistic Biometric & Sleep Coaching',
          description: 'Watch sensors feeding AI Energy Score on Samsung Health.',
        },
        {
          value: 'sound_immersion',
          title: 'Intelligent Audio & Real-Time Interpreter',
          description: 'Earbuds with seamless Auto Switch across devices.',
        },
        {
          value: 'full_workspace',
          title: 'Cross-Device Workstation Sync',
          description: 'Quick Share, Second Screen, and Multi Control across Phone, Tab & Book.',
        },
      ],
    },
  ];

  const currentQ = questions[currentStep - 1];

  const handleSelectOption = (value: string) => {
    const updated = { ...answers, [currentQ.key]: value };
    setAnswers(updated);

    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate final recommendations
      const recs = calculateRecommendations(allDevices, updated as QuizAnswers);
      setResults(recs);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(1);
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Intelligent Hardware Matcher</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Find Your Ideal Galaxy Device
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Answer 5 straightforward questions about your habits, budget, and portability preferences to receive personalized device recommendations.
        </p>
      </div>

      {results ? (
        /* Results View */
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Your Top Recommended Galaxy Matches</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Calculated based on your budget, workflows, and ecosystem preferences.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('compare')}
                className="px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-semibold transition-colors"
              >
                Go to Compare
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {results.map((rec, index) => {
              const dev = rec.device;
              const isComp = isComparing(dev.id);

              return (
                <div
                  key={dev.id}
                  className="rounded-3xl border border-white/[0.1] bg-gradient-to-r from-slate-900/90 via-[#0a101d] to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden"
                >
                  {/* Rank Ribbon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">
                      #{index + 1}
                    </span>
                    <span className="text-xs font-bold text-cyan-300">
                      {rec.matchScore}% Compatibility
                    </span>
                  </div>

                  {/* Device Silhouette Visual */}
                  <div className="w-40 h-48 flex items-center justify-center shrink-0 mt-6 md:mt-0">
                    <DeviceSilhouette device={dev} size="md" />
                  </div>

                  {/* Recommendations Copy & Reasons */}
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <div className="text-xs font-semibold text-slate-400">
                        {dev.series} • {dev.releaseYear}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
                        {dev.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {dev.shortDescription}
                      </p>
                    </div>

                    {/* Why this device matched */}
                    <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                        Why this matches your needs:
                      </span>
                      {rec.reasons.map((reason, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectDevice(dev)}
                        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
                      >
                        <span>View Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleCompare(dev.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isComp
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-white/[0.05] text-slate-300 hover:text-white border-white/[0.1]'
                        }`}
                      >
                        {isComp ? 'In Comparison Matrix' : 'Add to Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Wizard Question Step */
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090f] p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          {/* Progress Bar & Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Question {currentStep} of {questions.length}</span>
              <span className="text-cyan-400 font-bold">{Math.round((currentStep / questions.length) * 100)}% Complete</span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${(currentStep / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentQ.title}
            </h2>
            <p className="text-sm text-slate-400">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQ.options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelectOption(opt.value)}
                className="p-5 rounded-2xl border border-white/[0.08] bg-slate-900/40 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-left transition-all duration-200 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{opt.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 mt-2 leading-relaxed">
                  {opt.description}
                </p>
              </button>
            ))}
          </div>

          {/* Back Step Button */}
          {currentStep > 1 && (
            <div className="pt-2 border-t border-white/[0.06] flex justify-start">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Question</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
