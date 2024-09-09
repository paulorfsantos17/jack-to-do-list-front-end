import { expect, test } from '@playwright/test'

test.use({ storageState: 'storageState.json' })

test.describe('edit task (e2e)', () => {
  test('edit task success', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    await page.locator('div').filter({ hasText: /^Task 1$/ })
      .getByLabel('edit').click()

    await page.waitForTimeout(3000)

    expect(await page.getByLabel('Titulo:').inputValue()).toContain('Task 1')
    expect(await page.getByLabel('Descrição:').inputValue())
      .toContain('This is a sample task')

    await page.getByLabel('Titulo:').fill('Task 1 Updated')
    await page.getByLabel('Descrição:').fill('Descrição Test Updated')

    await page.getByRole('button', { name: 'Editar' }).click()

    await page.waitForLoadState('networkidle')

    expect(page.url()).toContain('/')
    await expect(page.getByText('Task 1 Updated')).toBeVisible()
  })
})
