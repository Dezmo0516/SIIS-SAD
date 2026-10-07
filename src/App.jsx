import React, { useState } from 'react';
import StudentPortal from './StudentPortal';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('student@university.edu.ph');
  const [password, setPassword] = useState('student123');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // 1. LOGIN SCREEN VIEW
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen grid grid-cols-1 lg:grid-cols-12 font-sans transition-colors duration-200 ${isDarkMode ? 'bg-[#0b131d] text-slate-100' : 'bg-[#f4f6f9] text-slate-800'}`}>
        
        {/* Left University Branding Panel */}
        <div className={`lg:col-span-7 p-12 lg:p-20 flex flex-col justify-between relative border-r ${isDarkMode ? 'bg-[#0f172a] border-slate-800/80' : 'bg-[#1b2a4a] text-white border-transparent'}`}>
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                  U
                </div>
                <span className="font-bold tracking-wider text-sm uppercase">CuyoTech University</span>
              </div>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 transition border border-white/10"
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Student Services Information System
            </h1>
            <p className={`text-sm max-w-md leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-blue-100/80'}`}>
              Institutional portal for student records, enrollment processing, grades, prospectus tracking, and cashier clearance.
            </p>
          </div>

          <div className="pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
              <div className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60 text-slate-300' : 'bg-white/10 border-white/10 text-white'}`}>Student Portal</div>
              <div className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60 text-slate-300' : 'bg-white/10 border-white/10 text-white'}`}>Registrar</div>
              <div className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60 text-slate-300' : 'bg-white/10 border-white/10 text-white'}`}>Cashier</div>
              <div className={`p-3 rounded-lg border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60 text-slate-300' : 'bg-white/10 border-white/10 text-white'}`}>Clearances</div>
            </div>
            <p className={`text-xs mt-6 ${isDarkMode ? 'text-slate-500' : 'text-blue-200/60'}`}>Academic Year 2026–2027 · 1st Semester</p>
          </div>
        </div>

        {/* Right Authentication Form */}
        <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Institutional Login</h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Enter your institutional student credentials.</p>
            </div>

            <form onSubmit={handleLogin} className={`p-7 rounded-2xl border shadow-sm space-y-4 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80 shadow-slate-200/50'}`}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-70">University Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-70">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition shadow-sm"
              >
                Sign In to Portal
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // 2. STUDENT DASHBOARD & PORTAL VIEW
  return (
    <div className={`min-h-screen flex font-sans transition-colors duration-200 ${isDarkMode ? 'bg-[#0b131d] text-slate-100' : 'bg-[#f4f6f9] text-slate-800'}`}>
      
      {/* Sidebar Navigation */}
      <aside className={`w-64 flex flex-col justify-between hidden md:flex border-r ${isDarkMode ? 'bg-[#0f172a] border-slate-800/80' : 'bg-[#1b2a4a] text-white border-transparent'}`}>
        <div>
          <div className={`p-6 border-b flex items-center justify-between ${isDarkMode ? 'border-slate-800' : 'border-blue-900/40'}`}>
            <div>
              <h2 className="font-bold text-sm tracking-wide">CUYOTECH SSIS</h2>
              <p className={`text-[11px] font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-300'}`}>Student Portal</p>
            </div>
          </div>
          
          <nav className="p-4 space-y-1 text-sm font-medium">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('studentPortal')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'studentPortal' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Student Portal Module
            </button>
            <button 
              onClick={() => setActiveTab('profile')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'profile' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Student Profile
            </button>
            <button 
              onClick={() => setActiveTab('grades')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'grades' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Academic Grades
            </button>
            <button 
              onClick={() => setActiveTab('curriculum')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'curriculum' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Curriculum Checklist
            </button>
            <button 
              onClick={() => setActiveTab('soa')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'soa' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Statement of Account (SOA)
            </button>
            <button 
              onClick={() => setActiveTab('requirements')} 
              className={`w-full text-left px-3.5 py-2.5 rounded-lg transition ${activeTab === 'requirements' ? 'bg-blue-600 text-white font-semibold shadow-sm' : isDarkMode ? 'text-slate-300 hover:bg-slate-800/60' : 'text-blue-100 hover:bg-white/10'}`}
            >
              Enrollment Requirements
            </button>
          </nav>
        </div>

        {/* User Profile Footer in Sidebar */}
        <div className={`p-4 border-t flex items-center justify-between ${isDarkMode ? 'border-slate-800 bg-slate-900/40' : 'border-blue-900/40 bg-blue-950/20'}`}>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">John Aleks C. Lumpay</p>
            <p className={`text-[10px] font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-300'}`}>3IT-B Group Leader</p>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-1.5 rounded-lg text-xs border transition ${isDarkMode ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}`}
            title="Toggle Theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className={`px-8 py-3.5 flex justify-between items-center border-b sticky top-0 z-10 transition-colors duration-200 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80 shadow-sm'}`}>
          <div className="text-xs font-medium opacity-70">
            Portal Workspace / <span className="font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">{activeTab}</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <span className="font-semibold hidden sm:inline">John Aleks C. Lumpay (3IT-B)</span>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-red-500 hover:underline font-medium"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Body / Tabs */}
        <main className="p-8 space-y-6 overflow-y-auto max-w-6xl w-full mx-auto">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Welcome back, John Aleks</h1>
                  <p className="text-xs opacity-60 mt-1">College of Computing Studies · Bachelor of Science in Information Technology</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-md">
                  Officially Enrolled
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                  <p className="text-2xl font-bold">21</p>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">Enrolled Units</p>
                </div>
                <div className={`p-5 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1.25</p>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">Cumulative GWA</p>
                </div>
                <div className={`p-5 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                  <p className="text-2xl font-bold">₱0.00</p>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">Account Balance</p>
                </div>
                <div className={`p-5 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Cleared</p>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">Clearance Status</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDENT PORTAL MODULE */}
          {activeTab === 'studentPortal' && (
            <StudentPortal isDarkMode={isDarkMode} />
          )}

          {/* TAB 3: STUDENT PROFILE (Admin-Restricted / Read-Only) */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Student Profile Information</h1>
                <p className="text-xs opacity-60 mt-1">Institutional records managed and verified by the Office of the Registrar.</p>
              </div>

              {/* Security Notice Banner */}
              <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${isDarkMode ? 'bg-amber-950/20 border-amber-900/40 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                <span className="text-base">🔒</span>
                <div>
                  <p className="font-bold">Restricted Profile Modification</p>
                  <p className="mt-0.5 opacity-90">To ensure data integrity, students cannot directly edit personal or academic profile fields. Please submit a formal request ticket to the System Administrator or Registrar Office for any corrections.</p>
                </div>
              </div>

              <div className={`p-6 rounded-xl border shadow-sm space-y-6 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">Full Name</label>
                    <input type="text" value="John Aleks C. Lumpay" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">Student ID Number</label>
                    <input type="text" value="CT-2024-08912" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">Institutional Email</label>
                    <input type="text" value="student@university.edu.ph" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">Degree Program & Section</label>
                    <input type="text" value="BS Information Technology (3IT-B)" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">College Department</label>
                    <input type="text" value="College of Computing Studies" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider opacity-60 mb-1">Account Access Level</label>
                    <input type="text" value="Student Role (Verified)" disabled className={`w-full px-3.5 py-2.5 rounded-lg border opacity-80 cursor-not-allowed ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GRADES */}
          {activeTab === 'grades' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Academic Grades</h1>
                <p className="text-xs opacity-60 mt-1">Official repository of per-semester grades.</p>
              </div>

              <div className={`p-6 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <h3 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-4">Academic Year 2025–2026 · Current Semester</h3>
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className={`border-b opacity-50 uppercase ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <th className="pb-2.5">Course Code</th>
                      <th className="pb-2.5">Description</th>
                      <th className="pb-2.5">Units</th>
                      <th className="pb-2.5">Final Grade</th>
                      <th className="pb-2.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y opacity-90">
                    <tr><td className="py-3 font-semibold">IT311</td><td>Advanced Web Development</td><td>3</td><td>1.25</td><td className="text-right text-emerald-600 dark:text-emerald-400 font-bold">Passed</td></tr>
                    <tr><td className="py-3 font-semibold">IT312</td><td>Systems Analysis and Design</td><td>3</td><td>1.00</td><td className="text-right text-emerald-600 dark:text-emerald-400 font-bold">Passed</td></tr>
                    <tr><td className="py-3 font-semibold">IT313</td><td>Information Assurance & Security</td><td>3</td><td>1.50</td><td className="text-right text-emerald-600 dark:text-emerald-400 font-bold">Passed</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: CURRICULUM CHECKLIST */}
          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">BS Information Technology Prospectus</h1>
                <p className="text-xs opacity-60 mt-1">Curriculum checklist and prerequisite restriction validation.</p>
              </div>

              <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${isDarkMode ? 'bg-blue-950/30 border-blue-900/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
                <span className="text-base">ℹ️</span>
                <div>
                  <p className="font-bold">Prerequisite Compliance Notice</p>
                  <p className="mt-0.5 opacity-90">Failing a core prerequisite subject will automatically restrict enrollment in succeeding advanced courses until successfully retaken.</p>
                </div>
              </div>

              <div className={`p-6 rounded-xl border shadow-sm space-y-4 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <h3 className="font-bold text-sm">Curriculum Progress Overview</h3>
                <div className="space-y-3 text-xs">
                  <div className={`p-3.5 rounded-lg border flex justify-between items-center ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div>
                      <p className="font-bold">CC102 - Computer Programming 1</p>
                      <p className="opacity-60 text-[11px] mt-0.5">Prerequisite for: Data Structures and Algorithms</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold rounded">Passed (1.00)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: STATEMENT OF ACCOUNT (SOA) */}
          {activeTab === 'soa' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Statement of Account</h1>
                <p className="text-xs opacity-60 mt-1">Cashier assessment summary and tuition fee breakdown.</p>
              </div>

              <div className={`rounded-2xl border shadow-sm overflow-hidden ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <div className={`px-6 py-4 flex justify-between items-center border-b ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">Assessment Reference</span>
                    <p className="text-xs font-bold mt-0.5">SOA-2026-094</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                    Fully Paid
                  </span>
                </div>

                <div className="p-6">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className={`border-b text-[11px] font-bold uppercase tracking-wider opacity-50 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                        <th className="pb-3">Particulars / Fee Description</th>
                        <th className="pb-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${isDarkMode ? 'divide-slate-800/60' : 'divide-slate-100'}`}>
                      <tr>
                        <td className="py-3.5 font-medium">Tuition Fee (21 Units)</td>
                        <td className="py-3.5 text-right font-semibold">₱11,550.00</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-medium">Laboratory & Miscellaneous Fees</td>
                        <td className="py-3.5 text-right font-semibold">₱5,950.00</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className={`mt-6 pt-4 border-t flex justify-between items-center ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-70">Total Balance Due</span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">₱0.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: REQUIREMENTS */}
          {activeTab === 'requirements' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Enrollment Credentials Panel</h1>
                <p className="text-xs opacity-60 mt-1">Registrar verification status for submitted documents.</p>
              </div>
              <div className={`p-6 rounded-xl border shadow-sm space-y-3 ${isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'}`}>
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-emerald-700 dark:text-emerald-400">Form 138 (High School Report Card)</p>
                    <p className="opacity-60 mt-0.5">Verified by Admissions & Registrar Office</p>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold rounded">Verified</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}