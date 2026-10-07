import React, { useState, useEffect } from 'react';

export default function StudentPortal() {
    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState('1');

    useEffect(() => {
        fetch('http://localhost/cuyotech-api/api_student_data.php?student_id=1')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setStudentData(data.records);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-6 text-gray-400 font-medium bg-[#121824] min-h-screen">Loading student records from database...</div>;

    const yearFilteredData = studentData.filter(item => String(item.year_level) === String(selectedYear));
    const firstSemData = yearFilteredData.filter(item => item.semester && item.semester.toLowerCase().includes('1st'));
    const secondSemData = yearFilteredData.filter(item => item.semester && item.semester.toLowerCase().includes('2nd'));

    return (
        <div className="p-8 bg-[#0f172a] text-gray-100 min-h-screen font-sans">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-800 pb-5">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">CuyoTech SSIS - Student Portal</h1>
                    <p className="text-sm text-gray-400 mt-1">Welcome back, John Aleks! Here is your academic curriculum checklist and grades.</p>
                </div>
                
                {/* Year Level Filter Dropdown */}
                <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-2.5 rounded-xl shadow-sm border border-gray-700/60">
                    <label htmlFor="yearFilter" className="text-sm font-semibold text-gray-300">Year Level:</label>
                    <select 
                        id="yearFilter"
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="bg-[#0f172a] text-gray-200 px-3 py-1.5 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
                    >
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                    </select>
                </div>
            </div>
            
            {/* 1ST SEMESTER SECTION */}
            <div className="mb-10">
                <h2 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    First Semester
                </h2>
                <div className="bg-[#1e293b] rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#111827] text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-800">
                                    <th className="p-4">Subject Code</th>
                                    <th className="p-4">Description</th>
                                    <th className="p-4 text-center">Units</th>
                                    <th className="p-4">Term</th>
                                    <th className="p-4 text-center">Grade</th>
                                    <th className="p-4 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/60 text-sm">
                                {firstSemData.length > 0 ? (
                                    firstSemData.map((item, index) => (
                                        <tr key={index} className="hover:bg-[#2563eb]/10 transition-colors">
                                            <td className="p-4 font-semibold text-indigo-400">{item.subject_code}</td>
                                            <td className="p-4 text-gray-200">{item.description}</td>
                                            <td className="p-4 text-center text-gray-300">{item.units}</td>
                                            <td className="p-4 text-gray-400">{item.term}</td>
                                            <td className="p-4 font-bold text-center text-white">
                                                {item.grade !== null ? item.grade : <span className="text-gray-500 font-normal">N/A</span>}
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                    item.status === 'Completed' 
                                                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' 
                                                        : 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                                                }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center p-6 text-gray-500">
                                            No subjects found for the First Semester.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 2ND SEMESTER SECTION */}
            <div>
                <h2 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    Second Semester
                </h2>
                <div className="bg-[#1e293b] rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#111827] text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-800">
                                    <th className="p-4">Subject Code</th>
                                    <th className="p-4">Description</th>
                                    <th className="p-4 text-center">Units</th>
                                    <th className="p-4">Term</th>
                                    <th className="p-4 text-center">Grade</th>
                                    <th className="p-4 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/60 text-sm">
                                {secondSemData.length > 0 ? (
                                    secondSemData.map((item, index) => (
                                        <tr key={index} className="hover:bg-[#2563eb]/10 transition-colors">
                                            <td className="p-4 font-semibold text-indigo-400">{item.subject_code}</td>
                                            <td className="p-4 text-gray-200">{item.description}</td>
                                            <td className="p-4 text-center text-gray-300">{item.units}</td>
                                            <td className="p-4 text-gray-400">{item.term}</td>
                                            <td className="p-4 font-bold text-center text-white">
                                                {item.grade !== null ? item.grade : <span className="text-gray-500 font-normal">N/A</span>}
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                    item.status === 'Completed' 
                                                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' 
                                                        : 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                                                }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center p-6 text-gray-500">
                                            No subjects found for the Second Semester.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}