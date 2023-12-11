/**
 * Interfaz que representa un modelo de usuario.
 *
 * @interface UserModel
 * @property {string} name - El nombre del usuario.
 * @property {string} lastname - El apellido del usuario.
 * @property {string} dni - El número de documento de identidad del usuario.
 * @property {string} phone - El número de teléfono del usuario.
 * @property {string} email - La dirección de correo electrónico del usuario.
 * @property {string} board - El tablero al que pertenece el usuario.
 */
export interface UserModel {
  name: string;
  lastname: string;
  dni: string;
  phone: string;
  email: string;
  board: string;
}
