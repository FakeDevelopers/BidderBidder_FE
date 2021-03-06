import axios from 'axios'
import {config} from './baseUrl'

async function fetchList(listNum, pageNum) {
    try {
        return await axios.get(`${config.baseUrl}/product/getPageProductList`, {
            params: {
                listCount: listNum,
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

async function submitWrite(category, imageList, hopePrice, openingBid, tick) {

    const url = `${config.baseUrl}/product/write`
    const form = new FormData()

    form.append('board_content', '경매')
    form.append('board_title', '뭐뭐 팝니다.')
    form.append('category', category)
    form.append('end_date', '2022-06-12 19:00')
    for (let image of imageList) {
        form.append('files', image)
    }
    form.append('hope_price', hopePrice)
    form.append('opening_bid', openingBid)
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

export {fetchList, submitAccount, submitWrite}
