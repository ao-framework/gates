<p align="center">
    <img width="250" src="https://ao-framework.github.io/assets/readmeHeader.png">
</p>
<p align="center">
    <b>Gates. To streamline logic.</b>
</p>
<p align="center">
    <em>
        This project is currently in early development. 
        Expect erratic behaviour frequently as development happens.
    </em>
</p>

### What is Gates?
Gates is a library with many functions to make writing logic less fatiguing and more stable. The functions are broken into five categories: 
- Ensure Functions
- Is Functions
- Returning Functions
- Throwing Functions
- When Functions

### Installation
```bash
npm install --save @ao-framework/gates
```
<small><em>Typescript types are included.</em></small>

### How Do I Import Gates?
```js
// You can import a single function for tree shaking
import { isFunction } from "@ao-framework/gates"

// You can import everything
import * as gates from "@ao-framework/gates"

// You can import by using Old Faithful.
const gates = require("@ao-framework/gates")
```
*************************
<small><em>**A common use case code example is provided below each description for visual code learners.</em></small>


### Ensure Functions
This category is used to ensure that variables are what you think they are.
```ts
import { ensureObject, ensureFunction } from "@ao-framework/gates"

function myLibrary(options: iMyOptions) {
    const defaultOptions = { x: 0, y: 0 }
    const finalOptions = ensureObject(options, defaultOptions, false);
    ensureFunction(finalOptions.loaded)()
}
```
- ensureObject
- ensureArray
- ensureFunction 


### Is Functions
This category is used to assert that a variable is a particular type.
```ts
import { isString, isNumber } from "@ao-framework/gates"

function doSomething(v: string | number) {
    if(isString(v)) { /** do something */ }
    if(isNumber(v)) { /** do something */ }
}
```
<small><em>For **Typescript** users, please note that **Type Guards** were used so that intellisense knowledge is maintained.</em></small>

- isObjectLike
- isObject
- isString
- isStringWithLength
- isFunction
- isBoolean
- isNumber
- isArray
- isUndefined
- isNull
- isNill
- isBigInt
- isSymbol
- constructedFrom

#### Is Functions include the negations
- isNotObjectLike
- isNotObject
- isNotString
- isNotStringWithLength
- isNotFunction
- isNotBoolean
- isNotNumber
- isNotArray
- isNotUndefined
- isNotNull
- isNotNill
- isNotBigInt
- isNotSymbol

### Returning Functions
This category is used to make sure that you have either the correct type assigned or nothing at all.
```ts
import { returnStringWithLengthOrNothing } from "@ao-framework/gates"

function createUser(data: iCreateUserRequest) {
    const user = new User();
    user.name = returnStringWithLengthOrNothing(data.name);
    user.email = returnStringWithLengthOrNothing(data.email);
}
```

- returnObjectLikeOrNothing
- returnObjectOrNothing
- returnStringOrNothing
- returnStringWithLengthOrNothing
- returnFunctionOrNothing
- returnBooleanOrNothing
- returnNumberOrNothing
- returnArrayOrNothing
- returnNullOrNothing
- returnBigIntOrNothing
- returnSymbolOrNothing

### Throwing Functions
This category is used to streamline throwing exceptions when variables are not needed types.
```ts
import { throwWhenNotObject, throwWhenNotStringWithLength } from "@ao-framework/gates"

function validateUser(user: User) {
    throwWhenNotObject(user, "User object was not created", SystemException)
    throwWhenNotStringWithLength(user.name, "User must have a name", BadInputException)
    throwWhenNotStringWithLength(user.email, "User must have an email", BadInputException)
}
```

- throwException
- throwWhenObjectLike
- throwWhenObject
- throwWhenString
- throwWhenStringWithLength
- throwWhenFunction
- throwWhenBoolean
- throwWhenNumber
- throwWhenArray
- throwWhenUndefined
- throwWhenNull
- throwWhenNill
- throwWhenBigInt
- throwWhenSymbol

#### Throwing Functions include the negations
- throwWhenNotObjectLike
- throwWhenNotObject
- throwWhenNotString
- throwWhenNotStringWithLength
- throwWhenNotFunction
- throwWhenNotBoolean
- throwWhenNotNumber
- throwWhenNotArray
- throwWhenNotUndefined
- throwWhenNotNull
- throwWhenNotNill
- throwWhenNotBigInt
- throwWhenNotSymbol

### When Functions
This category is used to be a short replacement for if statements.
```ts
import { when, whenString } from "@ao-framework/gates"

when(something === true)(fnThatCanBeCalled)
whenString(nameOfUser)(fnThatCanBeCalledExpectingString);
```

- when
- whenObjectLike
- whenObject
- whenString
- whenStringWithLength
- whenFunction
- whenBoolean
- whenNumber
- whenArray
- whenUndefined
- whenNull
- whenNill
- whenBigInt
- whenSymbol

#### When Functions include the negations
- whenNotObjectLike
- whenNotObject
- whenNotString
- whenNotStringWithLength
- whenNotFunction
- whenNotBoolean
- whenNotNumber
- whenNotArray
- whenNotUndefined
- whenNotNull
- whenNotNill
- whenNotBigInt
- whenNotSymbol


### At the End of the Day

You can turn something like this...
```ts
import { cleanString } from "./commons"

function createPost(request: iPostRequest) {

    // validation & construction are together
    // and not easily refactorable.

    if(typeof request === "object" && request !== null) {
         const post = new Post();
        if(typeof request.title === "string") { 
            post.title = cleanString(request.title)
        } else { 
            throw new Error("Post title must be a string") 
        }
        if(typeof request.content === "string") { 
            post.content = cleanString(request.content) 
        } else { 
            throw new Error("Post content must be a string") 
        }
        if(Array.isArray(request.tags)) {
            request.tags.forEach(tag => {
                if(typeof tag !== "string") {
                    throw new Error("Post tag must be a string")
                }
            })
        } else {
            throw new Error("Post tags must be an array")
        }
    } else {
        throw new Error("Post request data is corrupt")
    }
    return post;
}
```

To something more refactorable...
```ts
import { cleanString } from "./commons"

function createPost(request: iPostRequest) {

    // validation -> easily refactorable

    assert(typeof request === "object" && request !== null, 
        "Post request data is corrupt")

    assert(typeof request.title === "string", 
        "Post title must be a string")
    
    assert(typeof request.content === "string", 
        "Post title must be a string")
    
    assert(Array.isArray(request.tags), 
        "Post title must be a string")
    
    request.tags.forEach(tag => 
        assert(typeof tag === "string", 
            "Post tag must be a string"))

    // construction -> feeling secure

    const post = new Post();
    post.title = cleanString(request.title)
    post.content = cleanString(request.content)
    post.tags = request.tags.map(tag => cleanString(tag))
    return post;
}
```
Now something more readable
```ts
import { cleanString } from "./commons"

function createPost(request: iPostRequest) {
    
    // validation -> easily refactorable

    throwWhenNotObject(request, "Post request data is corrupt")
    throwWhenNotString(request.title, "Post title must be a string")
    throwWhenNotString(request.content, "Post content must be a string")
    throwWhenNotArray(request.tags, "Post tags must be an array")
    request.tags.forEach(tag => throwWhenNotString(tag, "Post tag must be a string"))

    // construction -> feeling secure
    
    const post = new Post();
    post.title = cleanString(request.title)
    post.content = cleanString(request.content)
    post.tags = request.tags.map(tag => cleanString(tag))
    return post;
}
```
