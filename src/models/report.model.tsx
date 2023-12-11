/**
 * Enumeración para los estados de reclamo en un informe.
 *
 * @enum {number}
 */
import { ReportClaimStatusEnum } from "@enums/reportClaimStatus.enum";

/**
 * Modelo de usuario utilizado en un informe.
 *
 * @interface UserModel
 */
import { UserModel } from "@models/user.model";


/**
 * Interfaz que representa el estado inicial de un informe.
 *
 * @interface ReportInitialStateModel
 * @extends ReportModel
 * @property {boolean} isFetched - Indica si los datos del informe han sido recuperados.
 * @property {boolean} isLoading - Indica si el informe se está cargando.
 */
export interface ReportInitialStateModel extends ReportModel {
  isFetched: boolean;
  isLoading: boolean;
}

/**
 * Interfaz que representa un informe.
 *
 * @interface ReportModel
 * @property {string} number - Número de identificación del informe.
 * @property {ReportClaimModel} claim - Modelo de reclamo asociado al informe.
 * @property {UserModel} user - Modelo de usuario asociado al informe.
 * @property {ReportPolicyModel} policy - Detalles de la póliza asociada al informe.
 */
export interface ReportModel {
  number: string;
  claim: ReportClaimModel;
  user: UserModel;
  policy: ReportPolicyModel;
}

/**
 * Interfaz que representa el modelo de un reclamo en un informe.
 *
 * @interface ReportClaimModel
 * @property {ReportClaimStatusEnum} status - Estado del reclamo en el informe.
 */
export interface ReportClaimModel {
  status: ReportClaimStatusEnum;
}

/**
 * Interfaz que representa el modelo de la póliza en un informe.
 *
 * @interface ReportPolicyModel
 * @property {string} insuranceCompany - Compañía de seguros asociada a la póliza.
 * @property {string} insuranceCompanyNumber - Número de la compañía de seguros asociada a la póliza.
 * @property {ReportPolicyCoverageModel[]} coverages - Detalles de las coberturas asociadas a la póliza.
 */
export interface ReportPolicyModel {
  insuranceCompany: string;
  insuranceCompanyNumber: string;
  coverages: ReportPolicyCoverageModel[];
}

/**
 * Interfaz que representa el modelo de cobertura de la póliza en un informe.
 *
 * @interface ReportPolicyCoverageModel
 * @property {string} name - Nombre de la cobertura.
 * @property {number} price - Precio de la cobertura.
 */
export interface ReportPolicyCoverageModel {
  name: string;
  price: number;
}
