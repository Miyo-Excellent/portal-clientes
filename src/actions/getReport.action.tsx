"use server";
import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";
import { ReportInitialStateModel } from "@models/report.model";

export interface GetReportActionOptions {
  number: string;
}

export const getReportAction = async ({
  number,
}: GetReportActionOptions): Promise<ReportInitialStateModel> => {
  return {
    isLoading: false,
    isFetched: false,
    number,
    claim: {
      status: ReportClaimStatusEnum.DELIVERY_OF_REQUIREMENTS,
    },
    user: {
      name: "Sorangel",
      lastname: "Contreras",
      dni: "12312313",
      phone: "12313123",
      email: "test@gmail.com",
      board: "SSM765",
    },
    policy: {
      insuranceCompany: "Mapfre",
      insuranceCompanyNumber: "124912939123",
      coverages: [
        {
          name: "Responsabilidad Civil Extracontractual",
          price: 200,
        },
        {
          name: "",
          price: 500,
        },
        {
          name: "",
          price: 0,
        },
      ],
    },
  };
};
