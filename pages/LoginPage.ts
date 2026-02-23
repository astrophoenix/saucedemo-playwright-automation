import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object para la página de Login de Saucedemo
 * URL: https://www.saucedemo.com/
 */
export class LoginPage extends BasePage {
  // Locators de elementos de la página
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logo: Locator;
  readonly loginContainer: Locator;

  // URL de la página
  readonly loginUrl: string = 'https://www.saucedemo.com/';

  constructor(page: Page) {
    super(page);
    // Inicialización de locators usando selectores CSS
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.logo = page.locator('.login_logo');
    this.loginContainer = page.locator('.login_container');
  }

  /**
   * Navega a la página de login
   */
  async goto(): Promise<void> {
    await this.navigateTo(this.loginUrl);
  }

  /**
   * Ingresa el nombre de usuario
   * @param username - Nombre de usuario a ingresar
   */
  async enterUsername(username: string): Promise<void> {
    await this.fillField(this.usernameInput, username);
  }

  /**
   * Ingresa la contraseña
   * @param password - Contraseña a ingresar
   */
  async enterPassword(password: string): Promise<void> {
    await this.fillField(this.passwordInput, password);
  }

  /**
   * Hace clic en el botón de login
   */
  async clickLoginButton(): Promise<void> {
    await this.clickElement(this.loginButton);
  }

  /**
   * Realiza el login completo con usuario y contraseña
   * @param username - Nombre de usuario
   * @param password - Contraseña
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  /**
   * Obtiene el mensaje de error mostrado
   */
  async getErrorMessage(): Promise<string> {
    return await this.getElementText(this.errorMessage);
  }

  /**
   * Verifica si el mensaje de error es visible
   */
  async isErrorMessageVisible(): Promise<boolean> {
    return await this.isElementVisible(this.errorMessage);
  }

  /**
   * Verifica que la página de login se ha cargado correctamente
   */
  async verifyLoginPageLoaded(): Promise<void> {
    await expect(this.logo).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  /**
   * Verifica que el login fue exitoso (redirección a la página de inventario)
   */
  async verifyLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory.*/);
  }

  /**
   * Verifica que se muestra un mensaje de error específico
   * @param expectedMessage - Mensaje de error esperado
   */
  async verifyErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }
}