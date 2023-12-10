import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReportAction } from "@actions/getReport.action";
import { ReportModel } from "@models/report.model";

export const getReportFetchByNumber = createAsyncThunk(
  "report/fetchByNumber",
  async (number: string): Promise<ReportModel> => {
    return getReportAction({ number });
  },
);
