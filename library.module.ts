import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { Library, LibrarySchema } from './schemas/library.schema';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Library.name, schema: LibrarySchema },
      // ✅ FIX: Yahan BookSchema aayega, LibrarySchema nahi
      { name: Book.name, schema: BookSchema }, 
    ]),
  ],
  controllers: [LibraryController], // ✅ FIX: Sirf library controller rakha hai
  providers: [LibraryService]       // ✅ FIX: Sirf library service rakha hai
})
export class LibraryModule {} // ✅ FIX: Iska naam LibraryModule hona chahiye