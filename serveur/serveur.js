const claims = {
    Username: "ahmed",
    Age: 27,
    Fullname: "ahmed Hassan"
}
const key = "$AhmedIsAwesome!";
const header = {
    alg: "HS512",
    typ: "JWT"
};
var sHeader = JSON.stringify(header);
var sPayload = JSON.stringify(claims);
const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);

console.log(sJWT);
const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InByYXZlZW4iLCJBZ2UiOjI3LCJGdWxsbmFtZSI6IlByYXZlZW4gS3VtYXIifQ.Nut6I57FYUGP973LgfOUNUBjMlaIm6NKk8ffgX4BTdQ_Wc2ob8m6uOwWlgoNMxpuRQaOoeFQOHhrIOJ_V8E-YA"
const algorithm = "HS512";
cconsole.log(
    JSRSASign.jws.JWS.verifyJWT(token, key, {
        alg: [algorithm]
    })
);
true
const aJWT = sJWS.split(".");
const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);
const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
console.log(pHeader);
console.log(pClaim);

