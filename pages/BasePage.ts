import { Page, Locator } from '@playwright/test';

/**
 * Clase base para todos los Page Objects
 * Contiene métodos comunes que pueden ser heredados por todas las páginas
 */
export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega a una URL específica
   * @param url - URL a la que navegar
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Obtiene el título de la página actual
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Obtiene la URL actual de la página
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Espera a que un elemento sea visible
   * @param locator - Locator del elemento
   */
  async waitForElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  /**
   * Hace clic en un elemento
   * @param locator - Locator del elemento
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Llena un campo de texto
   * @param locator - Locator del campo
   * @param value - Valor a ingresar
   */
  async fillField(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  /**
   * Obtiene el texto de un elemento
   * @param locator - Locator del elemento
   */
  async getElementText(locator: Locator): Promise<string> {
    return await locator.textContent() ?? '';
  }

  /**
   * Verifica si un elemento está visible
   * @param locator - Locator del elemento
   */
  async isElementVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  /**
   * Espera a que la página cargue completamente
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
