import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Sparkles, 
  Check, 
  AlertTriangle, 
  Plus, 
  Trash2,
  Lock,
  Eye,
  EyeOff,
  BookOpen
} from 'lucide-react';

export default function InteractiveDemoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container interactive-demo-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge-pill">Live Interactive Prototype</span>
            <h3 className="modal-title">{project.title} — Simulator</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {project.demoType === 'password-checker' && <PasswordCheckerDemo />}
          {project.demoType === 'expense-tracker' && <ExpenseTrackerDemo />}
          {project.demoType === 'student-hub' && <StudentHubDemo />}
        </div>
      </div>
    </div>
  );
}

// 1. Interactive Password Strength Checker Demo
function PasswordCheckerDemo() {
  const [password, setPassword] = useState('SecurePass@2026');
  const [showPass, setShowPass] = useState(true);

  // Analysis logic
  const lengthScore = password.length >= 12 ? 30 : password.length >= 8 ? 20 : password.length * 2;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const diversityScore = (hasUpper ? 18 : 0) + (hasLower ? 18 : 0) + (hasNumber ? 18 : 0) + (hasSpecial ? 18 : 0);
  const totalScore = Math.min(100, lengthScore + diversityScore);

  let strengthLabel = "Weak";
  let strengthColor = "#ef4444";
  let crackTime = "Seconds to hours";

  if (totalScore >= 80) {
    strengthLabel = "Very Strong";
    strengthColor = "#10b981";
    crackTime = "Several centuries (brute-force resistant)";
  } else if (totalScore >= 60) {
    strengthLabel = "Strong";
    strengthColor = "#3b82f6";
    crackTime = "A few years";
  } else if (totalScore >= 40) {
    strengthLabel = "Moderate";
    strengthColor = "#f59e0b";
    crackTime = "A few days";
  }

  return (
    <div className="demo-widget-wrapper">
      <div className="demo-instructions">
        <p>
          Experience Divyadharshini's <strong>Password Strength & Security Analyzer</strong> algorithm. 
          Type or modify any passphrase below to test entropy, character sets, and resilience.
        </p>
      </div>

      <div className="demo-input-box">
        <label className="demo-input-label">Test a Password:</label>
        <div className="password-input-group">
          <Lock size={18} className="input-prefix-icon" />
          <input 
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="demo-text-field"
            placeholder="Type a password to evaluate..."
          />
          <button 
            type="button" 
            onClick={() => setShowPass(!showPass)} 
            className="input-eye-btn"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Strength Bar */}
      <div className="demo-result-panel">
        <div className="result-status-row">
          <span className="result-label">Calculated Entropy Score:</span>
          <span className="result-score" style={{ color: strengthColor }}>
            {totalScore}/100 — {strengthLabel}
          </span>
        </div>

        <div className="entropy-bar-track">
          <div 
            className="entropy-bar-fill" 
            style={{ width: `${totalScore}%`, backgroundColor: strengthColor }}
          />
        </div>

        <div className="crack-time-banner">
          <ShieldCheck size={18} style={{ color: strengthColor }} />
          <span>Estimated Brute-Force Time: <strong>{crackTime}</strong></span>
        </div>

        {/* Security Checklist */}
        <div className="security-checklist-grid">
          <div className={`check-chip ${password.length >= 8 ? 'passed' : ''}`}>
            {password.length >= 8 ? <Check size={15} /> : <AlertTriangle size={15} />}
            <span>Min 8+ Characters ({password.length})</span>
          </div>
          <div className={`check-chip ${hasUpper ? 'passed' : ''}`}>
            {hasUpper ? <Check size={15} /> : <AlertTriangle size={15} />}
            <span>Uppercase Letters</span>
          </div>
          <div className={`check-chip ${hasLower ? 'passed' : ''}`}>
            {hasLower ? <Check size={15} /> : <AlertTriangle size={15} />}
            <span>Lowercase Letters</span>
          </div>
          <div className={`check-chip ${hasNumber ? 'passed' : ''}`}>
            {hasNumber ? <Check size={15} /> : <AlertTriangle size={15} />}
            <span>Numeric Digits</span>
          </div>
          <div className={`check-chip ${hasSpecial ? 'passed' : ''}`}>
            {hasSpecial ? <Check size={15} /> : <AlertTriangle size={15} />}
            <span>Special Characters</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interactive Expense Tracker Demo
function ExpenseTrackerDemo() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Data Structures Textbook", amount: 450, category: "Academics" },
    { id: 2, title: "Tech Symposium Registration", amount: 300, category: "Tech Events" },
    { id: 3, title: "Cricket Equipment Grip", amount: 250, category: "Sports" }
  ]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Academics');

  const addExpense = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;
    const newEx = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      category
    };
    setExpenses([newEx, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(ex => ex.id !== id));
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="demo-widget-wrapper">
      <div className="demo-instructions">
        <p>
          Simulate Divyadharshini's <strong>Expense Management System</strong> logic. 
          Add simulated expense items and observe real-time budget calculations.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="expense-summary-strip">
        <div className="expense-summary-box">
          <span className="sum-label">Total Expenditure</span>
          <span className="sum-val">₹{total.toLocaleString()}</span>
        </div>
        <div className="expense-summary-box">
          <span className="sum-label">Logged Entries</span>
          <span className="sum-val">{expenses.length}</span>
        </div>
        <div className="expense-summary-box">
          <span className="sum-label">Average per Entry</span>
          <span className="sum-val">₹{expenses.length ? Math.round(total / expenses.length) : 0}</span>
        </div>
      </div>

      {/* Add Form */}
      <form onSubmit={addExpense} className="expense-add-form">
        <input 
          type="text" 
          placeholder="Expense title (e.g. Books, Bus pass)..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="demo-text-field"
          required
        />
        <input 
          type="number" 
          placeholder="Amount (₹)..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="demo-text-field amount-input"
          required
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="demo-select-field"
        >
          <option value="Academics">Academics</option>
          <option value="Tech Events">Tech Events</option>
          <option value="Sports">Sports</option>
          <option value="Travel">Travel</option>
        </select>
        <button type="submit" className="btn btn-primary add-expense-btn">
          <Plus size={16} />
          <span>Add</span>
        </button>
      </form>

      {/* Expense List */}
      <div className="expense-list-container">
        {expenses.map((item) => (
          <div className="expense-row-item" key={item.id}>
            <div className="expense-info-side">
              <span className="expense-title-text">{item.title}</span>
              <span className="expense-category-pill">{item.category}</span>
            </div>
            <div className="expense-actions-side">
              <span className="expense-amount-tag">₹{item.amount}</span>
              <button 
                onClick={() => removeExpense(item.id)}
                className="expense-del-btn"
                title="Remove entry"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Interactive Student Collaboration Hub Demo
function StudentHubDemo() {
  const [activeTab, setActiveTab] = useState('resources');

  const resources = [
    { title: "Data Structures & Algorithms Cheatsheet", author: "Divyadharshini G", subject: "CSE 3rd Sem", downloads: 142 },
    { title: "Object Oriented Programming in Java & C++ Notes", author: "Study Circle Alpha", subject: "Programming", downloads: 98 },
    { title: "Relational DBMS & SQL Query Handout", author: "KRCT CSE Peer Group", subject: "Databases", downloads: 115 }
  ];

  const tasks = [
    { title: "Prepare for Department Hackathon Round 1", deadline: "Upcoming Weekend", status: "In Progress" },
    { title: "Collaborative Review on Web Dev Mini Project", deadline: "Completed", status: "Done" },
    { title: "Cricket Team Practice & Strategy Meeting", deadline: "Every Thursday", status: "Ongoing" }
  ];

  return (
    <div className="demo-widget-wrapper">
      <div className="demo-instructions">
        <p>
          Simulate the <strong>Student Collaboration Hub</strong> user interface for peer study notes and coordinated assignment trackers.
        </p>
      </div>

      <div className="hub-tabs">
        <button 
          className={`hub-tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          <BookOpen size={16} />
          <span>Study Materials ({resources.length})</span>
        </button>
        <button 
          className={`hub-tab-btn ${activeTab === 'tasks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tasks')}
        >
          <Users size={16} />
          <span>Team Discussion & Tasks ({tasks.length})</span>
        </button>
      </div>

      {activeTab === 'resources' ? (
        <div className="hub-cards-grid">
          {resources.map((res) => (
            <div className="hub-item-card" key={res.title}>
              <span className="hub-subject-badge">{res.subject}</span>
              <h4 className="hub-card-title">{res.title}</h4>
              <div className="hub-card-footer">
                <span className="hub-author">By {res.author}</span>
                <span className="hub-downloads">{res.downloads} peers reached</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hub-cards-grid">
          {tasks.map((task) => (
            <div className="hub-item-card" key={task.title}>
              <span className={`hub-status-badge ${task.status === 'Done' ? 'done' : 'progress'}`}>
                {task.status}
              </span>
              <h4 className="hub-card-title">{task.title}</h4>
              <div className="hub-card-footer">
                <span className="hub-deadline">Schedule: {task.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
