import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages';
import { 
  validUsers, 
  lockedOutUser, 
  invalidCredentials, 
  errorMessages,
  urls 
} from '../data/users';

test.describe('Tests de Login - Saucedemo', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.describe('Tests de login exitoso', () => {
    test('Login exitoso con usuario estándar', async ({ page }) => {
      // Arrange
      const user = validUsers.standardUser;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyLoginSuccess();
    });

    test('Login exitoso con problem_user', async ({ page }) => {
      // Arrange
      const user = validUsers.problemUser;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyLoginSuccess();
    });

    test('Login exitoso con performance_glitch_user', async ({ page }) => {
      // Arrange
      const user = validUsers.performanceGlitchUser;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyLoginSuccess();
    });
  });

  test.describe('Tests de login fallido', () => {
    test('Login fallido - Usuario bloqueado', async () => {
      // Arrange
      const user = lockedOutUser;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

    test('Login fallido - Usuario inválido', async () => {
      // Arrange
      const user = invalidCredentials.invalidUsername;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Username and password do not match');
    });

    test('Login fallido - Contraseña incorrecta', async () => {
      // Arrange
      const user = invalidCredentials.invalidPassword;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Username and password do not match');
    });

    test('Login fallido - Usuario vacío', async () => {
      // Arrange
      const user = invalidCredentials.emptyUsername;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Username is required');
    });

    test('Login fallido - Contraseña vacía', async () => {
      // Arrange
      const user = invalidCredentials.emptyPassword;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Password is required');
    });

    test('Login fallido - Ambos campos vacíos', async () => {
      // Arrange
      const user = invalidCredentials.bothEmpty;

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      await loginPage.verifyErrorMessage('Username is required');
    });
  });

  test.describe('Tests de UI de la página de login', () => {
    test('Verificar elementos de la página de login', async () => {
      // Assert - Verificar que todos los elementos están visibles
      await loginPage.verifyLoginPageLoaded();
    });

    test('Verificar URL de la página de login', async ({ page }) => {
      // Assert
      expect(page.url()).toBe(urls.login);
    });

    test('Verificar título de la página', async ({ page }) => {
      // Act
      const title = await loginPage.getTitle();

      // Assert
      expect(title).toContain('Swag Labs');
    });

    test('Verificar que el botón de login está habilitado', async () => {
      // Assert
      await expect(loginPage.loginButton).toBeEnabled();
    });

    test('Verificar placeholders de los campos de entrada', async () => {
      // Assert
      await expect(loginPage.usernameInput).toHaveAttribute('placeholder', 'Username');
      await expect(loginPage.passwordInput).toHaveAttribute('placeholder', 'Password');
    });
  });
});