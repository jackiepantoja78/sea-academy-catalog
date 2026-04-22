const books = [
  {
    "title": "A court of thorns and roses",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781635575569-L.jpg"
  },
  {
    "title": "A court of mist and fury",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781635575583-L.jpg"
  },
  {
    "title": "A court of wings and ruin",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781635575606-L.jpg"
  },
  {
    "title": "A court of frost and starlight",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781635575620-L.jpg"
  },
  {
    "title": "A court of silver flames",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/13316176-L.jpg"
  },
  {
    "title": "The hunger games",
    "author": "Suzanne Collins",
    "genre": "Young adult",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg"
  },
  {
    "title": "Catching fire",
    "author": "Suzanne Collins",
    "genre": "Young adult",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780439023498-L.jpg"
  },
  {
    "title": "Mockingjay",
    "author": "Suzanne Collins",
    "genre": "Young adult",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780439023511-L.jpg"
  },
  {
    "title": "Reminders of him",
    "author": "Colleen Hoover",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781542025607-L.jpg"
  },
  {
    "title": "Verity",
    "author": "Colleen Hoover",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781538724736-L.jpg"
  },
  {
    "title": "Ugly love",
    "author": "Colleen Hoover",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781476753188-L.jpg"
  },
  {
    "title": "If he had been with me",
    "author": "Laura Nowlin",
    "genre": "Young adult",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/15172586-L.jpg"
  },
  {
    "title": "If only I had told her",
    "author": "Laura Nowlin",
    "genre": "Young adult",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781728276229-L.jpg"
  },
  {
    "title": "People we meet on vacation",
    "author": "Emily Henry",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781984806758-L.jpg"
  },
  {
    "title": "Funny story",
    "author": "Emily Henry",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780593441282-L.jpg"
  },
  {
    "title": "Things we never got over",
    "author": "Lucy Score",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/15134454-L.jpg"
  },
  {
    "title": "A thousand boy kisses",
    "author": "Tillie Cole",
    "genre": "Romance",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/14862917-L.jpg"
  },
  {
    "title": "The secret history",
    "author": "Donna Tartt",
    "genre": "Mystery",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781400031702-L.jpg"
  },
  {
    "title": "The seven husbands of Evelyn Hugo",
    "author": "Taylor Jenkins Reid",
    "genre": "Contemporary fiction",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/8354226-L.jpg"
  },
  {
    "title": "Daisy Jones and the six",
    "author": "Taylor Jenkins Reid",
    "genre": "Contemporary fiction",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781524798628-L.jpg"
  },
  {
    "title": "The mountain is you",
    "author": "Brianna Wiest",
    "genre": "Self-help",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg"
  },
  {
    "title": "Atomic habits",
    "author": "James Clear",
    "genre": "Self-help",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "title": "The Paris apartment",
    "author": "Lucy Foley",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780063003057-L.jpg"
  },
  {
    "title": "The guest list",
    "author": "Lucy Foley",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780062868930-L.jpg"
  },
  {
    "title": "The midnight feast",
    "author": "Lucy Foley",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/14841234-L.jpg"
  },
  {
    "title": "The silent patient",
    "author": "Alex Michaelides",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg"
  },
  {
    "title": "The house across the lake",
    "author": "Riley Sager",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9780593183199-L.jpg"
  },
  {
    "title": "Local woman missing",
    "author": "Mary Kubica",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/10677491-L.jpg"
  },
  {
    "title": "The gift",
    "author": "Edith Eger",
    "genre": "Self-help",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781982143091-L.jpg"
  },
  {
    "title": "The lake",
    "author": "Natasha Preston",
    "genre": "Thriller",
    "read": true,
    "coverImage": "https://covers.openlibrary.org/b/id/13742082-L.jpg"
  },
  {
    "title": "Phoebe Berman's gonna lose it",
    "author": "Brooke Averick",
    "genre": "Contemporary fiction",
    "read": false,
    "coverImage": "https://prodimage.images-bn.com/pimages/9798217346936_p0_v4_s1200x1200.jpg"
  },
  {
    "title": "The perfect marriage",
    "author": "Jeneva Rose",
    "genre": "Thriller",
    "read": false,
    "coverImage": "https://covers.openlibrary.org/b/id/10833503-L.jpg"
  },
  {
    "title": "Onyx storm",
    "author": "Rebecca Yarros",
    "genre": "Fantasy",
    "read": false,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781649374189-L.jpg"
  },
  {
    "title": "The tenant",
    "author": "Katrine Engberg",
    "genre": "Mystery",
    "read": false,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781982127572-L.jpg"
  },
  {
    "title": "In five years",
    "author": "Rebecca Serle",
    "genre": "Romance",
    "read": false,
    "coverImage": "https://covers.openlibrary.org/b/isbn/9781982137441-L.jpg"
  }
]

