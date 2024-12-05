class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.state = 100;
		this.type = null;
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}
	fix() {
		this.state = this.state *= 1.5;
	}
	set state(count) {
		if (count < 0) {
			this._state = 0;
		} else if (count > 100) {
			this._state = 100;
		} else {
			this._state = count;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}


	findBookBy(type, value) {
		let keyBook = this.books.find(book => book[type] === value);

		if (keyBook) {
			return keyBook;
		} else {
			return null;
		}
	}


	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			const book = this.books[index];
			this.books.splice(index, 1);
			return book;
		} else {
			return null;
		}
	}
}