import { expect, test } from '@playwright/test'

test('authenticated successfully', async ({ page }) => {
  await page.goto('/auth', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('johndoe@example.com')

  await page.getByLabel('Senha').fill('password')

  await page.getByRole('button', { name: 'Entrar' }).click()

  expect(page.url()).toContain('/')
})

test('authenticated Unauthorized', async ({ page }) => {
  await page.goto('/auth', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('johndoe@example.com')

  await page.getByLabel('Senha').fill('passwordError')

  await page.getByRole('button', { name: 'Entrar' }).click()

  await expect(page.getByText('Email ou Senha está errado.')).toBeVisible()
})
