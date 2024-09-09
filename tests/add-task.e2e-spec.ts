import { expect, test } from '@playwright/test'

test.use({ storageState: 'storageState.json' })

test.describe('add task (e2e)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/add-task')
  })

  test('add task success', async ({ page }) => {
    await page.getByLabel('Titulo:').fill('Task Test')
    await page.getByLabel('Descrição:').fill('Descrição Test')

    await page.getByRole('button', { name: 'Adicionar' }).click()

    expect(page.url()).toContain('/')
    await expect(page.getByText('New Task Test')).toBeVisible()
  })
})
