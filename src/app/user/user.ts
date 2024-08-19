import { Metrics } from "../metrics/Metrics";

export interface User
{
  userId: String;
  email: String;
  password: String;
  metricsList : Metrics[];
}
