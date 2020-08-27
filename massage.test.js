import massage from "./massage"
import { TestScheduler } from "jest";

const massage_ins = new massage();

describe("我是父級分組",()=>{
    beforeAll(()=>{
        console.log("beforeAll: 運動之後，走進健身按摩中心")
    })

    // beforeEach(()=>{
    //     console.log("beforeEach: 付了服務費之後")
    // })

    describe("ivesshe相關服務",()=>{
        beforeAll(()=>{
            console.log("----然後走進了666號房間")
        })
        afterEach(() => {
            console.log("------ivesshe，服務優良，給您五顆星")
        })
        test ("測試 ivesshe按摩的方法",()=>{
            massage_ins.welcome(0);
            massage_ins.server_massage();
            console.log(massage_ins.server);
            expect(massage_ins.server).toEqual("ivesshe走進房間為您按摩");       
        })

        test.only ("測試 ivesshe泰式保健的方法",()=>{
            massage_ins.welcome(0);
            massage_ins.server_massage_thai();
            console.log(massage_ins.server);
            expect(massage_ins.server).toEqual("ivesshe走進房間為您泰式保健");       
        })
    })

    describe("chichi相關服務",()=>{
        beforeAll(()=>{
            console.log("----然後走進了777號房間")
        })
        afterEach(() => {
            console.log("------chichi，服務優良，給您五顆星")
        })
        test ("測試 chichi足療的方法",()=>{
            massage_ins.welcome(1);
            massage_ins.server_foot();
            console.log(massage_ins.server);
            expect(massage_ins.server).toEqual("chichi走進房間為您足療");   
        })
        
        test.only ("測試 chichi耳療的方法",()=>{
            massage_ins.welcome(1);
            massage_ins.server_massage_ear();
            console.log(massage_ins.server);
            expect(massage_ins.server).toEqual("chichi走進房間為您耳療");       
        })
    })


    // afterEach(()=>{
    //     console.log("afterEach: 完成後，心情特別放鬆")
    // })

    // afterAll(()=>{
    //     console.log("afterAll: 偶爾放鬆舒適一下，才能再度出發!")
    // })

})