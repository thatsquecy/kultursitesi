$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var bookInput = $('#book-input').val();
      var queryUrl = "http://openlibrary.org/search.json?q=" + bookInput;
  
      $.getJSON(queryUrl, function(data) {
        var bookKey = data.docs[0].key;
        var bookUrl = "https://openlibrary.org" + bookKey + ".json";
  
        $.getJSON(bookUrl, function(data) {
          var bookTitle = data.title;
          var bookAuthor = data.authors[0].name;
          var bookContent = data.text;
          var formattedContent = bookContent.replace(/\n/g, "<br>");
  
          $('#book-content').html("<h2>" + bookTitle + "</h2><p>Yazar: " + bookAuthor + "</p><br>" + formattedContent);
        });
      });
    });
  });
  