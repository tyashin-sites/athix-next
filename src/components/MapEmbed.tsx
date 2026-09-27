'use client';

/**
 * MapEmbed — click-to-load Google Maps. The iframe is heavy and third-party;
 * loading it on demand protects performance and only contacts Google when
 * the visitor asks for the map. Until then a static, branded placeholder
 * with the address and a "Open in Google Maps" link does the job.
 */

import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { MAPS_EMBED_URL, MAPS_LINK_URL, FULL_ADDRESS, siteConfig } from '@/config/site';

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[4/3] md:aspect-[16/9] bg-surface">
        {loaded ? (
          <iframe
            title={`Map — ${siteConfig.name}, ${FULL_ADDRESS}`}
            src={MAPS_EMBED_URL}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <MapPin className="w-8 h-8 text-accent" aria-hidden />
            <p className="font-heading font-medium">{siteConfig.address.facility}</p>
            <p className="text-sm text-muted -mt-2">{FULL_ADDRESS}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button type="button" onClick={() => setLoaded(true)} className="btn btn-primary">Show map</button>
              <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Open in Google Maps <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
