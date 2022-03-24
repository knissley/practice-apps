-- Case sensitivity issues when adding a word. Allows duplicates to be added if the casing is different.

--Pagination
---In general, handle data manipulation on the backend.
-Ideas:
  NO-
  -1.
  --Return all data through the GET, like normal, but only display X number of words on the front end based on a dynamic state variable of the current page. Like state.page = 1, then show words 0-9. state.page=2, then show words 10-19.. have a dynamic limit variable too? What would the display order be...


  YES-
  -2.
  --Only return 10 items to the client, but have the url contain a page query that is pulled in by a dynamic state variable for the page. The GET could then return an alphabetically sorted list chunked by the page? But then searching might get difficult? Or not because search does a whole other GET request.

  -Search should be paginated too??

  --sort the query alphabetically
  --introduct the limit and page number
  --find a way to "chunk" the query to only send back the relevant section of words from within the database table



  --Reset button refreshes the page?