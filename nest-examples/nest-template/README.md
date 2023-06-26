# nestjs-template
NestJS template construction, usage tutorial, implementation, and encapsulation of functions.

## Overview

- [x] Scheduled task execution
- [x] File upload and download
- [x] Mail service (send email)
- [x] Task queue (queue processing data)
- [x] Monitor server performance, interfaces, etc.
- [x] Encapsulate exception handling (unified return error format)
- [x] JWT authentication, permission control (registration/login)
- [x] HttpModule request for third-party interfaces (Axios encapsulation)
- [x] Use Swagger to generate API documents (provided to the front end)
- [x] Use GraphQL for interface (front end can customize data)
- [x] Use Typeorm to operate the database (Mysql operation)
- [x] Logger listens to interface requests (print front-end request details)
- [x] Guards validate roles (determine whether there is permission to call)
- [x] Pipe converts parameter types (converts the values ​​passed by the front end)


## 1. Install and Start the Project
```git
npm i -g @nestjs/cli
```
### 1.1 Build the Project
> Replace service with your own project name

```bash
nest new service
```

### 1.2 Start the Project
For more commands, see the package.json file

```bash
yarn start
or
npm start
#如你希望文件变化项目便自动重启，就在后面加:dev
yarn start:dev
or
npm start:dev
```

## 3. Directory Structure

| **文件夹/文件** | **说明** |
| --- | --- |
| main.ts | The entry file for the entire project |
| app.module.ts | Collection of all project modules |
| modules | Routing module storage/possibly all front-end requested interfaces |

## 4. 关于modules
| **文件** | **快捷命令** | **说明** |
| --- | --- | --- |
| controller | nest g co modules/ | Controller for Http request |
| module | nest g mo modules/ | Responsible for importing and associating functional modules |
| service | nest g s modules/ | Responsible for returning results, querying the database, and querying other interfaces |
| resolver | nest g r modules/ | graphql |
| entity | 不支持 | Manages the database table structure |
| dto/ | 不支持 | Defines data types |
| *.spec.ts | 自动 | Relevant test files |
|  |  |  |


## Summary
```git
npm i -g @nestjs/cli
nest new project-name
yarn start:dev
```
## Process

1. yarn start:dev
1. Create a logger to listen for requests
1. Use exception handling ExceptionFilter to encapsulate a unified format
1. Add pipe to process data types
1. Provide API to the front end with Swagger or GraphQL

