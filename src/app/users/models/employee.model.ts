export interface Employee {
    employeeId: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    nid?: string;
    bankAccount?: string;
    bankName?: string;
    designation: string;
    salary?: number;
    managerId?: string;
    dateOfBirth?: Date;
    joinedAt: Date;
}