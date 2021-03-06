# BlogIt React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To run this app

Run `yarn install` on the project directory, then `yarn start` to run the app in development mode. \
Visit [http://localhost:3000](http://localhost:3000) on the browser to view it.

<br>

# Technical Debts & Improvements
### Use PropTypes or other type checking package
Introduce proptypes or typescript to reduce error rate.

### Form validation on discard
While landing on a form page, clicking on the discard button will always trigger a modal confirmation. The UX can be improved by adding extra validation so modal will not triggered when the form has not been edited. 

### Improve star rating behavior to enable validation
A workaround which setting star rating default value to 1 has been done to prevent star rating validation error on form edit.

### Better validation on filtering content
Filter content by its type will not be honoured when search text is input, the condition check needs to be improved.

### Improve experience for touch event
Add entry popup menu is not optimized for touch event.

### Improve screen real estate in mobile devices
Header is taking an expansive amount of space in mobile. 

### Page needs to scroll to the top in mobile devices
Navigating between pages keep previous page scroll position, this can be fixed by adding a custom hook to allow window top position always start at 0 on page load finish.

### Improve reachability for buttons in movile devices
When viewing a content in mobile, it is difficult to reach to the action buttons, consider moving it to a thumb-friendly area to improve reachability.

### Sort content by date
Consider adding creation date and update date, to sort the list of contents instead of id.
