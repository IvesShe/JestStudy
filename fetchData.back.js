import {fetchData,fetchTwoData,fetchThreeData,fetchFourData} from "./fetchData"
import { TestScheduler } from "jest"

// 這方法會有bug
test("FetchData 方法測試",(done)=>{
    fetchData((data)=>{
        expect(data).toEqual({
            success:true
        })
    })
    done();
})

test("FetchTwoData 方法測試",()=>{
    return fetchTwoData().then((response)=>{
        expect(response.data).toEqual({
            success:true
        })
    })
})

test("FetchThreeData 方法測試",()=>{
    //expect.assertions(1);   // 斷言，必須執行一次expect
    return fetchThreeData().catch((e)=>{
        //console.log(e.toString());
        expect(e.toString().indexOf("404")>-1).toBe(true);
    })
})

test("FetchFourData 方法測試",async()=>{
    // await expect(fetchFourData()).resolves.toMatchObject({
    //     data:{
    //         success:true
    //     }
    // })
    const response = await fetchFourData();
    expect(response.data).toEqual({
            success:true
    })
})