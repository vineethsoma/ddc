export class Appointment {
    id?: string; 
    name: string; 
    phone: string; 
    startTime: Date;
    endTime: Date;

    constructor() {
        this.startTime = new Date();
        this.endTime = new Date();
    }
}