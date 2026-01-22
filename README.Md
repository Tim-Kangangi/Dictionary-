https://github.com/Tim-Kangangi/Dictionary-.git

 Wordly Dictionary-Project Overview

Wordly Dictionary is a simple and interactive web-based dictionary application that allows users to search for English words and instantly view their definition and pronunciation. The project is built using HTML, CSS, and JavaScript.

Features
i.Search for English words
ii.Displays word definition and pronunciation
iii.Clean and responsive layout
iv.Simple, readable, and beginner-friendly code

Languages used include:

HTML– Used for the structure and layout

CSS – Used for the styling, layout, and visual design

JavaScript – Used for logic, API requests, and DOM manipulation

Project Structure
Wordly-Dictionary/

index.html-Main HTML file
styles.css-Styling and layout
script.js-JavaScript logic and API integration
README.md-Project documentation

How it works

When a user types a word into the search input field and submits the form, JavaScript intercepts the submission to prevent the page from refreshing. The application first checks whether the input field is empty. If no word is entered, the user is prompted to provide one.
Once a valid word is entered, the application sends a request to the Dictionary API using the fetch() method. If the word exists in the dictionary, the app extracts the definition from the API response and displays it on the page. The phonetic pronunciation is also shown when available.
If the word cannot be found or if an error occurs during the request, the application displays a clear and user-friendly error message to inform the user.

Styling and Design (CSS)

The application uses a dark background to create strong contrast. A blue background is applied to the header section to make the application title stand out clearly.
The search form is laid out using Flexbox, which ensures proper spacing and alignment between the input field and the search button across different screen sizes. Buttons include hover effects to provide visual feedback and improve user interaction.
Search results are displayed on white to enhance readability and separate the content from the background. Error messages are styled in red so they are easily noticeable .

JavaScript Summary

The getElementById() method is used to select and access the form elements, including the input field and the area where results are displayed. An event listener is attached to the form to detect when the user submits a search request.

Before making any API calls, the application validates the input to ensure that the search field is not empty. This helps prevent unnecessary requests and improves the user experience.

The fetch() API is then used to retrieve word data asynchronously from the dictionary service. Once the data is received, the results are dynamically displayed on the page allowing the content to update without refreshing the page.

API Used
Free Dictionary API
Provides word meanings and phonetic pronunciations for English words.
