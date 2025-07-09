/**
 * =================================================================
 * SHARED TYPES
 * =================================================================
 * 이 파일은 애플리케이션 전체에서 공유되는 TypeScript 타입들을 정의합니다.
 * 중복을 피하고 일관성을 유지하기 위해 이곳에서 타입을 관리합니다.
 */

// From components/Training/TrainingModal.tsx
export interface TrainingPlan {
  title: string;
  targetWpm: number;
  duration: number;
  content: string;
} 