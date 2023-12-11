
/**
 * @file Archivo principal para la acción getReport.
 * @description Este archivo contiene la implementación de la acción getReport.
 * @module actions/getReportAction
 * @requires enums/reportClaimStatus.enum
 * @requires models/report.model
 */

"use server";
import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";
import { ReportInitialStateModel } from "@models/report.model";

/**
 * Opciones para la acción getReport.
 *
 * @interface GetReportActionOptions
 * @property {string} number - Número asociado al reporte.
 */
export interface GetReportActionOptions {
  number: string;
}

/**
 * Obtiene un reporte con la información específica asociada al número proporcionado.
 *
 * @async
 * @function getReportAction
 * @param {GetReportActionOptions} options - Opciones para la acción getReport.
 * @returns {Promise<ReportInitialStateModel>} - Promesa que resuelve con el estado inicial del reporte.
 */

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
      name: "Adriana",
      lastname: "Salas Mendez",
      dni: "12312313",
      phone: "506-12313123",
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
          name: "Gastos Médicos para Ocupantes del Vehículo ",
          price: 500,
        },
        {
          name: "Accidentes al Conductor",
          price: 100,
        },
      ],
    },
  };
};
