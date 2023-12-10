import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ReportInitialStateModel, ReportModel } from "@models/report.model";
import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";
import { RootState } from "@redux/store";
import { getReportFetchByNumber } from "@services/report.service";

export const reportBase: ReportInitialStateModel = {
  isLoading: false,
  isFetched: false,
  number: "",
  claim: {
    status: ReportClaimStatusEnum.DELIVERY_OF_REQUIREMENTS,
  },
  policy: {
    coverages: [],
    insuranceCompany: "",
    insuranceCompanyNumber: "",
  },
  user: {
    name: "",
    dni: "",
    board: "",
    email: "",
    lastname: "",
    phone: "",
  },
};

const reportSlice = createSlice({
  name: "report",
  initialState: reportBase,
  reducers: {
    setReportNumber(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },
    setReport(state, action: PayloadAction<ReportInitialStateModel>) {},
    cleanReport(state, action: PayloadAction<void>) {
      localStorage.clear();
      state.isFetched = reportBase.isFetched;
      state.isLoading = reportBase.isLoading;
      state.number = reportBase.number;
      state.claim = reportBase.claim;
      state.policy = reportBase.policy;
      state.user = reportBase.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReportFetchByNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReportFetchByNumber.fulfilled,
        (state, { payload }: PayloadAction<ReportModel>) => {
          state.isFetched = true;
          state.isLoading = false;
          state.number = payload.number;
          state.claim = payload.claim;
          state.policy = payload.policy;
          state.user = payload.user;
        },
      );
  },
});

export const { setReport, setReportNumber, cleanReport } = reportSlice.actions;

export const selectReport = (state: RootState): ReportInitialStateModel =>
  state.report;

export default reportSlice.reducer;
