import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Transcriptomic/i);
    
    // Check for main navigation elements
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should display main content sections', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check for main sections (adjust selectors based on your actual content)
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to different pages
    const links = [
      { text: 'Home', url: '/' },
      { text: 'Labs', url: '/labs' },
      { text: 'Resources', url: '/resources' },
      { text: 'Papers', url: '/papers' }
    ];

    for (const link of links) {
      await page.goto('/');
      const navLink = page.getByRole('link', { name: link.text });
      if (await navLink.isVisible()) {
        await navLink.click();
        await expect(page).toHaveURL(new RegExp(link.url));
      }
    }
  });
});