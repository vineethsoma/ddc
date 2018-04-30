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

  // Creates Appointment from data transport object (dto)
  static from(dto: AppointmentDto = <any>{}): Appointment {
    const a = new Appointment();

    if (!dto.id) {
      throw new Error(
        'Id is missing! Check the transport object' + JSON.stringify(dto)
      );
    }

    a.id = dto.id;
    a.name = dto.name;
    a.phone = dto.phone;

    a.startTime = new Date(dto.startTime);
    a.endTime = new Date(dto.endTime);

    return a;
  }

  createRequestDto(): AppointmentDto {
    const dto: AppointmentDto = {
      name: this.name,
      phone: this.phone,
      startTime: this.startTime.toISOString(),
      endTime: this.endTime.toISOString()
    };
    if(this.id) {
      dto.id = this.id;
    }
    return dto;
  }
}

export interface AppointmentDto {
  id?: string;
  name: string;
  phone: string;
  startTime: string; // ISO Date String
  endTime: string; // ISO Date String
}
