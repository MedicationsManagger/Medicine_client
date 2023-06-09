export class User {
    id: Number = 0;
    emailAddress: String = "";
    password: String = "";
    firstName: String = "";
    lastName: String = "";
    birthDate: Date = new Date();
    identityNumber: String = "";
    genderId: Number = 2

    constructor(emailAddress: String, password: String, firstName: String, lastName: String, identityNumber: String, birthDate: Date, genderId: Number) {
        this.emailAddress = emailAddress;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.identityNumber = identityNumber;
        this.birthDate = birthDate;
        this.genderId = genderId;
    }
}

export class MedicineForUser {

    Id: Number = 0;
    UserId: Number = 0;
    MedicineId: Number = 0;
    name: String = "";
    SumOfPills: Number = 0;
    Hour: Number = 0;
    Note: String = "";
    Status: Boolean = true;

    constructor(userId: any, medicineId: Number, sumOfPills: Number, name: String, hour: Number, note: String, status: Boolean) {
        this.UserId = userId;
        this.MedicineId = medicineId;
        this.SumOfPills = sumOfPills;
        this.name = name;
        this.Hour = hour;
        this.Note = note;
        this.Status = status;

    }
}

export class TakingMedication {
    Id: Number = 0;
    MedicineForUserId: Number = 0;
    TimeOfTakingMedicine: Date = new Date();

    constructor(medicineForUserId: Number, timeOfTakingMed: Date) {
        this.MedicineForUserId = medicineForUserId;
        this.TimeOfTakingMedicine = timeOfTakingMed;
    }

}