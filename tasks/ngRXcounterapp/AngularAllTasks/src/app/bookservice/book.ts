import { BookserviceService } from "../bookservice.service";

export default class Book {
    BookListFromService: Book[] | undefined;
    bookserviceService: BookserviceService | undefined;
    id = 0;
    name = '';

    getAllBooks(): any[] {
        return [
            { "id": 1, "name": "HTML 5" },
            { "id": 2, "name": "CSS 3" },
            { "id": 3, "name": "Java Script" },
            { "id": 4, "name": "Ajax Programming" }
        ];
    }

}
