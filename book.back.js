const { TestScheduler } = require("jest");

// const book = require("./book");
// const {book01,book02} = book;

import{book01,book02} from "./book"

test("書籍訂購方式-300元",()=>{
    expect(book01(300)).toBe("實體書");
})

test("書籍訂購版本-2000元",()=>{
    expect(book02(2000)).toBe("精裝寫真書");
})