// default cover image in case a book does not have a cover
const NO_COVER_IMAGE = "https://placehold.co/200x300?text=no+cover";

// return a filtered and sorted copy of the books array
// based on the current search, sort, and filter criteria
function getFilteredAndSorted() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const sort = document.getElementById("sort-select").value;
  const readStatus = document.getElementById("read-filter").value;

  const result = [];

  // loop through all books to find matches
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    // search matches 
    const titleMatches = book.title.toLowerCase().includes(query);
    const authorMatches = book.author.toLowerCase().includes(query);

    // filter by read or unread status
    const readMatches =
      readStatus === "all" ||
      (readStatus === "read" && book.read === true) ||
      (readStatus === "unread" && book.read === false);

    // add all matches to result array
    if ((titleMatches || authorMatches) && readMatches) {
      result.push(book);
    }
  }

  // sort result array
  // localeCompare is a built-in way to sort strings alphabetically
  if (sort === "title-az") result.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "title-za") result.sort((a, b) => b.title.localeCompare(a.title));
  else if (sort === "author-az") result.sort((a, b) => a.author.localeCompare(b.author));
  else if (sort === "author-za") result.sort((a, b) => b.author.localeCompare(a.author));

  return result;
}

// clears the grid and redraws all matching book cards
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  // the hidden card in the HTML is used as a template we clone for each book
  const templateCard = document.querySelector(".card");
  const booksToShow = getFilteredAndSorted();

  // for each book that matches the current filters,
  // create a new card and fill it with book data
  for (let i = 0; i < booksToShow.length; i++) {
    // make a copy of template
    const newCard = templateCard.cloneNode(true);
    fillCard(newCard, booksToShow[i]);
    cardContainer.appendChild(newCard);
  }

  updateCount(booksToShow.length);
}

// fills a card element with the data from one book object
function fillCard(card, book) {
  card.style.display = "block";

  const img = card.querySelector("img");
  if (book.coverImage) {
    img.src = book.coverImage;
  } else {
    img.src = NO_COVER_IMAGE;
  }
  img.alt = book.title + " cover";

  const genreBadge = card.querySelector(".genre-badge");
  genreBadge.textContent = book.genre;
  genreBadge.className = "genre-badge genre-" + book.genre.toLowerCase().replace(/\s+/g, "-");

  const readBadge = card.querySelector(".read-badge");
  if (book.read === true) {
    readBadge.textContent = "read";
    readBadge.className = "read-badge badge-read";
  } else {
    readBadge.textContent = "tbr";
    readBadge.className = "read-badge badge-tbr";
  }

  card.querySelector("h2").textContent = book.title;
  card.querySelector(".author").textContent = "by " + book.author;
}

// updates the book count shown in the footer
function updateCount(count) {
  const total = books.length;
  const countLabel = document.getElementById("book-count");
  if (count === total) {
    countLabel.textContent = total + " books total";
  } else {
    countLabel.textContent = count + " of " + total + " books";
  }
}

// resets all filters and shows every book
function clearFilters() {
  document.getElementById("search-input").value = "";
  document.getElementById("sort-select").value = "default";
  document.getElementById("read-filter").value = "all";
  showCards();
}

// run this code once the page has fully loaded
document.addEventListener("DOMContentLoaded", function() {
  showCards();

  document.getElementById("search-input").addEventListener("input", showCards);
  document.getElementById("sort-select").addEventListener("change", showCards);
  document.getElementById("read-filter").addEventListener("change", showCards);
});