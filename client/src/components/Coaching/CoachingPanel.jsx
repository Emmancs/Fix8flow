import React, { useState } from 'react';
import { coachingService } from '../../services/coachingService';
import { DeepAnalysis } from './DeepAnalysis';
import { Motivation } from './Motivation';
import { Troubleshoot } from './Troubleshoot';
import { Button } from '../Common/Button';

const TABS = [
  { id: 'deep', label: 'Deep analysis' },
  { id: 'motivate', label: 'Motivation' },
  { id: 'troubleshoot', label: 'Troubleshoot' }
];

export const CoachingPanel = ({ selectedHabit }) => {
  const [activeTab, setActiveTab] = useState('deep');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetch = async () => {
    if (!selectedHabit) return;
    setLoading(true);
    setError('');
    try {
      const res = await coachingService.getCoaching(selectedHabit._id, activeTab);
      setData(res.coaching);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch coaching');
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (!data) {
      return (
        <p className="text-sm text-slate-400">
          Pick a habit and tap &quot;Ask coach&quot; to get AI guidance tailored to your streak.
        </p>
      );
    }
    if (activeTab === 'deep') return <DeepAnalysis data={data} />;
    if (activeTab === 'motivate') return <Motivation data={data} />;
    if (activeTab === 'troubleshoot') return <Troubleshoot data={data} />;
    return null;
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">AI coach</h2>
        <Button onClick={handleFetch} disabled={!selectedHabit || loading} className="px-3 py-1 text-xs">
          {loading ? 'Thinking...' : 'Ask coach'}
        </Button>
      </div>
      <div className="flex gap-2 text-xs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-full px-3 py-1.5 border text-center ${
              activeTab === tab.id
                ? 'border-purple-500 bg-purple-500/20 text-purple-200'
                : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-purple-500/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 min-h-[180px]">
        {error ? <p className="text-sm text-red-400">{error}</p> : renderContent()}
      </div>
    </section>
  );
};

