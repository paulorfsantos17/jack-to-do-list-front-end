import { expect, test } from '@playwright/test'

test.use({ storageState: 'storageState.json' })

test(' task view(e2e)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.locator('div').filter({ hasText: /^Task 1$/ })
    .getByText('Task 1').click()

  await expect(page.getByRole('heading', { name: 'Task' })
    .getByText('Task 1')).toBeVisible()
  await expect(page.getByText('This is a sample task')).toBeVisible()
})
