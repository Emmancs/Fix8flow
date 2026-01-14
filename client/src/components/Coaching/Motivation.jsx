import React from 'react';

export const Motivation = ({ data }) => {
  if (!data) return null;
  const { rally, vision, urgency, identity, challenge } = data;

  return (
    <div className="space-y-3 text-sm text-slate-100">
      <p className="text-lg font-semibold text-purple-200">{rally}</p>
      <p>{vision}</p>
      <p className="text-amber-300">{urgency}</p>
      <p className="italic text-sky-200">{identity}</p>
      <p className="font-medium text-emerald-300">{challenge}</p>
    </div>
  );
};

