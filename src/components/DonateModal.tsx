import React, { useState } from 'react';
import { X, Heart, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('50');
  const [allocation, setAllocation] = useState('General Community Fund (Greatest Need)');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const presets = ['25', '50', '100', '250'];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-gray-200 rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative">
        
        <button 
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-emerald-600 text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900">Thank You for Supporting OCPI!</h3>
            <p className="text-gray-700 text-xs leading-relaxed">
              Your contribution of <strong>${amount}</strong> toward <em>{allocation}</em> empowers grassroots African transformation. You will receive an official tax-deductible donor receipt shortly.
            </p>
            <div className="pt-2">
              <Button
                onClick={handleReset}
                variant="primary"
                size="md"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FC02A]/10 text-[#8FC02A] text-xs font-bold font-sans mb-2">
              <Heart className="w-3.5 h-3.5 fill-[#8FC02A]" />
              Direct Giving
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
              Support Grassroots Action
            </h3>
            <p className="text-slate-600 text-xs mb-6 font-sans">
              Empower rural students, open maker laboratories, and independent JRG field research across Nigeria and Africa.
            </p>

            <form onSubmit={handleDonate} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Donation Tier (USD / NGN Equiv)
                </label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {presets.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setAmount(p)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border font-sans ${
                        amount === p
                          ? 'bg-[#1B96D8] text-white border-[#1B96D8] shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      ${p}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="5"
                  required
                  placeholder="Or enter custom amount ($)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Direct Programmatic Allocation
                </label>
                <select
                  value={allocation}
                  onChange={(e) => setAllocation(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#1B96D8] focus:ring-2 focus:ring-[#1B96D8]/20 focus:outline-none transition-colors"
                >
                  <option>General Community Fund (Greatest Need)</option>
                  <option>Accredited Fellowship Scholarships</option>
                  <option>Community Open Labs &amp; Hardware Toolkits</option>
                  <option>Joint Research Group (JRG) Field Studies</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#8FC02A] shrink-0" />
                <span>Audited annually by Associate Quality Specialists &amp; Trustees.</span>
              </div>

              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full text-center justify-center"
                  icon={<Heart className="w-4 h-4 fill-current" />}
                >
                  Proceed to Secure Checkout
                </Button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
