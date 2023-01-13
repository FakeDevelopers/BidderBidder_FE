import axios from 'axios'
import {config} from './baseUrl'
import {setInterceptors} from './interceptors'

async function fetchList(listNum, pageNum, searchWords, searchTypes) {
    try {
        return await axios.get(`${config.baseUrl}/product/getPageProductList`, {
            params: {
                listCount: listNum,
                searchType: searchTypes,
                searchWord: searchWords,
                page: pageNum
            }
        })
    } catch (error) {
        console.log(error);
    }
}

async function submitAccount(email, passwd) {
    const url = `${config.baseUrl}/user/login`
    const form = new FormData()

    form.append('email', email)
    form.append('passwd', passwd)

    try {
        const response = await axios.post(url, form)
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

async function submitWrite(category, imageList, hopePrice, openingBid, represent, tick) {

    const url = `${config.baseUrl}/product/write`
    const form = new FormData()

    form.append('productContent', '경매')
    form.append('productTitle', '뭐뭐 팝니다.')
    form.append('category', category)
    form.append('expirationDate', '2022-09-27 19:00')
    for (let image of imageList) {
        form.append('files', image)
    }
    form.append('representPicture', represent)
    form.append('hopePrice', hopePrice)
    form.append('openingBid', openingBid)
    form.append('tick', tick)

    try {
        const response = await axios.post(url, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

async function requestSocialSignin(provider, token) {
    const url = `${config.baseUrl}/user/signin-${provider}`;
    const auth = `Bearer ${token}`;

    try {
        const response = await axios
          .post(url, {}, {
            headers: {
                Authorization: auth
            }
          })
          .then((res) => {
              console.log(res);
          })
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

function createInstance() {
    const instance = axios.create();
    return instance;
}
export const instance = createInstance();
function createInstanceWithAuth() {
    const instance = axios.create();
    return setInterceptors(instance);
}
export const instanceWithAuth = createInstanceWithAuth();

export {fetchList, submitAccount, submitWrite, requestSocialSignin}
