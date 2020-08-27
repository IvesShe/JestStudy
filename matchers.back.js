

test("測試005號機器人的匹配",()=>{
    // toBe 是嚴格相等
    //const num = {number:"007"};
    expect("005號機器人").toBe("005號機器人");
    //expect(num).toBe({number:"007"});   
})

test("toEqual匹配器",()=>{
    // toEqual 是內容結果的匹配
    const num = {number:"007"};
    expect(num).toEqual({number:"007"});
})

test("toBeNull匹配器",()=>{
    const num = null;
    //const num = undefined; // undefined不是null
    expect(num).toBeNull();
})

test("toBeUndefined匹配器",()=>{
    const num = undefined;
    expect(num).toBeUndefined();
})

test("toBeDefined匹配器",()=>{
    const num = 5;
    expect(num).toBeDefined();
})

test("toBeTruthy匹配器",()=>{
    const num = 5;
    expect(num).toBeTruthy();
})

test("toBeFalsy匹配器",()=>{
    const num = 0;
    expect(num).toBeFalsy();
})

test("toBeGreaterThan匹配器",()=>{
    // 大於
    const num = 10;
    expect(num).toBeGreaterThan(5);
})

test("toBeGreaterThanOrEqual匹配器",()=>{
    // 大於等於
    const num = 10;
    expect(num).toBeGreaterThanOrEqual(10);
})

test("toBeLessThan匹配器",()=>{
    // 小於
    const num = 10;
    expect(num).toBeLessThan(15);
})

test("toBeCloseTo匹配器",()=>{
    // 適用浮點數的類型
    const one = 0.3;
    const two = 0.2;
    expect(one+two).toBeCloseTo(0.5);
})

test("toContain匹配器",()=>{
    const str = ["Golang","C++","Lua"];
    expect(str).toContain("Golang");
})

test("toContain匹配器",()=>{
    const str = ["Golang","C++","Lua"];
    const data = new Set(str);
    expect(data).toContain("C++");
})


const throwNewErrorFunc = ()=>{
    //throw new Error ("this is Error");
}

// 拋出異常匹配器
test("toThrow匹配器",()=>{
    expect(throwNewErrorFunc).not.toThrow();
})