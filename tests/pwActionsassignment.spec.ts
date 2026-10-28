import { test, expect,Locator } from '@playwright/test';

test('Student Registration Form - InputText', async ({ page }) => {
  // Navigate to the form
  await page.goto('https://demo.wpeverest.com/user-registration/student-registration-form/');
  await page.waitForLoadState('domcontentloaded');

  // First Name input box
  const firstName = page.locator('#first_name');

  // Check if input is visible
  console.log('Is "First Name" displayed:', await firstName.isVisible());

  // Check if input is enabled
  console.log('Is "First Name" enabled:', await firstName.isEnabled());

  // Check if mandatory (has 'required' attribute)
  const required = await firstName.getAttribute('required');
  console.log('Is "First Name" mandatory:', required !== null);

  // Get placeholder
  const placeholder = await firstName.getAttribute('placeholder');
  console.log('Placeholder text:', placeholder);

  // Get maxlength
  const maxLength = await firstName.getAttribute('maxlength');
  console.log('Max Length:', maxLength);

  // Type text into the input
  await firstName.fill('John');

  // Get entered text
  const enteredText = await firstName.inputValue();
  console.log('Entered Text:', enteredText);
  

});