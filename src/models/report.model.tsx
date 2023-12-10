import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";
import { UserModel } from "@models/user.model";

export interface ReportInitialStateModel extends ReportModel {
  isFetched: boolean;
  isLoading: boolean;
}
export interface ReportModel {
  number: string;
  claim: ReportClaimModel;
  user: UserModel;
  policy: ReportPolicyModel;
}

export interface ReportClaimModel {
  status: ReportClaimStatusEnum;
}

export interface ReportPolicyModel {
  insuranceCompany: string;
  insuranceCompanyNumber: string;
  coverages: ReportPolicyCoverageModel[];
}

export interface ReportPolicyCoverageModel {
  name: string;
  price: number;
}
