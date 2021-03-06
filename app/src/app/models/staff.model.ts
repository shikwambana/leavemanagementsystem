import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class staff {
  @JsonProperty('groupList', String, true)
  public groupList: string = undefined;

  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('employeeID', String, true)
  public employeeID: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('displayName', String, true)
  public displayName: string = undefined;

  @JsonProperty('department', String, true)
  public department: string = undefined;

  @JsonProperty('managerName', String, true)
  public managerName: string = undefined;

}