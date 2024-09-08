import { expect, test } from '@playwright/test'

// usa o estado do login antes de iniciar o test
test.use({ storageState: 'storageState.json' })

test('manager task show list tasks', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(3000)

  expect(page.locator('div').filter({ hasText: /^Task 1$/ })).toBeVisible()

  expect(page.locator('div').filter({ hasText: /^Task 2$/ })).toBeVisible()
})
