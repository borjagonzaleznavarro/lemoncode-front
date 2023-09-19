console.log("************** DELIVERABLE 04 *********************");

type Library = Book[];
const titleHarryPotter = "Harry Potter y la piedra filosofal";
const titleCancionHieloYFuego = "Canción de hielo y fuego";
const titleDevastacion = "Devastación";

interface Book {
    title: string,
    isRead: boolean
};

const books: Library = [
    { title: titleHarryPotter, isRead: true },
    { title: titleCancionHieloYFuego, isRead: false },
    { title: titleDevastacion, isRead: true },
]

const isBookRead = (books: Library, titleToSearch: string): boolean => {
    const book = books.find((x) => x.title === titleToSearch && x.isRead);
    return Boolean(book);
};

console.log(`${titleDevastacion} is book read:`, isBookRead(books, titleDevastacion));
console.log(`${titleCancionHieloYFuego} is book read:`, isBookRead(books, titleCancionHieloYFuego));
console.log(`${titleHarryPotter} is book read:`, isBookRead(books, titleHarryPotter));