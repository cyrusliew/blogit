# BlogIt React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this app

Run `yarn install` on the project directory, then `yarn start` to run the app in development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>

# Technical Debts & Improvements
## Form validation on discard
While landing on a form page regardless of the present of existing data, clicking on the discard button will always trigger a modal confirmation. The UX can be improved by adding extra validation so modal will not triggered when the form has not been edited. 

## Better validation on filtering content
Filter content by its type will not be honoured when search text is input, the condition check needs to be improved.

## Improve experience for touch event
Add entry popup menu is not optimized for touch event.

## Improve screen real estate in mobile devices
Header is taking an expansive amount of space in mobile. 

## Page needs to scroll to the top in mobile devices
Navigating between pages keep previous page scroll position, add a custom hook to allow window top position always start at 0 on page load finish.

## Improve reachability for buttons in movile devices
When viewing a content in mobile, it is difficult to reach to the action buttons, consider moving it to a thumb-friendly area to improve reachability.