/**
 * Datos de usuarios para pruebas en Saucedemo
 * https://www.saucedemo.com/
 * 
 * Usuarios de prueba aceptados por el sitio:
 * - standard_user: Usuario normal sin problemas
 * - locked_out_user: Usuario bloqueado
 * - problem_user: Usuario con problemas visuales en los productos
 * - performance_glitch_user: Usuario con problemas de rendimiento
 * - error_user: Usuario que causa errores en el sistema
 * - visual_user: Usuario con diferencias visuales
 */

export interface User {
  username: string;
  password: string;
  description: string;
}

/**
 * Usuarios válidos para pruebas
 */
export const validUsers: Record<string, User> = {
  standardUser: {
    username: 'standard_user',
    password: 'secret_sauce',
    description: 'Usuario estándar sin problemas'
  },
  problemUser: {
    username: 'problem_user',
    password: 'secret_sauce',
    description: 'Usuario con problemas visuales en productos'
  },
  performanceGlitchUser: {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    description: 'Usuario con problemas de rendimiento'
  },
  errorUser: {
    username: 'error_user',
    password: 'secret_sauce',
    description: 'Usuario que causa errores en el sistema'
  },
  visualUser: {
    username: 'visual_user',
    password: 'secret_sauce',
    description: 'Usuario con diferencias visuales'
  }
};

/**
 * Usuario bloqueado para pruebas negativas
 */
export const lockedOutUser: User = {
  username: 'locked_out_user',
  password: 'secret_sauce',
  description: 'Usuario bloqueado - no puede iniciar sesión'
};

/**
 * Credenciales inválidas para pruebas negativas
 */
export const invalidCredentials = {
  invalidUsername: {
    username: 'invalid_user',
    password: 'secret_sauce',
    description: 'Usuario con nombre inválido'
  },
  invalidPassword: {
    username: 'standard_user',
    password: 'wrong_password',
    description: 'Usuario con contraseña incorrecta'
  },
  emptyUsername: {
    username: '',
    password: 'secret_sauce',
    description: 'Usuario con nombre vacío'
  },
  emptyPassword: {
    username: 'standard_user',
    password: '',
    description: 'Usuario con contraseña vacía'
  },
  bothEmpty: {
    username: '',
    password: '',
    description: 'Usuario y contraseña vacíos'
  }
};

/**
 * Mensajes de error esperados
 */
export const errorMessages = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  emptyUsername: 'Epic sadface: Username is required',
  emptyPassword: 'Epic sadface: Password is required'
};

/**
 * URL de la aplicación
 */
export const urls = {
  login: 'https://www.saucedemo.com/',
  inventory: 'https://www.saucedemo.com/inventory.html',
  baseUrl: 'https://www.saucedemo.com'
};