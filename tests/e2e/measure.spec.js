const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Measurement fixture' })).toBeVisible();
});

test('places the measure control and reports a completed line measurement', async ({ page }) => {
	const measureControl = page.locator('.leaflet-control-measure');
	await expect(measureControl).toHaveCount(1);
	await expect(page.locator('.leaflet-top.leaflet-right > .leaflet-control-measure'))
		.toBeVisible();

	await measureControl.hover();
	await measureControl.locator('.js-start').click();
	await expect(page.getByTestId('measure-event')).toHaveText('started');

	const map = page.locator('.leaflet-container');
	await map.click({ position: { x: 300, y: 250 } });
	await map.click({ position: { x: 500, y: 250 } });
	await expect(measureControl.locator('.js-results')).toContainText('Path distance');

	await measureControl.locator('.js-finish').click();

	await expect(page.getByTestId('measure-event')).toHaveText('finished');
	await expect(page.getByTestId('measure-result')).toHaveText(/"pointCount":2/);
	await expect(page.getByTestId('measure-result')).toHaveText(/"points":2/);
	await expect(page.getByTestId('measure-result')).toHaveText(/"length":\s*[1-9]\d*/);
	await expect(page.locator('.leaflet-popup-content')).toBeVisible();
});
