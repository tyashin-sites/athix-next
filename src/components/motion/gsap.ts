'use client';

/**
 * Shared GSAP core — the ONE registration point (luxury layer §4). Every
 * animated client component imports from here so the 'brand' ease (mirrors
 * CSS --ease-brand) is always available and plugins register once.
 *
 * Rules: ease 'brand' everywhere ('none' only for scrubbed tweens); reveals
 * animate transform/opacity/filter only and clear inline props on complete;
 * reduced() gates EVERY entrance/scrub.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
  if (!CustomEase.get('brand')) {
    // Mirrors --ease-brand: cubic-bezier(0.22, 1, 0.36, 1)
    CustomEase.create('brand', 'M0,0 C0.22,1 0.36,1 1,1');
  }
}

export function reduced(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger, useGSAP };
