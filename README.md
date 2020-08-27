# JestStudy

# 安裝Jest

```shell
npm init -y
```

![image](./images/20200826175543.png)

```shell
# -D參數代表在開發環境使用，會寫到devDependencies內，只有開發時才使用
npm install jest@24.8.0 -D
```

![image](./images/20200826180231.png)

![image](./images/20200826205110.png)

# 修改package.json

原始

![image](./images/20200826203116.png)

修改後

![image](./images/20200826203200.png)

# 執行測試

```shell
npm run test
```

測試成功的畫面

![image](./images/20200826203503.png)

故意測試失敗的畫面

![image](./images/20200826203649.png)

# 測試分成
- 單元測試 unit testing
- 集成測試

# 執行jest初始化配置

```shell
npx jest --init
```

![image](./images/20200826205534.png)

生成jest.config.js檔案

![image](./images/20200826205753.png)

# coverage(代碼覆蓋率)

原始設定，生成測試報告的資料夾名稱

```json
coverageDirectory: "coverage",
```

```shell
npx jest --coverage
```

![image](./images/20200826210033.png)

生成報告檔

![image](./images/20200826210231.png)

![image](./images/20200826210301.png)

# 自訂指令

增加script

![image](./images/20200826210759.png)

執行

```shell
num run coverage
```

![image](./images/20200826210842.png)

# 匹配器

參考matchers.test.js

# 自動監聽

原設定

![image](./images/20200827094728.png)

修改設定

![image](./images/20200827094801.png)

執行結果，執行完不會直接退出

![image](./images/20200827094854.png)

# 安裝babel

使程式支援ES6的語法

```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

![image](./images/20200827103153.png)

新增.babelrc檔

![image](./images/20200827103718.png)

# 修改檔名讓該檔案先不排入test
 
修改前

![image](./images/20200827104546.png)

修改後

![image](./images/20200827104610.png)

修改後即不會再跑該檔案的test

![image](./images/20200827105215.png)

# 安裝axios

```shell
npm install axios@0.19.0 -D
```

![image](./images/20200827105658.png)

# describe 鉤子函數

可進行分組

```ts
// 加註.only，在同一組只會測式這個方法
 test.only ("測試 chichi耳療的方法",()=>{
            massage_ins.welcome(1);
            massage_ins.server_massage_ear();
            console.log(massage_ins.server);
            expect(massage_ins.server).toEqual("chichi走進房間為您耳療");       
        })
```

![image](./images/20200827140240.png)