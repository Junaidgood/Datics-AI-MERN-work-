import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
    // ✅ FIX: Constructor ko ek hi line mein : (colon) ke sath theek kiya
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>,
    ) {}

    async createLibrary(): Promise<Library> {
        // ✅ FIX: 'const1' nahi, sirf 'const' likhte hain
        const book1 = await this.bookModel.create({
            title: 'very good one to many umar', 
            author: 'umar',
        });

        const book2 = await this.bookModel.create({
            title: 'very good one to many', 
            author: 'Junaid',
        });

        const library = new this.libraryModel({
            name: 'central library',
            // ✅ FIX: __dirname nahi aata, seedha ._id use karte hain, aur book2 bhi add kar diya
            books: [book1._id, book2._id] 
        });

        return library.save();
    }

    async getLibraries(): Promise<Library[]> {
        // ✅ FIX: librarymodel ka 'M' capital hona chahiye (libraryModel)
        return this.libraryModel.find().populate('books').exec(); // .exec() add kiya
    }
}