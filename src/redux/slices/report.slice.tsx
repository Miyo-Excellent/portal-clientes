import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ReportInitialStateModel, ReportModel } from "@models/report.model";
import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";
import { RootState } from "@redux/store";
import { getReportFetchByNumber } from "@services/report.service";


/**
 * Estado inicial para el slice de informes.
 *
 * @typedef {Object} ReportBaseState
 * @property {boolean} isLoading - Indica si la carga está en curso.
 * @property {boolean} isFetched - Indica si se ha obtenido la información.
 * @property {string} number - Número del informe.
 * @property {Object} claim - Información sobre el reclamo.
 * @property {ReportClaimStatusEnum} claim.status - Estado del reclamo.
 * @property {Object} policy - Información sobre la póliza.
 * @property {Array} policy.coverages - Coberturas de la póliza.
 * @property {string} policy.insuranceCompany - Compañía de seguros.
 * @property {string} policy.insuranceCompanyNumber - Número de la compañía de seguros.
 * @property {Object} user - Información del usuario.
 * @property {string} user.name - Nombre del usuario.
 * @property {string} user.dni - Número de identificación del usuario.
 * @property {string} user.board - Número de placa del usuario.
 * @property {string} user.email - Correo electrónico del usuario.
 * @property {string} user.lastname - Apellido del usuario.
 * @property {string} user.phone - Número de teléfono del usuario.
 * @constant
 * @type {ReportBaseState}
 */


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
    /**
     * Establece el número del informe en el estado.
     *
     * @function
     * @name setReportNumber
     * @param {ReportBaseState} state - Estado actual del slice.
     * @param {PayloadAction<string>} action - Acción con el nuevo número del informe.
     */

    setReportNumber(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },

    /**
     * Establece la información completa del informe en el estado.
     *
     * @function
     * @name setReport
     * @param {ReportBaseState} state - Estado actual del slice.
     * @param {PayloadAction<ReportInitialStateModel>} action - Acción con la información del informe.
     */
    setReport(state, action: PayloadAction<ReportInitialStateModel>) {},

    /**
     * Limpia el estado del informe, restableciendo los valores a los iniciales y eliminando los datos almacenados en el almacenamiento local.
     *
     * @function
     * @name cleanReport
     * @param {ReportBaseState} state - Estado actual del slice.
     * @param {PayloadAction<void>} action - Acción sin payload.
     */
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
        /**
         * Reductor para manejar la acción pendiente de obtener un informe por número.
         *
         * @function
         * @name getReportFetchByNumber.pending
         * @param {ReportBaseState} state - Estado actual del slice.
         */
      .addCase(getReportFetchByNumber.pending, (state) => {
        state.isLoading = true;
      })

        /**
         * Reductor para manejar la acción completada de obtener un informe por número.
         *
         * @function
         * @name getReportFetchByNumber.fulfilled
         * @param {ReportBaseState} state - Estado actual del slice.
         * @param {PayloadAction<ReportModel>} action - Acción con el modelo del informe obtenido.
         */
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
/**
 * Acciones del slice de informes.
 *
 * @constant
 * @type {Object}
 * @property {Function} setReport - Establece la información completa del informe en el estado.
 * @property {Function} setReportNumber - Establece el número del informe en el estado.
 * @property {Function} cleanReport - Limpia el estado del informe.
 */
export const { setReport, setReportNumber, cleanReport } = reportSlice.actions;

/**
 * Selector para obtener el estado del informe desde el estado global de Redux.
 *
 * @function
 * @name selectReport
 * @param {RootState} state - Estado global de Redux.
 * @returns {ReportBaseState} - Estado del informe.
 */
export const selectReport = (state: RootState): ReportInitialStateModel =>
  state.report;

/**
 * Reductor del slice de informes.
 *
 * @default
 * @type {Function}
 */
export default reportSlice.reducer;
