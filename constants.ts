import { Employee, Shift, Cohort, BibleVerse, TimeLog } from './types';

export const BUDGET_RATE = 55.00;

export const INITIAL_COHORTS: Cohort[] = [
  { id: 'personnel', name: 'Personnel', startDate: '2025-01-01', endDate: '2025-12-31', status: 'ACTIVE', budgetCap: 2000, cvLabel: 'Staffing Variance' },
  { id: 'contractual', name: 'Contractual', startDate: '2025-01-01', endDate: '2025-12-31', status: 'ACTIVE', budgetCap: 1000, cvLabel: 'Vendor Variance' },
  { id: 'marketing', name: 'Marketing', startDate: '2025-01-01', endDate: '2025-12-31', status: 'UPCOMING', budgetCap: 500, cvLabel: 'Ad Spend Variance' },
  { id: 'travel', name: 'Travel', startDate: '2025-01-01', endDate: '2025-12-31', status: 'ACTIVE', budgetCap: 5000, cvLabel: 'Travel Variance' }
];

export const INITIAL_EMPLOYEES: Employee[] = [
  // MASTER ADMIN (You)
  { 
    id: 'master1', firstName: 'Kendall', lastName: 'Aaron', email: 'kendallaaron84@gmail.com', role: 'MASTER_ADMIN', wage: 0, 
    cohortId: 'personnel', budgetCategory: 'Other', 
    plannedProgramBudget: 0, fteOperationalHours: 0 
  },
  // INTERNAL TEAM (SBA Funded)
  { 
    id: 'e1', firstName: 'Corichia', lastName: 'Brisco', email: 'Corichia@reelyfesolutions.com', role: 'ADMIN', wage: 65, 
    cohortId: 'personnel', budgetCategory: 'Personnel', 
    plannedProgramBudget: 35607.11, fteOperationalHours: 666 
  },
  { 
    id: 'e2', firstName: 'Lupita', lastName: 'Roy Rasheed', email: 'lupita@example.com', role: 'ADMIN', wage: 55, 
    cohortId: 'personnel', budgetCategory: 'Personnel', 
    plannedProgramBudget: 23049.96, fteOperationalHours: 520 
  },
  { 
    id: 'e3', firstName: 'Terence', lastName: 'Drew', email: 'terence@example.com', role: 'EMPLOYEE', wage: 75, 
    cohortId: 'personnel', budgetCategory: 'Personnel', 
    plannedProgramBudget: 14191.37, fteOperationalHours: 374 
  },
  { 
    id: 'e4', firstName: 'Paul', lastName: 'Sage', email: 'paul@example.com', role: 'EMPLOYEE', wage: 50, 
    cohortId: 'personnel', budgetCategory: 'Personnel', 
    plannedProgramBudget: 9497.38, fteOperationalHours: 458 
  },
  { 
    id: 'e5', firstName: 'Alexandra', lastName: 'McGuire', email: 'alexandra@example.com', role: 'ADMIN', wage: 45, 
    cohortId: 'personnel', budgetCategory: 'Personnel', 
    plannedProgramBudget: 5373.34, fteOperationalHours: 458 
  },
  
  // MARK HILL & COACHES
  { 
    id: 'e6', firstName: 'Mark', lastName: 'Hill', email: 'mark@mkpinspired.com', role: 'MANAGER', wage: 100, 
    cohortId: 'contractual', budgetCategory: 'Contractual', 
    plannedProgramBudget: 16948.88, fteOperationalHours: 170 
  },
  { 
    id: 'e7', firstName: 'MKP', lastName: 'Coach 1', email: 'coach1@mkpinspired.com', role: 'EMPLOYEE', wage: 85, 
    cohortId: 'contractual', budgetCategory: 'Contractual', managerId: 'e6', 
    plannedProgramBudget: 5000, fteOperationalHours: 60 
  }
];

export const INITIAL_SHIFTS: Shift[] = [
  { 
    id: 1, name: 'Cohort 1 Launch', description: 'Initial ramp up', 
    plannedStart: '2025-02-01', plannedEnd: '2025-02-28', plannedBudget: 15000, 
    actualStart: '2025-02-02', actualEnd: '2025-02-27', actualBudget: 14200, expectedHours: 200,
    modules: [
        { id: 'm1', name: 'Orientation', plannedStart: '2025-02-01', plannedEnd: '2025-02-05', actualStart: '2025-02-02' },
        { id: 'm2', name: 'Core Training', plannedStart: '2025-02-06', plannedEnd: '2025-02-20' }
    ]
  }
];

export const BIBLE_VERSES: BibleVerse[] = [
  { text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
  { text: "I can do all things through him who strengthens me.", reference: "Philippians 4:13" },
  { text: "Trust in the LORD with all your heart, and do not lean on your own understanding.", reference: "Proverbs 3:5" },
  { text: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles.", reference: "Isaiah 40:31" },
  { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1" }
];

export const INITIAL_TIME_LOGS: TimeLog[] = [];

export const INITIAL_TOOLTIPS = {
  "Total Budget": "The total approved funding for the program period.",
  "Actual Spend": "Total cumulative expenses including labor, travel, and supplies.",
  "Schedule Variance": "The difference between planned and actual progress (Time).",
  "Program Health": "Overall status indicator based on Cost and Schedule variance.",
  "Real-Time Utilization": "Percentage of planned FTE hours effectively utilized (Operational).",
  "Resource Financial Efficiency": "Metric tracking budget burn rate against SBA limits (Financial)."
};