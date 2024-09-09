import { expect, test } from '@playwright/test'

// insere o cookie de autentificação usando o arquivo storageState.json
// que está na raiz do projeto
test.use({ storageState: 'storageState.json' })
test.describe('manager task (e2e)', () => {
  test('Show List Task', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('div').filter({ hasText: /^Task 1$/ }))
      .toBeVisible()

    await expect(page.locator('div').filter({ hasText: /^Task 2$/ }))
      .toBeVisible()
    await page.waitForTimeout(3000)
  })

  test('manager tasks - redirect page edit task', async ({ page }) => {
    await page.goto('/')
    await page.locator('div').filter({ hasText: /^Task 1$/ })
      .getByLabel('edit').click()
    expect(page.url()).toContain('/edit-task')
  })

  test('manager tasks -  remove task', async ({ page }) => {
    await page.goto('/')
    await page.locator('div').filter({ hasText: /^Task 1$/ })
      .getByLabel('remove').click()
    await expect(page.locator('div').filter({ hasText: /^Task 1$/ }))
      .toHaveCount(0)
  })

  test('manager tasks -  completed task', async ({ page }) => {
    await page.goto('/')
    await page.locator('div').filter({ hasText: /^Task 1$/ })
      .getByLabel('check').click()
    await expect(page.locator('div').filter({ hasText: /^Task 1$/ })
      .getByLabel('check')).toBeDisabled()
    await expect(page.locator('div').filter({ hasText: /^Task 1$/ })
      .locator('svg.text-success')).toBeVisible()
  })

  test('manager tasks - redirect page add task', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Adicionar' }).click()
    expect(page.url()).toContain('/add-task')
  })
})
