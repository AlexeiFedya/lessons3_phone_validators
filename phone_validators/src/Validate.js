export function validate (phone) {
  let result = phone.match(/\+375(?=29|44|25|33)/);
  console.log(result);
  return phone.length === 13 && result 
}

// let code = phone.match(/\+375/);
//     let phone_code = phone.match(/\+375(?=29|33|44|25)/);
//     console.log(phone_code)
//     return {
//         phone: phone.length === 13 && !phone_code
//     }