import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notification-banner" onClick={onClose} role="alert">
      <CheckCircle2 size={18} className="toast-icon text-green" />
      <span className="toast-message-text">{message}</span>
    </div>
  );
}
