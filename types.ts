export type UserRole = 'MASTER_ADMIN' | 'ADMIN' | 'EMPLOYEE' | 'MANAGER' | 'INDUSTRY_PARTNER';
export type BudgetCategory = 'Personnel' | 'Fringe' | 'Travel' | 'Equipment' | 'Supplies' | 'Contractual' | 'Marketing' | 'Other';

export interface ShiftModule {
  id: string;
  name: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart?: string;
  actualEnd?: string;
}

export interface Shift {
  id: number;
  name: string;
  description: string;
  plannedStart: string;
  plannedEnd: string;
  plannedBudget: number;
  actualStart: string;
  actualEnd: string;
  actualBudget: number;
  expectedHours: number;
  modules?: ShiftModule[]; 
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  wage: number;
  cohortId: string; 
  companyName?: string; 
  managerId?: string; 
  budgetCategory: BudgetCategory; 
  plannedProgramBudget: number; 
  fteOperationalHours: number;  
}

export interface TimeLog {
  id: string;
  employeeId: string;
  cohortId: string; 
  budgetCategory?: BudgetCategory; 
  weekEnding: string; 
  billableHours: number;
  actualHours: number;
  status: 'Pending' | 'Pending Manager' | 'Approved' | 'Rejected'; 
  journalEntry?: string; 
  equipmentCost?: number;
  equipmentReceiptUrl?: string;
  suppliesCost?: number;
  suppliesReceiptUrl?: string;
  
  // FIXED: Added this field so Dashboard can read the calculated cost
  totalCost?: number; 
}

export interface TravelRequest {
  id: string;
  employeeId: string;
  weekEnding: string; 
  lodgingCost: number;
  distanceMiles: number;
  totalReimbursement: number; 
  status: 'Pending' | 'Pending Manager' | 'Approved' | 'Rejected';
  attachmentName?: string;
  attachmentUrl?: string; 
}

export interface Cohort { 
  id: string;
  name: string;
  startDate: string; 
  endDate: string;   
  status: 'ACTIVE' | 'ARCHIVED' | 'UPCOMING';
  totalHoursBudget?: number; 
  budgetCap?: number; 
  cvLabel?: string;   
}

export interface BibleVerse {
  text: string;
  reference: string;
}

export interface AppState {
  shifts: Shift[];
  employees: Employee[];
  timeLogs: TimeLog[];
  travelRequests: TravelRequest[];
  cohorts: Cohort[];
  tooltips: { [key: string]: string };
}