import React, { useState } from 'react';
import { X, Users, Code2, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: 'family' | 'tech';
  defaultSubtype?: string;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  defaultTrack = 'family',
  defaultSubtype = 'partner'
}) => {
  const [track, setTrack] = useState<'family' | 'tech'>(defaultTrack);
  const [subtype, setSubtype] = useState(defaultSubtype);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    statement: ''
  });

  if (!isOpen) return null;

  const familySubtypes = [
    { id: 'partner', label: 'Institutional Partner', desc: 'Collaborate as a funding body, university, or developmental donor.' },
    { id: 'career', label: 'Professional Career', desc: 'Apply for permanent operational, research, or field management roles.' },
    { id: 'internship', label: 'Academic Internship / Fellowship', desc: 'Join our structured accredited leadership and research cohort.' },
    { id: 'visit', label: 'Visit Us', desc: 'Request an official visit or delegation tour of our field consultation hubs.' }
  ];

  const techSubtypes = [
    { id: 'ambassador', label: 'Regional Ambassador', desc: 'Promote OCPI grassroots initiatives in your state or university campus.' },
    { id: 'technician', label: 'Studio Technician', desc: 'Support our Community Open Labs, hardware maker tools, and video studios.' },
    { id: 'volunteer', label: 'Community Volunteer', desc: 'Provide ground support during emergency response and educational clinics.' }
  ];

  const currentOptions = track === 'family' ? familySubtypes : techSubtypes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', location: '', statement: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-white backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-gray-200 rounded-3xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900">Application Received!</h3>
            <p className="text-gray-700 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for applying to join the <strong>One Community Platform Initiative</strong>. The Project Director Desk will review your application and contact you via email within 3 business days.
            </p>
            <div className="pt-2">
              <Button
                onClick={handleResetAndClose}
                variant="primary"
                size="md"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              Official Membership Form
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
              Join One Community Platform
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-6">
              Choose your participation track to onboard with our pan-African civic network.
            </p>

            {/* Track Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-white rounded-2xl border border-gray-200 mb-6">
              <button
                type="button"
                onClick={() => { setTrack('family'); setSubtype('partner'); }}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  track === 'family'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>JOIN Our Family</span>
              </button>

              <button
                type="button"
                onClick={() => { setTrack('tech'); setSubtype('ambassador'); }}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  track === 'tech'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>JOIN Tech Group</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Category Type
                </label>
                <select
                  value={subtype}
                  onChange={(e) => setSubtype(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                >
                  {currentOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label} — {opt.desc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Amina Bello"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="amina@example.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    State / Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lagos, Nigeria"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Statement of Interest / Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of your background and why you wish to join..."
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={loading}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
};
