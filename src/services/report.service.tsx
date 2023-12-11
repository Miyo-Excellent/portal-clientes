import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReportAction } from "@actions/getReport.action";
import { ReportModel } from "@models/report.model";


/**
 * Acción asíncrona para obtener un informe por número.
 *
 * @function
 * @name getReportFetchByNumber
 * @memberof module:redux/thunks
 * @async
 * @param {string} number - Número del informe a recuperar.
 * @returns {Promise<ReportModel>} - Promesa que resuelve con el modelo de informe.
 * @throws {Error} Si hay un error durante la recuperación del informe.
 * @example
 * // Uso en un componente de React o en un archivo Redux.
 * dispatch(getReportFetchByNumber("12345"));
 */


export const getReportFetchByNumber = createAsyncThunk(
  "report/fetchByNumber",

  async (number: string): Promise<ReportModel> => {
    return getReportAction({ number });
  },
);
