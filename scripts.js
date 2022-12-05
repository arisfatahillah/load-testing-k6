
import http from 'k6/http';
import { check, sleep } from 'k6';


export let options = {
    vus: 10,
    duration: '120s',
};

export default function () {
  const url = 'https://reqres.in/api/register';
  
  const payload = JSON.stringify({
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  });

  const params = {
    headers: {
        'Content-Type': 'application/json',
    },
  };

  let res = http.post(url, payload, params);

  console.log(res.body);

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

}
