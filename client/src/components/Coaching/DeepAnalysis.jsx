import React from 'react';

export const DeepAnalysis = ({ data }) => {
  if (!data) return null;
  const { assessment, psychology = [], strategies = [], actions, questions = [], danger } = data;

  return (
    <div className="space-y-4 text-sm text-slate-200">
      <p className="text-slate-100">{assessment}</p>
      {!!psychology.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Psychology</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {psychology.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
      {!!strategies.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Strategies</h4>
          <ul className="space-y-2">
            {strategies.map((s, i) => (
              <li key={i} className="rounded-lg bg-slate-900/80 border border-slate-800 p-2">
                <p className="font-medium text-slate-100">{s.name}</p>
                <p className="text-xs text-slate-300 mt-1">{s.how}</p>
                <p className="text-[11px] text-slate-500 mt-1">{s.science}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {actions && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Actions</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Now: {actions.now}</li>
            <li>This week: {actions.week}</li>
            <li>System: {actions.system}</li>
          </ul>
        </div>
      )}
      {!!questions.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Questions</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}
      {danger && (
        <p className="text-xs text-amber-400 border border-amber-500/40 rounded-lg bg-amber-500/5 p-2">
          Danger: {danger}
        </p>
      )}
    </div>
  );
};

