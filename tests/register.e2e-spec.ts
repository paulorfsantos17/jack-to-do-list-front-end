import { expect, test } from '@playwright/test'

test('register successfully', async ({ page }) => {
  await page.goto('/auth/register', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome').fill('Paulo')

  await page.getByLabel('E-mail').fill('paulo@example.com')

  await page.getByLabel('Senha').fill('password')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  expect(page.url()).toContain('/auth')
})

test('register error email exist', async ({ page }) => {
  await page.goto('/auth/register', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome').fill('Paulo')

  await page.getByLabel('E-mail').fill('emailexist@example.com')

  await page.getByLabel('Senha').fill('password')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  expect(page.getByText('E-mail já esta em uso.')).toBeVisible()
})
test('register error request', async ({ page }) => {
  await page.goto('/auth/register', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome').fill('Paulo')

  await page.getByLabel('E-mail').fill('email@example.com')

  await page.getByLabel('Senha').fill('password')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  expect(page.getByText('Ocorreu um erro ao registrar a conta.')).toBeVisible()
})
