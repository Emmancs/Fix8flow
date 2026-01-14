import React from 'react';

export const Troubleshoot = ({ data }) => {
  if (!data) return null;
  const { diagnosis, patterns = [], causes = [], environment = [], reset, prevent } = data;

  return (
    <div className="space-y-4 text-sm text-slate-200">
      <p className="text-slate-100">{diagnosis}</p>
      {!!patterns.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Patterns</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {patterns.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
      {!!causes.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Causes & fixes</h4>
          <ul className="space-y-2">
            {causes.map((c, i) => (
              <li key={i} className="rounded-lg bg-slate-900/80 border border-slate-800 p-2">
                <p className="font-medium text-slate-100">{c.issue}</p>
                <p className="text-xs text-slate-300 mt-1">Test: {c.test}</p>
                <p className="text-xs text-emerald-300 mt-1">Fix: {c.fix}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!environment.length && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
            Environment tweaks
          </h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {environment.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      {reset && (
        <p className="text-xs text-sky-300 border border-sky-500/40 rounded-lg bg-sky-500/5 p-2">
          Reset plan: {reset}
        </p>
      )}
      {prevent && (
        <p className="text-xs text-emerald-300 border border-emerald-500/40 rounded-lg bg-emerald-500/5 p-2">
          Prevent: {prevent}
        </p>
      )}
    </div>
  );
};

