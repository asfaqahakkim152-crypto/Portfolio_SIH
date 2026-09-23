import React, { useState } from 'react';
import { 
  Users, 
  Linkedin, 
  ExternalLink, 
  Shield, 
  Award, 
  Camera
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/projectData';
import { TeamMember } from '../types';

interface TeamSectionProps {
  memberLinkedinUrls?: Record<string, string>;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ memberLinkedinUrls = {} }) => {
  // Allow interactive local photo update so team can attach/change their photos anytime
  const [memberPhotos, setMemberPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('hyrox_member_photos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handlePhotoUpload = (memberId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64 = uploadEvent.target?.result as string;
        const updated = { ...memberPhotos, [memberId]: base64 };
        setMemberPhotos(updated);
        try {
          localStorage.setItem('hyrox_member_photos', JSON.stringify(updated));
        } catch {}
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="team" className="py-24 relative border-t border-slate-800 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Smart India Hackathon 2026 Core R&amp;D Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            MEET TEAM HYROX
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Multidisciplinary engineering collective combining embedded firmware, power electronics, mechanical CAD, and software telemetry to solve extreme-altitude reliability in Ladakh.
          </p>
        </div>

        {/* Team Grid: Premium Aerospace Identity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const linkedinHref = memberLinkedinUrls[member.id] || member.linkedinUrl;
            const photoSrc = memberPhotos[member.id] || member.avatarUrl;
            const isMentor = member.role.toLowerCase().includes('mentor');

            // Generate clean visual initials
            const initials = member.name
              .split(' ')
              .filter(p => p.length > 0)
              .map(p => p[0])
              .slice(0, 2)
              .join('');

            return (
              <div 
                key={member.id}
                className={`rounded-xl tech-panel transition-all p-6 flex flex-col justify-between group relative overflow-hidden ${
                  isMentor 
                    ? 'border-amber-500/30 hover:border-amber-400/60 bg-gradient-to-b from-amber-500/5 to-transparent' 
                    : 'border-slate-800 hover:border-cyan-400/40'
                }`}
              >
                {/* Background Subtle Badge Watermark */}
                <div className={`absolute top-2 right-2 text-[10px] font-mono tracking-widest uppercase select-none pointer-events-none ${
                  isMentor ? 'text-amber-500/20' : 'text-slate-800'
                }`}>
                  {member.callsign}
                </div>

                <div>
                  {/* Top Profile Header: Avatar / Photo + Role Badge */}
                  <div className="flex items-center gap-4 mb-5">
                    
                    {/* Member Photo Container with Upload Trigger */}
                    <div className="relative group/avatar">
                      <div className={`w-16 h-16 rounded-lg border-2 bg-navy-950 flex items-center justify-center overflow-hidden shrink-0 shadow-lg ${
                        isMentor ? 'border-amber-400/50' : 'border-cyan-400/40'
                      }`}>
                        {photoSrc ? (
                          <img 
                            src={photoSrc} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 text-ice-200">
                            <span className={`font-mono font-bold text-lg tracking-wider ${
                              isMentor ? 'text-amber-300' : 'text-cyan-300'
                            }`}>
                              {initials}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">
                              {isMentor ? 'MENTOR' : 'HYROX'}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Interactive Upload Overlay */}
                      <label 
                        className={`absolute inset-0 bg-navy-950/80 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer border ${
                          isMentor ? 'border-amber-400' : 'border-cyan-400'
                        }`}
                        title="Upload/change member photo"
                      >
                        <Camera className={`w-4 h-4 mb-0.5 ${isMentor ? 'text-amber-300' : 'text-cyan-300'}`} />
                        <span className={`text-[8px] font-mono uppercase ${isMentor ? 'text-amber-200' : 'text-cyan-200'}`}>Change</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={(e) => handlePhotoUpload(member.id, e)} 
                          className="hidden" 
                        />
                      </label>
                    </div>

                    {/* Member Name and Identity */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-bold ${
                          isMentor 
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' 
                            : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                        }`}>
                          {member.department}
                        </span>
                      </div>
                      <h3 className={`text-base font-mono font-bold text-white transition-colors ${
                        isMentor ? 'group-hover:text-amber-200' : 'group-hover:text-cyan-200'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`text-xs font-mono font-semibold mt-0.5 ${
                        isMentor ? 'text-amber-300' : 'text-ice-300'
                      }`}>
                        {member.role}
                      </p>
                    </div>

                  </div>

                  {/* Responsibility Narrative */}
                  <div className="p-3 rounded-lg bg-navy-950/80 border border-slate-800/80 mb-4 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-slate-400 font-mono block text-[10px] uppercase mb-1">Responsibility:</strong>
                    {member.responsibility}
                  </div>
                </div>

                {/* Card Footer: LinkedIn Button */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  {isMentor ? (
                    <span className="text-[10px] font-mono flex items-center gap-1 text-amber-400/90">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>SIH 2026 Project Mentor</span>
                    </span>
                  ) : (
                    <span />
                  )}

                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-slate-200 bg-navy-950 border transition-all group/btn ${
                      isMentor 
                        ? 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 text-amber-300' 
                        : 'border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300'
                    }`}
                    aria-label={`Open ${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className={`w-3.5 h-3.5 transition-transform group-hover/btn:scale-110 ${
                      isMentor ? 'text-amber-400' : 'text-cyan-400'
                    }`} />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Team Collaboration Affirmation */}
        <div className="mt-12 p-4 rounded-xl tech-panel border-cyan-500/20 text-center text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-ice-300">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Problem Statement ID: SIH26049 • Team HYROX</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span>Unified cross-functional engineering for extreme Himalayan environments.</span>
        </div>

      </div>
    </section>
  );
};
