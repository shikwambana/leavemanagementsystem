import { user } from '../src/app/models/user.model';
import { employee } from '../src/app/models/employee.model';
import { staff } from '../src/app/models/staff.model';
import { leaves } from '../src/app/models/leaves.model';
import { leaverequest } from '../src/app/models/leaverequest.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
employee: employee;
staff: staff;
leaves: leaves;
leaverequest: leaverequest;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.employee = new employee();
this.staff = new staff();
this.leaves = new leaves();
this.leaverequest = new leaverequest();
//CREATE NEW DM INSTANCE
    }
}