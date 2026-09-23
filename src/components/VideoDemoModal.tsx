import React, { useEffect } from 'react';
import { X, ExternalLink, Play, ShieldAlert } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Extract YouTube ID if applicable
  // For https://youtu.be/LYt1nEL-btk?si=KUcBW8onkMm4s7VJ -> ID is LYt1nEL-btk
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const id = urlParams.get('v');
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
    } catch {}
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-navy-950/90">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
            <span>Project Video Demonstration</span>
            <span className="text-slate-500 hidden sm:inline font-normal">• SIH26049 HYROX USRPS</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span>Open on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title="USRPS Project Demonstration Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-white/5 bg-navy-950/90 flex items-center justify-between text-xs text-slate-400">
          <span>Demonstration of physical prototype bench testing &amp; multi-sensor telemetry loop.</span>
          <span className="text-slate-300 font-medium">Team HYROX</span>
        </div>
      </div>
    </div>
  );
};
