import { expect, test } from '@playwright/test'

test('authenticated successfully', async ({ page }) => {
  await page.goto('/auth', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('paulo@example.com')

  await page.getByLabel('Senha').fill('password')

  await page.getByRole('button', { name: 'Entrar' }).click()

  expect(page.url()).toContain('/')

  const context = page.context()
  // Salva o dados do login como cookie para autenticar as próximas rotas
  await context.storageState({ path: 'storageState.json' })
})
test('authenticated Unauthorized', async ({ page }) => {
  await page.goto('/auth', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('paulo@example.com')

  await page.getByLabel('Senha').fill('passwordError')

  await page.getByRole('button', { name: 'Entrar' }).click()

  await expect(page.getByText('Email ou Senha está errado.')).toBeVisible()
})
