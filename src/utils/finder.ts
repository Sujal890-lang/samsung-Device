import type { Device } from '../data/schema';

export interface QuizAnswers {
  budget: 'budget_friendly' | 'mid_range' | 'flagship' | 'ultra_premium';
  primaryUse: 'camera_creativity' | 'productivity_multitask' | 'fitness_outdoors' | 'entertainment_media' | 'compact_daily';
  screenPreference: 'compact' | 'medium' | 'massive' | 'not_important';
  portability: 'ultra_pocketable' | 'balanced' | 'desk_bag';
  ecosystemFocus: 'mobile_first' | 'health_wellness' | 'sound_immersion' | 'full_workspace';
}

export interface RecommendationResult {
  device: Device;
  matchScore: number; // 0 - 100
  reasons: string[];
}

export function calculateRecommendations(allDevices: Device[], answers: QuizAnswers): RecommendationResult[] {
  const scored = allDevices.map((device) => {
    let score = 50; // base score
    const reasons: string[] = [];

    // 1. Budget scoring
    if (answers.budget === 'budget_friendly') {
      if (device.series === 'Galaxy A' || device.series === 'Galaxy Tab A' || device.name.includes('FE')) {
        score += 30;
        reasons.push('Delivers outstanding value and essential capabilities well within budget.');
      } else if (device.series === 'Galaxy S' && !device.name.includes('Ultra')) {
        score += 10;
      } else {
        score -= 20;
      }
    } else if (answers.budget === 'mid_range') {
      if (device.series === 'Galaxy S' && !device.name.includes('Ultra')) {
        score += 25;
        reasons.push('Strikes the ideal sweet spot between premium performance and pricing.');
      } else if (device.series === 'Galaxy Tab S' && !device.name.includes('Ultra')) {
        score += 20;
      } else if (device.name === 'Galaxy Book4') {
        score += 20;
      }
    } else if (answers.budget === 'flagship' || answers.budget === 'ultra_premium') {
      if (device.name.includes('Ultra') || device.series === 'Galaxy Z') {
        score += 35;
        reasons.push('Offers maximum top-tier performance, titanium durability, and cutting-edge features.');
      } else if (device.series === 'Galaxy S') {
        score += 15;
      }
    }

    // 2. Primary Use
    if (answers.primaryUse === 'camera_creativity') {
      if (device.id === 'galaxy-s26-ultra' || device.id === 'galaxy-s24-ultra') {
        score += 35;
        reasons.push('Equipped with industry-leading 200MP camera and optical telephoto zoom system.');
      } else if (device.id.includes('tab-s10') || device.id === 'galaxy-book4-pro-360') {
        score += 25;
        reasons.push('Includes precision S Pen stylus for effortless drawing and creative digital illustration.');
      }
    } else if (answers.primaryUse === 'productivity_multitask') {
      if (device.id === 'galaxy-z-fold6') {
        score += 35;
        reasons.push('Unfolds into a 7.6-inch multi-window canvas for running up to 3 apps simultaneously.');
      } else if (device.category === 'laptops' || device.id.includes('tab-s10')) {
        score += 30;
        reasons.push('Full Samsung DeX and Multi Control support for true desktop workstation productivity.');
      } else if (device.id.includes('ultra')) {
        score += 20;
      }
    } else if (answers.primaryUse === 'fitness_outdoors') {
      if (device.category === 'wearables') {
        score += 40;
        reasons.push('Provides dual-frequency GPS, heart rate tracking, Energy Score, and extreme durability.');
      } else if (device.id === 'galaxy-buds3-pro') {
        score += 15;
      }
    } else if (answers.primaryUse === 'entertainment_media') {
      if (device.category === 'audio') {
        score += 35;
        reasons.push('High-fidelity 24-bit sound and Active Noise Cancellation deliver pure acoustic immersion.');
      } else if (device.display && (device.display.sizeInches || 0) >= 6.7) {
        score += 25;
        reasons.push('Vibrant 120Hz Dynamic AMOLED display paired with stereo Dolby Atmos speakers.');
      }
    } else if (answers.primaryUse === 'compact_daily') {
      if (device.id === 'galaxy-z-flip6') {
        score += 35;
        reasons.push('Folds into a tiny square with an exterior FlexWindow for fast one-handed replies.');
      } else if (device.id === 'galaxy-s26' || device.series === 'Galaxy A') {
        score += 25;
        reasons.push('Compact ergonomic body designed for comfortable one-handed daily use.');
      }
    }

    // 3. Screen preference
    if (answers.screenPreference === 'compact') {
      if (device.display && (device.display.sizeInches || 0) <= 6.3) {
        score += 20;
        reasons.push('Compact screen size matches your preference for effortless pocketability.');
      } else if (device.display && (device.display.sizeInches || 0) > 10) {
        score -= 25;
      }
    } else if (answers.screenPreference === 'massive') {
      if (device.display && (device.display.sizeInches || 0) >= 12.0) {
        score += 25;
        reasons.push('Expansive screen provides cinematic viewing and unrestricted workspace.');
      } else if (device.category === 'wearables' || device.category === 'audio') {
        score -= 20;
      }
    }

    // 4. Portability
    if (answers.portability === 'ultra_pocketable') {
      if (device.id === 'galaxy-z-flip6' || device.id === 'galaxy-s26' || device.category === 'audio') {
        score += 20;
        reasons.push('Extremely lightweight and discreet for on-the-go mobility.');
      } else if (device.category === 'laptops') {
        score -= 25;
      }
    } else if (answers.portability === 'desk_bag') {
      if (device.category === 'laptops' || device.category === 'tablets') {
        score += 20;
        reasons.push('Built to excel as a primary portable workstation inside your backpack.');
      }
    }

    // 5. Ecosystem Focus
    if (answers.ecosystemFocus === 'health_wellness' && device.category === 'wearables') {
      score += 25;
      reasons.push('Central anchor for your Galaxy Health data, sleep insights, and activity goals.');
    } else if (answers.ecosystemFocus === 'sound_immersion' && device.category === 'audio') {
      score += 25;
      reasons.push('Seamless Auto Switch across all your Galaxy devices with low-latency sound.');
    } else if (answers.ecosystemFocus === 'full_workspace' && (device.category === 'laptops' || device.category === 'tablets' || device.name.includes('Fold'))) {
      score += 25;
      reasons.push('Natively connects with Quick Share, Second Screen, and Multi Control.');
    }

    // Deduplicate and cap reasons
    const uniqueReasons = Array.from(new Set(reasons)).slice(0, 3);
    if (uniqueReasons.length === 0) {
      uniqueReasons.push('Reliable daily Galaxy experience with proven durability and seamless software updates.');
    }

    return {
      device,
      matchScore: Math.min(Math.max(score, 10), 98),
      reasons: uniqueReasons,
    };
  });

  // Sort descending by matchScore and take top 3
  return scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
}
