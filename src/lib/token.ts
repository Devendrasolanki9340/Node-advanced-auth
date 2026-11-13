
import  Jwt  from "jsonwebtoken";


export function createAcessToken (
    userId :string ,
    role : "user"| "admin ",
    tokenVersion : number
 ) {
    const payload = {sub : userId , role , tokenVersion}

    return Jwt.sign(payload , process.env.
JWT_ACCESS_SECRET! , {
    expiresIn : "30m" ,
})
}

export function verifyAccessToken (token: string) {
    return Jwt.verify(token , process.env.JWT_ACCESS_SECRET!) as {
        sub : string;
        role : 'user' | "admin" ;
        tokenVersion : number ;
}
}


export function createRefreshToken (
    userId :string ,
    tokenVersion : number
 ) {
    const payload = {sub : userId ,  tokenVersion }

    return Jwt.sign(payload , process.env.
JWT_ACCESS_SECRET! , {
    expiresIn : "7d" ,
})
}


export function verifyRefreshToken (token: string) {
    return Jwt.verify(token , process.env.JWT_ACCESS_SECRET!) as {
    sub : string ;
    tokenVersion : number
}
}